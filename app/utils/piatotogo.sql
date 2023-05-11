INSERT INTO Trucks (
  id, name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents
) VALUES (
  5, 'Piato To Go', '/piato', '/images/piato-homepage.jpeg', '/images/piato.jpeg', 1, 'Piato is located at 804 E. Main St. Urbana, Il 61802. Serving delicious catering and box lunch meals!', 'Urbana, IL', 'piatocafe.com', NULL, 'Piato Cafe', 'https://www.facebook.com/profile.php?id=100063706864398', 'info@piatocafe.com', 0, 1
);

-- Menu Sections
INSERT INTO MenuSections (truck_id, title, rank) VALUES (5, 'Entrees', 21);
INSERT INTO MenuSections (truck_id, title, rank) VALUES (5, 'Sides', 22);
INSERT INTO MenuSections (truck_id, title, rank) VALUES (5, 'Smoothies', 23);
INSERT INTO MenuSections (truck_id, title, rank) VALUES (5, 'Iced Coffee', 24);
INSERT INTO MenuSections (truck_id, title, rank) VALUES (5, 'Beverages', 25);

-- Entrees
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Hawaiian Nachos', 'Tortilla Chips topped with Modelo Chicken, Pineapple Salsa & Hawaiian BBQ sauce', '$9.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (21, 'Homemade Chicken Fingers and Fries', '$9.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Finding Nemo', 'Cod Tacos, Lettuce, Pineapple Salsa and Siracha Mayo', '$7.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Italian Beef Sandwich', 'Roast Beef Slow Cooked with Pepperoncini Au Jus topped with Provolone Cheese', '$7.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Carolina Pulled Pork Sandwich', 'Smoked Pulled Pork topped with Cilantro & Red Pepper Cole Slaw', '$7.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Piato Burger', 'Swiss or Cheddar with Lettuce, Tomato, Onion and Pickle', '$6.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Veggie Burger', 'Black Bean Veggie Burger topped with L/T/O/P', '$7.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Dancing Pig', 'Pulled Pork with Bacon, Cheddar and Cherry Chipotle BBQ on Grilled Sour Dough', '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Pear Apple Salad', 'Greens, Pears, Apples, Chicken, Walnuts, Cranberries, Blue Cheese & Maple Dressing', '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Veggie Southwest Wrap', 'Rice, Lettuce Corn and Black Bean Salsa, Pepperjack and Cajun Ranch in a Chipotle Wrap', '$7.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Chicken Tortilla Salad', 'Greens, Corn & Black Bean Salsa, Chicken, Tortilla Strips and Cajun Ranch', '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Goin'' to the Club', 'Ham, Turkey, Swiss, Cheddar, Bacon, Lettuce, Tomato & Honey Mustard in a Tortilla Wrap', '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Southwest Wrap', 'Modelo Chicken, Lettuce, Corn & Black Bean Salsa, Pepperjack and Cajun Ranch in a Chipotle Wrap', '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Chicken Salad Wrap', 'Roasted Chicken, Celery, Dried Cranberries, Red Peppers & Mayo with Lettuce in Tortilla Wrap', '$8.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'BLT', 'Bacon, Lettuce, Tomato and Avocado Pesto Mayo on Sourdough', '$7.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Big Kids Grilled Cheese', 'Swiss, Cheddar, Brie, Tomato on Sourdough', '$6.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'Little Kids Grilled Cheese', 'Grilled sourdough with Cheddar', '$4.00');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (21, 'The TBR', 'Turkey, Bacon, Ranch, Lettuce, Tomato and Cheddar in a Tortilla Wrap', '$8.00');

-- Sides
INSERT INTO MenuItems (section_id, name, price) VALUES (22, 'Cilantro and Red Pepper Cole Slaw', '$3.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (22, 'Fresh Fruit', '$3.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (22, 'French Fries', '$3.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (22, 'Sweet Potato Fries', '$3.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (22, 'Homemade Chips and Caramelized Onion Dip', '$3.00');

-- Smoothies
INSERT INTO MenuItems (section_id, name, price) VALUES (23, 'Strawberry', '$4.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (23, 'Strawberry Banana', '$4.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (23, 'Tropical', '$4.00');

-- Iced Coffee
INSERT INTO MenuItems (section_id, name, price) VALUES (24, 'Iced Coffee', '$3.00');
INSERT INTO MenuItems (section_id, name, price, description) VALUES (24, 'Add a Flavor Shot', '$0.50', 'Vanilla, Caramel, Irish Cream, Sugar Free Vanilla');

-- Coffee
INSERT INTO MenuItems (section_id, name, price) VALUES (25, 'Coffee', '$3.00');

-- Tea
INSERT INTO MenuItems (section_id, name, price) VALUES (25, 'Tea', '$3.00');

-- Sweet Tea
INSERT INTO MenuItems (section_id, name, price) VALUES (25, 'Sweet Tea', '$3.00');

-- Sodas
INSERT INTO MenuItems (section_id, name, price, description) VALUES (25, 'Sodas', '$1.50', 'Coke, Diet Coke, Pepsi, Diet Pepsi, Mountain Dew, Sprite, Dr. Pepper, Diet Dr. Pepper');

-- Bottled Water
INSERT INTO MenuItems (section_id, name, price) VALUES (25, 'Bottled Water', '$1.00');
