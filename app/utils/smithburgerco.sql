INSERT INTO Trucks (
  name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents
) VALUES (
  'Smith Burger Co.', '/smithburgerco', '/images/smithburger-homepage.jpeg', '/images/smithburger.png', 1, 'One of CU''s hottest food trailers featuring craft smash burgers 🤤 For catering requests, please visit our website!', 'Champaign, IL', 'smithburgerco.com', 'smithburgerco', 'Smith Burger Co.', 'https://www.facebook.com/smithburgerco', 'smithburgerco@gmail.com', 0, 1
);

INSERT INTO MenuSections (truck_id, title, rank, description) VALUES
(3, 'Smash Burgers', 1, '**SUB BEEF FOR GRILLED OR FRIED CHICKEN $.50, BLACK BEAN BURGER $2.00** \n FREEBIES: lettuce, tomato, onion, pickle, ketchup, mustard, and mayo available upon request'),
(3, 'Sandwiches', 2, NULL),
(3, 'Sides & Shareables', 3, NULL),
(3, 'Drinks', 4,  NULL);

-- Smash Burgers
INSERT INTO MenuItems (section_id, name, description, price) VALUES
(14, 'Plain Jane', 'Double beef on a toasted bun', '$7.50'),
(14, 'Average Joe', 'Double beef with American cheese', '$8.50'),
(14, 'All American', 'Double beef with bacon and American cheese', '$9.50'),
(14, 'Bacon Ranch', 'Double beef, bacon, house made ranch and American cheese', '$9.75'),
(14, 'City Slicker', 'Double beef, bacon, jalapenos, pepper jack cheese and onion ring with house made western sauce', '$11.25'),
(14, 'Sunday Morning', 'Double beef, bacon, runny egg cooked to order* and American cheese', '$10.00'),
(14, 'The Melt', 'Double beef, sautéed onions & mushrooms, Swiss cheese and 1000 island dressing on Texas toast', '$10.25'),
(14, 'Mama Mia', 'Double beef, pepperoni, provolone cheese and marinara', '$10.50'),
(14, 'Spicy Greenga', 'Double beef, green chilies, and pepper jack cheese', '$10.50'),
(14, 'Swiss n'' Mushroom', 'Double beef, sautéed mushrooms, and Swiss cheese', '$9.50'),
(14, 'My Boy Blue', 'Double beef, bacon, sautéed mushrooms, Swiss and blue cheese', '$11.00'),
(14, 'Rocky  Balboa', 'Double beef, sautéed onions & bell peppers, provolone cheese and marinara', '$11.00'),
(14, 'Bacon Mac Attack', 'Double beef, bacon, pepper jack cheese topped with white cheddar pepper jack mac & cheese and southern sauce', '$11.00');

-- Sandwiches
INSERT INTO MenuItems (section_id, name, description, price) VALUES
(15, 'BBLT', 'Loads of bacon, lettuce, tomato, and mayo on Texas toast', '$9.00'),
(15, 'Buffalo Chicken', 'Grilled or fried, tossed in spicy buffalo sauce with pepper jack cheese on a brioche bun', '$9.00'),
(15, 'Classic Southern Chicken', 'Grilled or fried topped with house made southern sauce and sliced pickles on a brioche bun', '$8.75'),
(15, 'Grilled Cheese', 'A traditional grilled cheese with American cheese on Texas toast', '$5.50'),
(15, 'Ripper', 'Deep fried hot dog on a toasted bun', '$5.50'),
(15, 'Chili Cheese Ripper', 'Deep fried hot dog topped with house made chili, American cheese and Onion on a toasted bun', '$7.75'),
(15, 'Bacon Mac Attack Riper', 'Deep fried hot dog topped with bacon, white cheddar pepper jack mac & cheese and southern sauce on a toasted bun', '$7.50');

-- Sides & Shareables
INSERT INTO MenuItems (section_id, name, description, price) VALUES
(16, 'French Fries', NULL, '$2.25, $4.50'),
(16, 'Cajun French Fries', NULL, '$2.25, $4.50'),
(16, 'Onion Rings', 'w/western dipping sauce', '$4.25, $8.50'),
(16, 'Sweet Potato Tots', 'add malo creame', '$4.50, $8.75'),
(16, 'Wisconsin White Cheddar Cheese Curds', 'w/ marinara dipping sauce', '$7.75'),
(16, 'Jalepeno Poppers', 'w/ sweet chili dipping sauce', '$7.00'),
(16, 'White Cheddar Pepper Jack Mac', NULL, '$5.00');

-- Drinks
INSERT INTO MenuItems (section_id, name, description, price) VALUES
(17, 'Canned Soda', NULL, '$1.50'),
(17, 'Bottle Water', NULL, '$2.00');