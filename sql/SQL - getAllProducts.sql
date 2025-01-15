

CREATE OR ALTER PROCEDURE getAllProdects
AS
BEGIN
  SELECT Products.ProductName,Products.price,Products.description,Products.id
  FROM Products
END

EXEC getAllProdects


