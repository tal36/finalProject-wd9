USE [AgricultureDB]
GO
/****** Object:  StoredProcedure [dbo].[getUserPassByUname]    Script Date: 21-Nov-24 10:01:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER   PROCEDURE [dbo].[getUserPassByUname]
@username VARCHAR(255),
@password VARCHAR(255)
AS
BEGIN
SELECT Customers.username, Customers.password
FROM Customers
WHERE Customers.username = @username AND Customers.password = @password
END


