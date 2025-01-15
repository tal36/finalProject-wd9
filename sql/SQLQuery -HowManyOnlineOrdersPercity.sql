
GO
CREATE OR ALTER PROCEDURE HowManyOnlineOrdersPercity
AS
BEGIN
SELECT deliveryArea.CityName, count(Orders.id) AS 'number of online orders', branches.brancheName
FROM deliveryArea JOIN Orders
ON deliveryArea.id =  Orders.deliveryAreaId
JOIN branches
ON branches.id = Orders.brancheId
WHERE Orders.orderSource = 'online'
GROUP BY deliveryArea.CityName, branches.brancheName
END
GO


EXEC HowManyOnlineOrdersPercity


