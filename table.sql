-- Nome do banco: UserLogin

create table usuario(
  id serial,
  email varchar(60) not null,
  senha varchar(10) not null,
  primary key(id)
)
