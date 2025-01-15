CREATE OR ALTER PROCEDURE getAllDeliveryArea
AS
BEGIN
SELECT deliveryArea.CityName,deliveryArea.deliveryPrice
  FROM deliveryArea
END

EXEC getAllDeliveryArea

