USE [AgricultureDB]
GO
/****** Object:  StoredProcedure [dbo].[whiceOrderNumber]    Script Date: 21-Nov-24 1:57:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[whiceOrderNumber]
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
GO

