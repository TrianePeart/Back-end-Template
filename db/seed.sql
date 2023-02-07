\c snack_a_log; 

INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, price, image) VALUES
('Strawberries', 20, 10, 0, true, 5.49,'https://picsum.photos/id/1080/300/300'),
('Raspberries', 16, 4, 0, true, 3.10, 'https://picsum.photos/id/102/300/300'),
('Honey Covered Granola',  30, 12, 22, false, 4.50, 'https://picsum.photos/id/312/300/300'),
('New Wave Nuts', 11, 55, 5, true, 10, 'https://picsum.photos/id/139/300/300'),
('Raw Onions & Turnips', 11, 9, 2, true, 5, 'https://picsum.photos/id/292/300/300'),
('Healthy Birthday Cake Square', 4, 8, 19, false, 15, 'https://content.nutrisystem.com/images/products/alc/large/BirthdayCakeSquare_L.jpg'),
('Cape Cod Original Sea Salt Chips', 1, 2, 0, true, 2, 'https://images.heb.com/is/image/HEBGrocery/001460394?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'),
('Little Debbie Honey Buns', 0, 2, 14, true, 6.49, 'https://images.heb.com/is/image/HEBGrocery/000390302?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'),
('Smuckers Uncrustables', 2, 6, 18, false, 12, 'https://images.heb.com/is/image/HEBGrocery/002215064?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'),
('Craft Chocolate SEA SALT CARAMELS', 5, 4, 39, false, 8.85, 'http://cdn.shopify.com/s/files/1/0597/1587/9088/products/boxed_SeaSaltCaramelCollection.jpg?v=1631823837');

-- use advanced image search to choose images that are square (aspect ratio)
-- https://www.google.com/advanced_image_search