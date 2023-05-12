INSERT INTO Trucks (
  id, name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents
) VALUES (
  7, 'Burrito King', 'burritoking', '/images/burrito-king-homepage.jpeg', '/images/burrito-king.jpeg', 1, 'Burrito King is home of the best Mexican food in the Champaign-Urbana area. We are a favorite among students and locals', 'Champaign, IL', 'burritoking.us', NULL, 'Burrito King', 'https://www.facebook.com/burritokinguiuc/', 'info@burritoking.us', 0, 1
);

INSERT INTO MenuSections (truck_id, title, rank, description)
VALUES 
(7, 'Entrees', 1, 'Meats: Grilled Steak, Grilled Chicken, Ground Beef, Spicy Pork (pastor), Pork (carnitas), Mexican Sausage (chorizo), Veggie'),
(7, 'Drinks', 2, NULL),
(7, 'Extras', 3, NULL);

INSERT INTO MenuItems (section_id, name, description, price)
VALUES
(29, 'Breakfast Burrito', 'Rice, beans, scramble eggs, cheese, lettuce, tomatoes, cilantro, onions, sour cream, and sweet corn. Choice of chorizo, or any choice below.', '$10.50'),
(29, 'Quesadilla', 'Choice of meat, tomatoes, rice, cheese dip, sour cream, lettuce', NULL),
(29, 'Burrito', 'Choice of meat, beans, rice, sweet corn, lettuce, cheese, sour cream, onion, cilantro, tomatoes', NULL),
(29, 'King Nachos', 'Choice of meat, lettuce, tomatoes, onions, cilantro, jalapeños, beans, sour cream, cheese dip', '$10.50'),
(29, 'Quesadela', 'Choice of meat, bell pepper, lettuce, tomatoes, grilled onions, rice, cheese dip, sour cream', '$11.00'),
(29, 'Torta', 'Choice of meat, lettuce, tomatoes, onions, cilantro, jalapeños, beans, cheese, avocado, mayonnaise or sour cream', '$11.00'),
(29, 'Taco', 'Choice of meat, Mexican style (cilantro and onions) or American style (lettuce, cheese, tomatoes and sour cream)', '$3.25'),
(30, 'Jarrito', NULL, '$2.50'),
(30, 'Coke', NULL, '$1.00'),
(30, 'Diet Coke', NULL, '$1.00'),
(30, 'Water', NULL, '$1.00'),
(31, 'Cheese Dip and Chips', NULL, '$10.50'),
(31, 'Chips', NULL, '$1.25'),
(31, 'Guacamole Dip and Chips', NULL, '$5.50'),
(31, 'Elote', NULL, '$3.25'),
(31, 'Rice', NULL, '$2.50'),
(31, 'Beans', NULL, '$2.50'),
(31, '8oz Salsa', NULL, '$1.99');