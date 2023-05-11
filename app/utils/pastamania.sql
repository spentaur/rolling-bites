INSERT INTO Trucks (
  id, name, path, banner, avatar, verified, description, location, website, instagram, facebookName, facebookPath, email, delivery, privateEvents
) VALUES (
  2, 'Pastamania', '/pastamania', '/images/pastamania-homepage.jpeg', '/images/pastamania.jpeg', 1, 'Your go-to spot for delicious pastas, sandwiches, soups, salads, and lasagnas. 🚚 Find us on Grubhub, Uber Eats, and DoorDash. 🎉 Private events available. Serving Champaign-Urbana and surrounding areas!', 'Champaign, IL', 'pastamania.us', NULL, 'PastaMania', 'https://www.facebook.com/PastaManiaUIUC', 'info@pastamania.us', 1, 1
);

INSERT INTO MenuSections (truck_id, title, rank, description) VALUES
(2, 'Pastas', 1, 'Topped with chives, parsely and parmesan cheese. Served with cheese garlic bread'),
(2, 'Lasagnas', 2, ''),
(2, 'Soups', 3, ''),
(2, 'Sandwiches', 4, ''),
(2, 'Salads', 5, 'Dressings: Raspberry Vinaigrette, Ranch, Italian, Coconut, Caesar'),
(2, 'Additions', 6, ''),
(2, 'Drinks', 7, '');


INSERT INTO MenuItems (section_id, name, description, price) VALUES
(7, 'Chicken Alfredo', 'Delicious alfredo sauce, fettuccine and chicken', '$15.00'),
(7, 'Inferno Pasta', 'Penne pasta, spicy cream sauce, sundried tomatoes, chicken and spinach', '$14.50'),
(7, 'Shrimp Pasta', 'Fettuccine, alfredo sauce, roasted red peppers, shrimp and mushrooms', '$16.00'),
(7, 'All American Macaroni', 'Penne pasta and delicious cheese sauce topped with mix cheese', '$11.00'),
(7, 'Pesto Pasta (veggie)', 'Penne noodles, pesto sauce, zucchini, broccoli, carrots', '$12.00'),
(7, 'Three Meat Pasta', 'Penne, alfrecio sauce, andouille sausage, chicken, bacon', '$15.00'),
(7, 'Cajun Jambalaya Pasta', 'Fettuccine, tomato sauce, andouille sausage, chicken, bacon, red pepper, red onion', '$15.00'),
(7, 'Mexican Pasta', 'Fettuccine, creamy sauce, chorizo, onions and cherry tomatoes', '$14.00'),
(7, 'Seafood Pasta', 'Shrimp, octopus, mussels, squid, fettuccine and homemade alfredo sauce', '$16.00'),
(7, 'Meatball Pasta', 'Spaghetti, delicious tomato sauce, meatballs and cherry tomatoes', '$14.00'),
(7, 'Chicken and Ham Carbonara', 'Spaghetti, creamy sauce, red roasted peppers and bacon', '$14.00'),
(7, 'Chili Mac', 'Cheese Spaghetti topped with beef and bean chili, Monterrey jack (mix cheese)', '$12.50'),
(7, 'Chicken Marinera', 'Home made marinera sauce, cherry tomatoes and penne noodles', '$14.00'),
(8, 'Veggie Lasagna', 'Creamy tomato sauce, alfredo sauce and diced veggies', '$12.00'),
(8, 'Beef and Bacon Lasagna', 'Creamy tomato sauce, alfredo sauce, ground beef, bacon, cheese', '$13.00'),
(9, 'Chili with Beans', '', '$5.50'),
(9, 'Veggie', '', '$5.00'),
(10, 'Philly Cheesesteak', 'Steak, provolone cheese, sautéed onions, fresh mushrooms, banana peppers and mayo', '$11.50'),
(10, 'Turkey Club Sandwich', 'Turkey, smoked ham, bacon, provolone, lettuce, tomato and mayo', '$11.50'),
(10, 'Italian Beef', 'Slice Italian beef, hot giardiniera peppers', '$11.50'),
(10, 'Meatball Sandwich', 'Homemade meatballs sauté with our delicious tomato sauce Topped with provolone cheese', '$11.50'),
(10, 'Chicken Philly Sandwich', 'Chicken, lettuce tomato mayo and provolone cheese', '$11.50'),
(11, 'Strawberry Salad', 'Spring mix, strawberries, candied walnuts, goat cheese, red onions, and raspberry vinaigrette dressing', '$10.00'),
(11, 'House Salad', 'Cucumber, croutons, red onions, mixed cheese, and cherry tomatoes', '$10.00'),
(11, 'Berry Salad', 'Strawberrys, blueberrys, cashews, sesame seeds coconut dressing and spring mix lettuce', '$10.00'),
(11, 'Pasta Salad', 'Romaine lettuce, penne pasta, croutons, cesar dressing and topped with parmesan cheese', '$10.00'),
(12, 'Shrimp', '', '$4.00'),
(12, 'Steak', '', '$4.00'),
(12, 'Chicken', '', '$2.00'),
(12, 'Meatball', '', '$2.00'),
(12, 'Chorizo', '', '$2.00'),
(12, 'Bacon', '', '$1.00'),
(12, 'Cheese', '', '$0.50'),
(12, 'Red Onion', '', '$1.00'),
(12, 'Cherry Tomatoes', '', '$1.00'),
(12, 'Garlic Bread', '', '$1.00'),
(12, 'Sausage', '', '$2.00'),
(12, 'Veggies', '', '$1.50'),
(12, 'Broccoli', '', '$1.50'),
(12, 'Mushrooms', '', '$1.00'),
(12, 'Red Peppers', '', '$1.00'),
(12, 'Spinach', '', '$1.00'),
(13, 'Coke', '', '$1.80'),
(13, 'Diet Coke', '', '$2.00'),
(13, 'Sprite', '', '$1.80'),
(13, 'S. Pellegrino', '', '$3.00'),
(13, 'Perrier', '', '$3.00'),
(13, 'Unsweetened Tea', '', '$2.50'),
(13, 'Sweet Tea', '', '$2.50'),
(13, 'Water', '', '$1.50');