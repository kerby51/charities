INSERT INTO donations (name, charity, amount) VALUES($1, $2, $3) RETURNING *;

