

CREATE OR ALTER PROCEDURE getCustomerById
@id Int
AS
BEGIN
  SELECT*
  FROM Customers
  WHERE id = @id
END

