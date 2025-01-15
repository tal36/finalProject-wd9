GO
CREATE OR ALTER PROCEDURE AddNewOrder	
@orderSource VARCHAR(225),	
@customerId VARCHAR(225),
@employeeId VARCHAR(225),
@orderStatusId INT,
@brancheId INT,
@deliveryAreaId INT = NULL
AS
BEGIN
  INSERT INTO Orders(orderSource,customerId,employeeId,orderStatusId,brancheId,deliveryAreaId)
  VALUES (@orderSource ,@customerId,@employeeId,@orderStatusId,@brancheId,@deliveryAreaId);
END
GO




