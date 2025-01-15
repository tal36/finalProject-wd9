SELECT*
FROM Customers
where id=1010,id=1011,id=1012;

DELETE FROM Customers
WHERE id IN (1010, 1011, 1012);


SELECT * FROM Customers
WHERE username IS NULL OR username = ''
   OR password IS NULL OR password = '';

-- Update an existing customer with username and password
  BEGIN TRANSACTION;

  UPDATE Customers
SET 
    username = CASE 
        WHEN id = 1 THEN 'karin.l'
        WHEN id = 2 THEN 'Jane.s'
        WHEN id = 3 THEN 'Ilan.m'
        WHEN id = 4 THEN 'Talia.g'
        WHEN id = 5 THEN 'Chris.b'
        WHEN id = 6 THEN 'Alice.j'
        WHEN id = 7 THEN 'Moty.s'
        WHEN id = 8 THEN 'Flicity.d'
        WHEN id = 9 THEN 'Liron.k'
        WHEN id = 10 THEN 'Roni.k'
        WHEN id = 11 THEN 'Michael.g'
        ELSE username -- Keep existing value for other rows
    END,
    password = CASE 
        WHEN id = 1 THEN 'karin456'
        WHEN id = 2 THEN 'omer4545'
        WHEN id = 3 THEN 'ilan@'
        WHEN id = 4 THEN 'taltal'
        WHEN id = 5 THEN 'broking45'
        WHEN id = 6 THEN 'alice123'
        WHEN id = 7 THEN 'moty67'
        WHEN id = 8 THEN 'fofo2308'
        WHEN id = 9 THEN 'ori12'
        WHEN id = 10 THEN 'roni6'
        WHEN id = 11 THEN 'nimnim'
        ELSE password -- Keep existing value for other rows
    END
WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
-- If everything is correct, finalize the changes
COMMIT;
