CREATE OR ALTER PROCEDURE whiceOnlineOrderNumberPerId
@id Int
AS
BEGIN
SELECT Orders.id, orders.orderDate
FROM Customers LEFT JOIN Orders  
ON Customers.id = Orders.customerId
WHERE Customers.id = @id 
  AND Orders.orderSource = 'Online' AND 
  (Orders.orderStatusId = 1 OR Orders.orderStatusId = 2)
END

