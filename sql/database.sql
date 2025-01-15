
/*------------   Create tables   --------------*/
CREATE TABLE Customers
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	customerName varchar(255) NOT NULL,
    phoneNo varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
	email varchar (255)
);

//========================================================================================

CREATE TABLE deliveryArea
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	CityName varchar(255) NOT NULL,
    deliveryPrice varchar(255) NOT NULL
);

//========================================================================================

CREATE TABLE orderStatus
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	StatusName varchar(255) NOT NULL,
);

//========================================================================================
CREATE TABLE branches
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	brancheName varchar(255) NOT NULL,
);
//========================================================================================

CREATE TABLE Employees
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	employeeName varchar(255) NOT NULL,
    phoneNo varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
	email varchar (255),
	brancheId int NOT NULL FOREIGN KEY REFERENCES branches(id)
);

//========================================================================================
CREATE TABLE Products
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	ProductName varchar(255) NOT NULL,
	price varchar(255) NOT NULL,
	description varchar(255) NOT NULL
);

//========================================================================================

CREATE TABLE InventoryInBranches
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	brancheId int NOT NULL FOREIGN KEY REFERENCES branches(id),
	productId int NOT NULL FOREIGN KEY REFERENCES Products(id)
);

//========================================================================================

CREATE TABLE Orders
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    orderDate DATETIME NOT NULL DEFAULT GETDATE(),
	orderSource varchar(255) NOT NULL,
    customerId int NOT NULL FOREIGN KEY REFERENCES Customers(id),
	employeeId int NULL FOREIGN KEY REFERENCES employees(id) ,
	orderStatusId int  NULL FOREIGN KEY REFERENCES orderStatus(id),
	brancheId int  NULL FOREIGN KEY REFERENCES branches(id),
	deliveryAreaId int NULL FOREIGN KEY REFERENCES deliveryArea(id),
);


//========================================================================================

CREATE TABLE soldProducts
 (
    id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    productId int NOT NULL FOREIGN KEY REFERENCES Products(id),
	OrderId int NOT NULL FOREIGN KEY REFERENCES Orders(id),
);


//========================================================================================

/* ------------------------ Insert Data into Tables -------------------- */
INSERT INTO customers (customerName, phoneNo, address, email)
VALUES 
('Karin Levy', '052-2323132', '123 Main St, Tel Aviv', 'karin.levy@gmail.com'),
('Jane Smith', '054-6453888', '456 Elm St, Tel Aviv', 'jane.smith@gmail.com'),
('Ilan Marek', '055-2231185', '789 Oak St, Haifa', 'ilan.marke@hotmail.com'),
('Talia Gershon', '052-9875643', '25 rakefet St, Jerusalem', 'talia.g@gmail.com'),
('Chris Brook', '053-5432623', '35 Nof st, Haifa', 'Chris.brook@gmail.com'),
('Alice Johnson', '052-1121185', '789 roz St, Natania', 'alice.johnson@gmail.com'),
('Moty Segev', '054-4561237', '15 hezel St, Natania', 'moty.segev@gmail.com'),
('Flicity Dorfner', '052-4564561', '206 Bluman st, Jerusalem', 'flicity.Dorfner@gmail.com');
('Liron Kogen', '054-8528642', '14 rupin st, Jerusalem', 'liron.k@gmail.com');
('Roni Kirshenbaum', '055-7894562', '12 zof st, Tel-Aviv', 'roni.k@hotmail.com');
('Michael Greenman', '054-2312312', '45 here st, Haifa', 'michael.g@notture.com');
('Efi Naim', '054-4555891', '17 Yad-Labnaim, Haifa', 'efi.n@gmail.com');
('Liron Naim', '052-4555890', 'Yad-Labnaim, Haifa', 'liron.n@gmail.com');
('Hava Levin', '054-12365478', '35 Ahglil st, Tel -Aviv', 'hava.l@gmail.com');
('Ofer Kirsh', '052-9965781', '56 cinert st, Tel-Aviv', 'ofer.k@gmail.com');
('Liat', '052-35757540', '23 aasif st, Haifa', 'liat@gmail.com');

