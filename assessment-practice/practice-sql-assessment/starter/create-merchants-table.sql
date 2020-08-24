create table merchants (
    id serial primary key,
    merchant_name varchar(255) not null,
    country_id integer not null,
    created_at timestamp not null,
    admin_id integer not null,
    merchant_type_id integer not null,
    foreign key (country_id) references countries(id),
    foreign key (admin_id) references users(id),
    foreign key (merchant_type_id) references merchant_types(id)
);