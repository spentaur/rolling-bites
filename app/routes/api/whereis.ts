import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { eq, gte, lte, sql, and } from "drizzle-orm";
import Fuse from "fuse.js";
import { getDbFromContext } from "~/db/db.service.server";
import {
  trucks,
  menuSections,
  menuItems,
  scheduleItems,
  locations,
} from "~/db/schema";

export const loader = async ({ context, params, request }: LoaderArgs) => {
  const url = new URL(request.url);
  const t = url.searchParams.get("t");
  const db = getDbFromContext(context);


  const truckData = await db
    .select()
    .from(trucks)
    .where(sql`lower(${trucks.path}) like lower(${t})`)
    .get();
  if (!truckData) {
    throw new Response("What a joke! Not found.", { status: 404 });
  }
  const unixTimestamp = Math.floor(Date.now() / 1000);
  const twoWeeksFromNowInSeconds = unixTimestamp + 1684208653;

  const currentShifts = await db
      .select({
      datetimeOpen: scheduleItems.datetimeOpen,
      datetimeClose: scheduleItems.datetimeClose,
      description: scheduleItems.description,
      dateString: scheduleItems.dateString,
      timeString: scheduleItems.timeString,
      name: locations.name,
      location: locations.location,
      lat: locations.lat,
      lon: locations.lon,
    })
    .from(scheduleItems)
      .where(
        and(
          eq(scheduleItems.truck_id, truckData.id),
          gte(scheduleItems.datetimeClose, unixTimestamp),
          lte(scheduleItems.datetimeOpen, unixTimestamp)
        )
  )
        .leftJoin(locations, eq(scheduleItems.location_id, locations.id))
      .all();

  const schedule = await db
    .select({
      datetimeOpen: scheduleItems.datetimeOpen,
      datetimeClose: scheduleItems.datetimeClose,
      description: scheduleItems.description,
      dateString: scheduleItems.dateString,
      timeString: scheduleItems.timeString,
      name: locations.name,
      location: locations.location,
      lat: locations.lat,
      lon: locations.lon,
    })
    .from(scheduleItems)
    .where(
      and(
        eq(scheduleItems.truck_id, truckData.id),
        lte(scheduleItems.datetimeClose, twoWeeksFromNowInSeconds),
        gte(scheduleItems.datetimeClose, unixTimestamp)
      )
    )
    .orderBy(scheduleItems.datetimeOpen)
    .leftJoin(locations, eq(scheduleItems.location_id, locations.id))
    .all();

  if (currentShifts.length > 0) {
    console.log(currentShifts);
    return json({
      message: `${truckData.name} is open right now until ${
        currentShifts[0].timeString.split("-")[1]
      }. They are at ${currentShifts[0].name}, ${
        currentShifts[0].location && currentShifts[0].location
      }`,
    });
  }
  if (schedule.length > 0) {
    console.log(currentShifts);
    return json({
      message: `${
        truckData.name
      } is not open right now. Their next event is on ${schedule[0].dateString
        .split(",")
        .slice(0, -1)
        .join(",")} from ${schedule[0].timeString.replace("-", " to ")} at ${
        schedule[0].name
      }, ${schedule[0].location}`,
    });
  }
  return json({
    message: `${truckData.name} is not open right now, and there are no upcoming events.`,
  });
};
