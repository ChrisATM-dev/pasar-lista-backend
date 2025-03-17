create table users (
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) not null,
    password varchar(100) not null
);

insert into users (name, email, password) values ('Christian', 'christian@.com', '123456'), ('Juan', 'juan@.com', '123456'), ('Pedro', 'pedro@.com', '123456');
