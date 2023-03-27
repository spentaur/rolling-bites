import { json, LoaderArgs } from "@remix-run/cloudflare";
import Fuse from "fuse.js";

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const t = url.searchParams.get("t");

  const data = require("../../data/trucks.json");
  const options = {
    keys: ["name"],
    useExtendedSearch: true,
  };
  const fuse = new Fuse(data, options);
  const truck = fuse.search(`${t}`);
  if (!truck.length) {
    throw new Response("What a joke! Not found.", { status: 404 });
  }
  const schedule = truck[0].item.schedule.filter(
    (event: { datetimeClose: string }) =>
      new Date(event.datetimeClose) >= new Date()
  );

  const current = schedule.filter((item) => {
    const open = new Date(item.datetimeOpen);
    const close = new Date(item.datetimeClose);
    const now = new Date();
    if (now >= open && now <= close) {
      return item;
    }

    return false;
  });
  if (current.length > 0) {
    return json({
      message: `${truck[0].item.name} is open right now until ${
        current[0].time.split("-")[1]
      }. They are at ${current[0].name}, ${current[0].location}`,
    });
  }
  if (schedule.length > 0) {
    return json({
      message: `${
        truck[0].item.name
      } is not open right now. Their next event is on ${schedule[0].date
        .split(",")
        .slice(0, -1)
        .join(",")} from ${schedule[0].time.replace("-", " to ")} at ${
        schedule[0].name
      }, ${schedule[0].location}`,
    });
  }
  return json({
    message: `${truck[0].item.name} is not open right now, and there are no upcoming events.`,
  });
};
