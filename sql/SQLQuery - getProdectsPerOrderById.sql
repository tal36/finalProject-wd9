USE [AgricultureDB]
GO
/****** Object:  StoredProcedure [dbo].[getProdectsPerOrderById]    Script Date: 29-Aug-24 6:31:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[getProdectsPerOrderById]
@id Int
AS
BEGIN
  SELECT Products.ProductName,Products.price AS 'product price'
  FROM Customers LEFT JOIN Orders
  ON customers.id = Orders.customerId
  LEFT JOIN soldProducts
  ON orders.id = soldProducts.OrderId
  LEFT JOIN Products
  ON Products.id = soldProducts.productId
  WHERE orders.id = @id
  GROUP BY orders.id,Products.ProductName,Products.price
END

