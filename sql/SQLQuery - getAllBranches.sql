


CREATE OR ALTER   PROCEDURE getAllBranches
AS
BEGIN
  SELECT branches.id,branches.brancheName,branches.Address,branches.OpenHours
  FROM branches
END

EXEC getAllBranches