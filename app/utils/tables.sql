CREATE TABLE IF NOT EXISTS Trucks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  path TEXT NOT NULL,
  banner TEXT NOT NULL,
  avatar TEXT NOT NULL,
  verified INTEGER NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  website TEXT NOT NULL,
  instagram TEXT,
  facebookName TEXT,
  facebookPath TEXT,
  email TEXT NOT NULL,
  delivery INTEGER NOT NULL,
  privateEvents INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS Tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER,
  tag TEXT NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id)
);

CREATE TABLE IF NOT EXISTS AreasServed (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER,
  area TEXT NOT NULL,
  lat REAL NOT NULL,
  lon REAL NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id)
);

CREATE TABLE IF NOT EXISTS MenuSections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER,
  title TEXT NOT NULL,
  description TEXT,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id)
);

CREATE TABLE IF NOT EXISTS MenuItems (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER,
  name TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  FOREIGN KEY (section_id) REFERENCES MenuSections(id)
);

CREATE TABLE IF NOT EXISTS Schedule (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  restaurant_id INTEGER,
  location_id INTEGER,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  datetimeOpen TEXT NOT NULL,
  datetimeClose TEXT NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurants(id),
  FOREIGN KEY (location_id) REFERENCES Locations(id)
);

CREATE TABLE IF NOT EXISTS Locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  lat REAL NOT NULL,
  lon REAL NOT NULL
);
