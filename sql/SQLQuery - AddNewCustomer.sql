USE [AgricultureDB]
GO
/****** Object:  StoredProcedure [dbo].[AddNewCustomer]    Script Date: 05-Sep-24 8:35:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER    PROCEDURE [dbo].[AddNewCustomer]
@customerName VARCHAR(225),	
@phoneNo VARCHAR(225),	
@address VARCHAR(225),
@email VARCHAR(225),
@username VARCHAR(255),
@password VARCHAR(255)
AS
BEGIN
  INSERT INTO Customers (customerName,phoneNo,address,email,username, password) VALUES (@customerName , @phoneNo ,@address,@email,@username,@password);
END
GO


ALTER TABLE Customers
ADD username VARCHAR(255),
    password VARCHAR(255);