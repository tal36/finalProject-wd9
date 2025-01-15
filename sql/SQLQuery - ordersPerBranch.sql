

GO
CREATE OR ALTER PROCEDURE ordersPerBranch
AS
BEGIN
    SELECT branches.id,branches.brancheName,COUNT(Orders.id) AS 'number of orders per branch',orders.orderSource
       FROM branches LEFT JOIN Orders
       ON branches.id = orders.brancheId
       GROUP BY 
      branches.id,branches.brancheName,orders.orderSource
    ORDER BY 
         branches.id,Orders.orderSource
END
GO

EXEC ordersPerBranch
