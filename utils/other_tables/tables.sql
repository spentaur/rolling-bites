CREATE TABLE IF NOT EXISTS Trucks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  path TEXT NOT NULL,
  banner TEXT NOT NULL,
  avatar TEXT NOT NULL,
  verified INTEGER NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  website TEXT,
  instagram TEXT,
  facebookName TEXT,
  facebookPath TEXT,
  email TEXT,
  delivery INTEGER NOT NULL,
  privateEvents INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS MenuSections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  truck_id INTEGER,
  title TEXT NOT NULL,
  rank INTEGER NOT NULL,
  description TEXT,
  FOREIGN KEY (truck_id) REFERENCES Trucks(id)
);

CREATE TABLE IF NOT EXISTS MenuItems (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  section_id INTEGER,
  name TEXT NOT NULL,
  description TEXT,
  price TEXT,
  FOREIGN KEY (section_id) REFERENCES MenuSections(id)
);

CREATE TABLE IF NOT EXISTS Schedule (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  truck_id INTEGER,
  location_id INTEGER,
  datetimeOpen INTEGER NOT NULL,
  datetimeClose INTEGER NOT NULL,
  description TEXT,
  dateString TEXT NOT NULL,
  timeString TEXT NOT NULL,
  FOREIGN KEY (truck_id) REFERENCES Trucks(id),
  FOREIGN KEY (location_id) REFERENCES Locations(id)
);

CREATE TABLE IF NOT EXISTS Locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  lat REAL NOT NULL,
  lon REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS Areas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  area TEXT NOT NULL,
  lat REAL NOT NULL,
  lon REAL NOT NULL
);
