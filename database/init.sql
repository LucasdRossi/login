create table users(
  id serial not null,
  username varchar(15) not null,
  password varchar(15) not null,
  primary key (id)
);