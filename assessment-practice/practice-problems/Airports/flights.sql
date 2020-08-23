create table flights (
	id serial primary key,
	date date not null,
	time time not null,
	departure_airport_id integer not null,
	arrival_airport_id integer not null,
	status varchar(50) not null,
	departureGate varchar(10) not null,
	airplane_id integer not null,
	foreign key (departure_airport_id) references airports(id),
	foreign key (arrival_airport_id) references airports(id),
	foreign key (airplane_id) references airplanes(id)
);
