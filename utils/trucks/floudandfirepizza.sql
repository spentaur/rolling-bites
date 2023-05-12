INSERT INTO Trucks (
  name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents
) VALUES (
  'Flour and Fire Pizza', 'FlourandFirePizza', '/images/flourandfire-homepage.jpeg', '/images/ffpizza.png', 1, 'Mobile wood-fired pizza trailer serving Neapolitan style pizza to the Champaign-Urbana area', 'Champaign, IL', 'flourandfirepizza.com', 'flour_and_fire_pizza', 'Flour and Fire Pizza', 'https://www.facebook.com/FlourandFirePizza/', 'ffirepizza@gmail.com', 0, 1
);

-- MenuSections
INSERT INTO MenuSections (truck_id, title, rank) VALUES (4, 'Specialty Pizzas', 1);
INSERT INTO MenuSections (truck_id, title, rank) VALUES (4, 'Add-ons', 2);
INSERT INTO MenuSections (truck_id, title, rank) VALUES (4, 'Drinks', 3);

-- MenuItems
-- Specialty Pizzas
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Margherita', 'Fresh mozzarella cheese with basil leaves and an olive oil drizzle over red San Marzano sauce--a Neapolitan classic!', '$11.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Funghi', 'Fresh mushroom, herbs and cheese over white sauce, finished with truffle oil', '$12.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'BBQ Chicken Ranch', 'Tender smoked chicken, real bacon, and our shredded mozzarella atop a BBQ sauce base, and finished with a swirl of house-made buttermilk ranch on top', '$12.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Sweet Heat', 'Char and cup pepperoni with a bold twist—Mike''s Hot Honey—atop our cheese blend and San Marzano tomato base.', '$11.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Buffalo Chicken', 'Tender, smoked chicken and our shredded mozzarella cheese, drizzled in buffalo and house-made buttermilk ranch', '$12.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Supreme', 'Sausage, pepperoni, fresh mushroom, olive, onion and fire roasted red pepper, with our cheese blend and San Marzano tomato sauce.', '$13.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Garden/Veggie Supreme', 'Mushroom, olives, onion and fire roasted red pepper covered in our mozzarella blend, all on top of crushed San Marzano tomato sauce.', '$12.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Motz Lover', 'Fresh mozzarella on top of our shredded mozzarella all melted on top of our San Marzano tomato base', '$11.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Hotta Ricotta', 'Sausage and basil over San Marzano sauce, topped with shredded mozzarella then finished with dollops of ricotta and a drizzle of hot honey', '$14.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Meat-za', 'Pepperoni, sausage and bacon smothered by our shredded mozzarella on our San Marzano tomato base. Try it with Mike’s Hot Honey for an extra kick!', '$12.75');
INSERT INTO MenuItems (section_id, name, description, price) VALUES (18, 'Cheese Pizza (Build Your Own)', 'Any of our toppings, any of our sauces--prepared your way', '$9.75');

-- Add-ons
INSERT INTO MenuItems (section_id, name) VALUES (19, 'Red Sauce');
INSERT INTO MenuItems (section_id, name) VALUES (19, 'White Sauce');
INSERT INTO MenuItems (section_id, name) VALUES (19, 'BBQ Sauce');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Sausage', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Bacon', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Pepperoni', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Chicken', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Fresh Mozzarella', '$2.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Extra Cheese', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Olives', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Fire Roasted Peppers', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Mushrooms', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Onions', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Hot Honey', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Mike''s Extra Hot Honey', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Ranche', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Truffle Oil', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Fresh Basil', '$1.00');
INSERT INTO MenuItems (section_id, name, price) VALUES (19, 'Ricotta', '$2.00');

-- Drinks
INSERT INTO MenuItems (section_id, name, price) VALUES (20, 'Bottle Water', '$2.50');