Liat	052-35757540	23 aasif st, Haifa	liat@gmail.com	liat



/* --------------------------------------------------------- */
-- Insert Delivery Areas in Israel
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Tel Aviv', 30);
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Jerusalem', 40);
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Haifa', 35);
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Beersheba', 50);
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Netanya', 25);
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Rishon LeZion', 30);
INSERT INTO deliveryArea (cityName, deliveryPrice) VALUES ('Ashdod', 35);
/* --------------------------------------------------------- */
-- Insert orderStatus in Israel
INSERT INTO orderStatus (StatusName) VALUES ('Pending');
INSERT INTO orderStatus (StatusName) VALUES ('Processing');
INSERT INTO orderStatus (StatusName) VALUES ('Shipped');
INSERT INTO orderStatus (StatusName) VALUES ('Delivered');
INSERT INTO orderStatus (StatusName) VALUES ('Canceled');
/* --------------------------------------------------------- */

-- Insert branches in Israel
INSERT INTO branches (brancheName) VALUES ('Tel Aviv center Branch');
INSERT INTO branches (brancheName) VALUES ('Tel Aviv North Branch');
INSERT INTO branches (brancheName) VALUES ('Tel Aviv south Branch');
INSERT INTO branches (brancheName) VALUES ('Jerusalem North Branch');
INSERT INTO branches (brancheName) VALUES ('Jerusalem south Branch');
INSERT INTO branches (brancheName) VALUES ('Netanya Branch');

/* --------------------------------------------------------- */
-- Insert prodects in Israel
 /*Insert Vegetables*/
INSERT INTO products (productName, Price, description) VALUES ('Tomato', 5, 'Fresh red tomatoes');
INSERT INTO products (productName, Price, description) VALUES ('Cucumber', 4, 'Crisp green cucumbers');
INSERT INTO products (productName, Price, description) VALUES ('Carrot', 3, 'Orange carrots, rich in vitamin A');
INSERT INTO products (productName, Price, description) VALUES ('Lettuce', 6, 'Fresh green lettuce');
INSERT INTO products (productName, Price, description) VALUES ('Onion', 4, 'Yellow onions, perfect for cooking');
INSERT INTO products (productName, Price, description) VALUES ('Bell Pepper', 8, 'Colorful bell peppers');
INSERT INTO products (productName, Price, description) VALUES ('Potato', 3, 'Starchy potatoes, perfect for frying or baking');
INSERT INTO products (productName, Price, description) VALUES ('Spinach', 7, 'Fresh spinach leaves');
INSERT INTO products (productName, Price, description) VALUES ('Broccoli', 7, 'Fresh green broccoli florets');
INSERT INTO products (productName, Price, description) VALUES ('Cauliflower', 6, 'White cauliflower, great for roasting');
INSERT INTO products (productName, Price, description) VALUES ('Eggplant', 5, 'Purple eggplants, perfect for grilling');
INSERT INTO products (productName, Price, description) VALUES ('Zucchini', 4, 'Green zucchini, ideal for stir-frying');
INSERT INTO products (productName, Price, description) VALUES ('Garlic', 12, 'Fresh garlic bulbs, full of flavor');
INSERT INTO products (productName, Price, description) VALUES ('Ginger', 15, 'Spicy ginger root, great for cooking');
INSERT INTO products (productName, Price, description) VALUES ('Beetroot', 8, 'Red beets, rich in nutrients');
INSERT INTO products (productName, Price, description) VALUES ('Sweet Corn', 10, 'Juicy sweet corn, perfect for boiling');
INSERT INTO products (productName, Price, description) VALUES ('Apple', 6, 'Sweet and crisp apples');
INSERT INTO products (productName, Price, description) VALUES ('Banana', 5, 'Ripe bananas, high in potassium');
INSERT INTO products (productName, Price, description) VALUES ('Orange', 7, 'Juicy oranges, rich in vitamin C');
INSERT INTO products (productName, Price, description) VALUES ('Strawberry', 10, 'Fresh strawberries');
INSERT INTO products (productName, Price, description) VALUES ('Grapes', 9, 'Sweet green grapes');
INSERT INTO products (productName, Price, description) VALUES ('Mango', 12, 'Juicy ripe mangoes');
INSERT INTO products (productName, Price, description) VALUES ('Pineapple', 15, 'Tropical pineapples, sweet and tangy');
INSERT INTO products (productName, Price, description) VALUES ('Watermelon', 18, 'Large watermelons, perfect for summer');
INSERT INTO products (productName, Price, description) VALUES ('Peach', 12, 'Juicy and sweet peaches');
INSERT INTO products (productName, Price, description) VALUES ('Pear', 9, 'Crisp and sweet pears');
INSERT INTO products (productName, Price, description) VALUES ('Plum', 11, 'Ripe and juicy plums');
INSERT INTO products (productName, Price, description) VALUES ('Kiwi', 14, 'Tart and sweet kiwis, high in vitamin C');
INSERT INTO products (productName, Price, description) VALUES ('Pomegranate', 18, 'Juicy pomegranates, rich in antioxidants');
INSERT INTO products (productName, Price, description) VALUES ('Blueberry', 20, 'Fresh blueberries, great for snacking');
INSERT INTO products (productName, Price, description) VALUES ('Raspberry', 22, 'Sweet and tart raspberries');
INSERT INTO products (productName, Price, description) VALUES ('Papaya', 16, 'Tropical papayas, rich in enzymes');


