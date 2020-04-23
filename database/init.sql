create table users(
  id serial not null,
  username varchar(15) not null,
  password char(145) not null,
  primary key (id)
);