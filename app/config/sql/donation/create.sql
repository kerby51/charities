INSERT INTO donations (name, charityName, amount) VALUES($1, $2, $3) RETURNING *;

