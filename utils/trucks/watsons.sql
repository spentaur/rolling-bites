INSERT INTO Trucks (name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents)
VALUES 
('Watson''s Chicken', 'watsonschicken', '/images/watsons-homepage.jpeg', '/images/watsons.svg', 1, '✨ Watson''s Chicken: Premier fried chicken tenders and sandwiches in Champaign, IL | Offering exceptional private event services | Consult our schedule for upcoming locations 📅 | Discover culinary delight at watsonschicken.com 🍽️', 'Champaign, IL', 'watsonschicken.com', 'watsonschicken', 'Watson''s Shack & Rail', 'https://www.facebook.com/watsonschicken', 'mothershiphospitality@gmail.com', 0, 1);

INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (1, 'Tenders', 'Pickle-brined white meat tenders fried to a crispy perfection. Each tender basket comes with waffle fries and sauce.', 1);
INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (1, 'Sandwiches', 'All sandwiches served with waffle fries.', 2);
INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (1, 'Sides', NULL, 3);
INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (1, 'Sauces', NULL, 4);
INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (1, 'Additions', NULL, 5);
INSERT INTO MenuSections (truck_id, title, description, rank) VALUES (1, 'Drinks', NULL, 6);

INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (1, 1, '4 Tenders and 1 Sauce', NULL, '$10.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (2, 1, '6 Tenders and 2 Sauces', NULL, '$15.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (3, 2, 'Watson''s Hot', 'Crunchy chicken tenders dipped in Watson''s Hot, served on a brioche bun with creamy coleslaw, dill pickles, & comeback sauce.', '$14.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (4, 2, 'Buffalo Starchild', 'Crunchy chicken tenders tossed in buffal sauce, served on a brioche bun with sorghum glazed bacon, black pepper ranch, blue cheese crumbles, & mixed greens.', '$14.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (5, 2, 'Classic Fried', 'Crunchy fried chicken tenders with herb mayo, dill pickles, and mixed greens on a brioche bun.', '$13.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (6, 2, 'Classic Grilled', 'Grilled chicken tenders with herb mayo, dill pickles, and mixed greens on a brioche bun.', '$13.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (7, 2, 'Watson''s Hot Fish', 'Fried perch dipped in Watson''s hot sauce served on a hoagie roll with creamy coleslaw, dill pickles, and comeback sauce.', '$14.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (8, 2, 'Tofu Po''boy', 'Crispy tofu served on a hoagie roll with mixed greens, dill pickles, red onion, and vegan remoulade.', '$13.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (9, 3, 'Waffle Fries', NULL, '$4.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (10, 3, 'Creamy Coleslaw', NULL, '$4.00');

INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (11, 3, 'Mac & Cheese', NULL, '$4.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (12, 4, 'Buffalo', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (13, 4, 'Black Pepper Ranch', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (14, 4, 'Honey Mustard', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (15, 4, 'Carolina Gold', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (16, 4, 'Comeback Sauce', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (22, 5, 'Sorghum-glazed bacon', NULL, '$3.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (23, 5, 'American Cheese', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (24, 5, 'Pickles', NULL, '$1.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (17, 6, 'Coke', NULL, '$3.00');

INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (18, 6, 'Diet Coke', NULL, '$3.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (19, 6, 'Sprite', NULL, '$3.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (20, 6, 'Bottle Water', NULL, '$3.00');
INSERT INTO MenuItems (id, section_id, name, description, price) VALUES (21, 6, 'Iced Tea', NULL, '$3.00');