/* --------------------------------------------------------- */
-- Insert invontry in branches
--Tel Aviv center Branch (branchId 1)--
INSERT INTO InventoryInBranches (brancheId, productId)
VALUES 
(1, 1),  -- Tomato
(1, 2), -- Cucumber
(1, 5),  -- Onion
(1, 17), -- Apple
(1, 18), -- Banana
(1, 20); -- Strawberry

--Tel Aviv North  Branch (branchId 2)--
INSERT INTO InventoryInBranches (brancheId, productId)
VALUES 
(2, 1),  -- Tomato
(2, 2), -- Cucumber
(2, 3),  -- Carrot
(2, 4),  -- Lettuce
(2, 9),  -- Broccoli
(2, 10), -- Cauliflower
(2, 17), -- Apple
(2, 25); -- Peach

--Tel Aviv South  Branch (branchId 3)--
INSERT INTO InventoryInBranches (brancheId, productId)
VALUES 
(3, 6),  -- Bell Pepper
(3, 11), -- Eggplant
(3, 13), -- Garlic
(3, 14), -- Ginger
(3, 19), -- Orange
(3, 18), -- Banana
(3, 20); -- Strawberry

--Jerusalem North Branch  (branchId 4,5)--
INSERT INTO InventoryInBranches (brancheId, productId)
VALUES 
(4, 7),  -- Potato
(4, 8),  -- Spinach
(4, 21), -- Grapes
(4, 22), -- Mango
(4, 23), -- Pineapple
(4, 24), -- Watermelon
(4, 32); -- Papaya

--Jerusalem South Branch  (branchId 4,5)--
INSERT INTO InventoryInBranches (brancheId, productId)
VALUES 
(5, 1), -- Tomato
(5, 2), -- Cucumber
(5, 7), -- Potato
(5, 12), -- Zucchini
(5, 15), -- Beetroot
(5, 16), -- Sweet Corn
(5, 23), -- Pineapple
(5, 25); -- Peach

--Natanya Branch  (branchId 6)--
INSERT INTO InventoryInBranches (brancheId, productId)
VALUES 
(6, 2),  -- Cucumber
(6, 24), -- Watermelon
(6, 27), -- Plum
(6, 28), -- Kiwi
(6, 29), -- Pomegranate
(6, 30), -- Blueberry
(6, 31), -- Raspberry
(6, 32); -- Papaya


