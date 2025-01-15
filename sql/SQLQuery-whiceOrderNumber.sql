GO
CREATE OR ALTER PROCEDURE whiceOrderNumber
@id Int
AS
BEGIN
SELECT Orders.id, orders.orderDate
FROM Customers LEFT JOIN Orders  
ON Customers.id = Orders.customerId
WHERE Customers.id = @id
END
GO

EXEC whiceOrderNumber 2