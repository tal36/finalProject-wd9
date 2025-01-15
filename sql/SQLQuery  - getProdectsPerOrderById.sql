GO
CREATE OR ALTER PROCEDURE getProdectsPerOrderById
@id Int
AS
BEGIN
  SELECT orders.id AS 'order id',orders.orderDate,orders.orderSource,Products.ProductName,Products.price AS 'product price'
  FROM Customers LEFT JOIN Orders
  ON customers.id = Orders.customerId
  LEFT JOIN soldProducts
  ON orders.id = soldProducts.OrderId
  LEFT JOIN Products
  ON Products.id = soldProducts.productId
  WHERE customers.id = @id
  GROUP BY orders.id,orders.orderDate,orders.orderSource,Products.ProductName,Products.price
END
GO


