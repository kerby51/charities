DROP DATABASE IF EXISTS charities;
CREATE DATABASE charities;

\c charities

CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  charity VARCHAR,
  amount FLOAT
);

