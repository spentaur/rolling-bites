import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const trucks = sqliteTable("Trucks", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  path: text("path").notNull(),
  banner: text("banner").notNull(),
  avatar: text("avatar").notNull(),
  verified: integer("verified").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  website: text("website").notNull(),
  instagram: text("instagram"),
  facebookName: text("facebookName"),
  facebookPath: text("facebookPath"),
  email: text("email").notNull(),
  delivery: integer("delivery").notNull(),
  privateEvents: integer("privateEvents").notNull(),
});

export const menuSections = sqliteTable("MenuSections", {
  id: integer("id").primaryKey(),
  truck_id: integer("truck_id").references(() => trucks.id),
  title: text("title"),
  rank: integer("rank"),
  description: text("description"),
});

export const menuItems = sqliteTable("MenuItems", {
  id: integer("id").primaryKey(),
  section_id: integer("section_id").references(() => menuSections.id),
  name: text("name"),
  description: text("description"),
  price: real("price"),
});

export const scheduleItems = sqliteTable("Schedule", {
  id: integer("id").primaryKey(),
  truck_id: integer("truck_id").references(() => trucks.id),
  location_id: integer("location_id").references(() => locations.id),
  dateString: text("dateString"),
  timeString: text("timeString"),
  datetimeOpen: integer("datetimeOpen"),
  datetimeClose: integer("datetimeClose"),
  description: text("description"),
});

export const locations = sqliteTable("Locations", {
  id: integer("id").primaryKey(),
  name: text("name"),
  location: text("location"),
  lat: real("lat"),
  lon: real("lon"),
});
