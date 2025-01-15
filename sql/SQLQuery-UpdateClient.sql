
GO
CREATE OR ALTER  PROCEDURE UpdateClient
@id INT,
@customerName VARCHAR(225),	
@phoneNo VARCHAR(225),	
@address VARCHAR(225),
@email VARCHAR(225)	
AS
BEGIN
  UPDATE Customers SET  customerName=@customerName, phoneNo=@phoneNo, address=@address,email = @email
  WHERE id=@id;
END