INSERT INTO Trucks (
  name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents
) VALUES (
  'The House of Brisket/Paris', 'thehouseofbrisketparis', '/images/house-of-brisket-homepage.jpeg', '/images/house-of-brisket.jpeg', 0, 'We specialize in brisket with a unique flavor all its own. We are a mobile unit that sets up at different locations.', 'Paris, IL', 'thehouseofbrisketparis.com', NULL, 'The House of Brisket/Paris', 'https://www.facebook.com/thehouseofbrisketparis', 'thehouseofbrisketparis@gmail.com', 0, 1
);

INSERT INTO MenuSections (truck_id, title, rank)
VALUES
(6, 'Entrees', 1),
(6, 'Snacks', 2),
(6, 'Drinks', 3);

INSERT INTO MenuItems (section_id, name, description, price)
VALUES
(26, 'Big Chubby', '(Russet Potato) Brisket or Pulled Pork - Coleslaw, Cheese - Sour Cream Butter', '$10.00 - Pork, $12.00 - Brisket'),
(26, 'Sweet Chubby', '(Sweet Potato) Brisket or Pulled Pork - Coleslaw, Cheese - Sour Cream - Butter', '$10.00 - Pork, $12.00 - Brisket'),
(26, 'Chubby Platter', 'Coleslaw, Cheese - Sour Cream - Butter, Baked Beans - Potato Salad', '$13.00 - Pork, $15.00 - Brisket'),
(26, 'Big Chubby Max', 'Same as Big Chubby plus Pork Belly, Burnt Ends', '$15.00 - Pork, $17.00 - Brisket'),
(26, 'Brisket Sandwich', 'Pickle - Chips', '$12.00'),
(26, 'Brisket Platter', '(Choice of 2) Coleslaw - Baked Beans - Potato Salad', '$15.00'),
(26, 'Pulled Pork Sandwich', 'Pickle - Chips', '$10.00'),
(26, 'Pulled Pork Platter', '(Choice of 2) Coleslaw - Baked Beans - Potato Salad', '$13.00'),
(26, 'Pork Belly Burnt Ends', 'Pickle - Chips', '$14.00'),
(26, 'Pork Belly Burnt Ends Platter', '(Choice of 2) Coleslaw - Baked Beans - Potato Salad', '$17.00'),
(26, 'BBQ Chicken Platter', '(Choice of 2) Coleslaw - Baked Beans - Potato Salad', '$12.00'),
(26, 'Pig in a Pouch', 'Fritos - Smoked Pulled Pork - Cheddar Cheese - Coleslaw - Baked Beans', '$10.00'),
(26, 'Bull in a Box', 'Fritos - Smoked Brisket - Cheddar Cheese, Coleslaw - Baked Beans', '$12.00'),
(26, 'The Meateater', 'Brisket - Pulled Pork - Pork Belly', '$25.00'),
(26, 'Meateater Max', 'Brisket - Pulled Pork - Pork Belly - BBQ Ribs', '$35.00'),
(26, 'Half Slab BBQ Ribs', '2 sides', '$20.00'),
(26, 'Full Slab BBQ Ribs', '2 sides', '$30.00'),
(27, 'Brisket Mac', NULL, '$14.00'),
(27, 'Pulled Pork Mac', NULL, '$12.00'),
(27, 'Brisket Nachos', NULL, '$14.00'),
(27, 'Pulled Pork Nachos', NULL, '$12.00'),
(27, 'Extra Side', NULL, '$3.00'),
(28, 'Coke', NULL, '$2.00'),
(28, 'Diet Coke', NULL, '$2.00'),
(28, 'Sprite', NULL, '$2.00'),
(28, 'Water', NULL, '$2.00');