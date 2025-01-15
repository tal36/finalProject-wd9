

GO
CREATE OR ALTER  PROCEDURE AddNewCustomer
@customerName VARCHAR(225),	
@phoneNo VARCHAR(225),	
@address VARCHAR(225),
@email VARCHAR(225)	
AS
BEGIN
  INSERT INTO Customers (customerName,phoneNo,address,email) VALUES (@customerName , @phoneNo ,@address,@email);
END