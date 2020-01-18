-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE IF NOT EXISTS badmovies;

USE badmovies;

CREATE TABLE movie_list (
    id SERIEAL PRIMARY KEY,
    name STRING,
    genre STRING,
    vote_average NUMBER
)