/* --------------------------------------------------------- */
-- Insert employees--
INSERT INTO employees (employeeName,phoneNo,city, email, brancheId)
VALUES 
('Michael Johnson','052-4783926', 'Tel Aviv','michael.johnson@hotmail.com',1),
('Ketty Perry','052-5554784', 'Tel Aviv','ketty.p@hotmail.com',1),
('Sarah Parker','052-4132657', 'Tel Aviv','sarah.parker@hotmail.com',2),
('Julia Roberts','055-1239514', 'Tel Aviv','julia.Roberts@gmail.com',2),
('Bill Orion','052-8887745', 'Tel Aviv', 'bill.orion@gmail.com',3 ),
('Emily Davis', '053-1237895', 'Jerusalem','emily.davis@gmail.com',4),
('Tim Colinis', '052-4448888', 'Jerusalem','tim.Colinis@gmail.com',4),
('Haim Palit','053-1237895', 'Jerusalem', 'haim.p@gmail.com',5 ),
('Robert Brown', '054-7895236', 'Netanya', 'robert.brown@gmail.com',6),
('Nimrod Bar', '054-3332216', 'Netanya', 'nimrod.b@gmail.com',6);

/* --------------------------------------------------------- */

/* --------------------------------------------------------- */
-- Insert orders
INSERT INTO orders (orderDate, orderSource, customerId,employeeId,orderStatusId ,brancheId, deliveryAreaId)
VALUES 
( '2024-08-15', 'online', 1, 1, 4, 1, 1),
( '2024-08-19', 'online', 1, 2, 3, 1, 1),
( '2024-08-10', 'branch', 2, 3, NULL, 2, NULL),
( '2024-08-18', 'online', 2, 4, 1, 2, 1),
( '2024-08-13', 'online', 3, 9, 4, 6, 3),
( '2024-08-19', 'online', 3, 10, 1, 6, 3),
( '2024-08-15', 'branch', 4, 6, NULL, 4, NULL),
( '2024-08-19', 'online', 5, 10, 2, 6, 3),
( '2024-08-01', 'branch', 6, 9, NULL, 6, NULL),
( '2024-08-19', 'branch', 6, 10, NULL, 6, NULL),
( '2024-08-12', 'online', 7, 9, 5, 6, 5),
( '2024-08-12', 'online', 7, 10, 4, 6, 5),
( '2024-08-11', 'branch', 8, 7, 4, 4, NULL),
( '2024-08-20', 'online', 8, 8, 3, 5, 2),
( '2024-08-31', 'online', 8, 8, 1, 5, 2);

/* --------------------------------------------------------- */
-- Insert data into soldProducts
INSERT INTO soldProducts (productId, orderId)
VALUES 
(1, 1),
(2, 1),
(5, 1),
(17, 1),
(18, 1),
(1, 2),
(2, 2),
(5, 2),
(17, 2),
(18, 2),
(20, 2),
(1, 3),
(3, 3),
(9, 3),
(17, 3),
(1, 4),
(2, 4),
(3, 4),
(10, 4),
(25, 4),
(2, 5),
(24, 5),
(27, 5),
(28, 5),
(29, 5),
(30, 5),
(31, 5),
(2, 6),
(27, 6),
(32, 6),
(7, 7),
(8, 7),
(21, 7),
(22, 7),
(23, 7),
(24, 7),
(32, 7),
(2, 8),
(24, 8),
(24, 9),
(27, 9),
(28, 9),
(29, 9),
(30, 9),
(31, 9),
(32, 9),
(2, 10),
(24, 10),
(27, 10),
(28, 10),
(29, 10),
(30, 10),
(31, 10),
(32, 10),
(2, 11),
(24, 11),
(28, 11),
(2, 12),
(27, 12),
(28, 12),
(29, 12),
(32, 12),
(7, 13),
(8, 13),
(21, 13),
(22, 13),
(23, 13),
(24, 13),
(32, 13),
(1, 14),
(2, 14),
(7, 14),
(12, 14),
(15, 14),
(16, 14),
(25, 14),
(1, 14),
(2, 14),
(7, 14),
(12, 14),
(15, 14),
(16, 14),
(23, 14),
(25, 14);

SELECT*
FROM InventoryInBranches

SELECT*
FROM Orders


SELECT*
FROM products

SELECT*
FROM Orders

SELECT*
FROM branches

SELECT*
FROM Customers

SELECT*
FROM deliveryArea

SELECT*
FROM employees

SELECT*
FROM orderStatus

select *
FROM soldProducts



