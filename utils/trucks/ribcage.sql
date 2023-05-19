INSERT INTO Trucks (name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents)
VALUES 
('The Ribcage Food Truck', 'ribcage', '/images/ribcage-homepage.jpg', '/images/ribcage.jpg', 0, 'The Ribcage was started as a food truck in 2016 and we are back!', 'St Joseph, IL', NULL, NULL, 'The Ribcage Food Truck', 'https://www.facebook.com/profile.php?id=100091852425184', NULL, 0, 1);

INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (8, 'Entrees', NULL, 1);
INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (8, 'Sides', NULL, 2);

INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, 'Pulled Pork', NULL, '$9.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, 'Pulled Beef', NULL, '$9.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, '1/2 Chicken', NULL, '$10.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, '4 Ribs', NULL, '$10.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, 'Polish', NULL, '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, 'Nachos', NULL, '$12.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (32, 'Nachos', NULL, '$12.00');

INSERT INTO MenuItems (section_id, name, description, price) VALUES (33, 'Pit Beans', NULL, '$4.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (33, 'Mac', NULL, '$4.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (33, 'Potato Salad', NULL, '$4.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (33, 'Corn Muffin', NULL, '$4.00');
