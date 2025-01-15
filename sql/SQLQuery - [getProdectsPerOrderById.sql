USE [AgricultureDB]
GO
/****** Object:  StoredProcedure [dbo].[getProdectsPerOrderById]    Script Date: 24-Aug-24 3:43:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[getProdectsPerOrderById]
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
  WHERE Orders.id = @id
  GROUP BY orders.id,orders.orderDate,orders.orderSource,Products.ProductName,Products.price
END
