create table cats 
(
    id serial primary key,
    name varchar(50) not null,
    color varchar(20) not null,
    breed varchar(50) not null
    );

create table toys 
(
    id serial primary key,
    name varchar(50) not null,
    color varchar(20) not null,
    price money not null
);

create table cat_toys
(
    id serial primary key,
    cat_id integer not null,
    toy_id integer not null,
    foreign key (cat_id) references cats(id),
    foreign key (toy_id) references toys(id)
)