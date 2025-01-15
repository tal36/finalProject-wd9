
GO
CREATE OR ALTER  PROCEDURE HowManyOrdersPerCustomer
@id Int
AS
BEGIN
SELECT Orders.customerId, customerName,count(Orders.id) AS 'number of orders'
FROM Orders JOIN Customers
ON Customers.id = Orders.customerId
WHERE Customers.id = @id
GROUP BY Orders.customerId, customerName
END

