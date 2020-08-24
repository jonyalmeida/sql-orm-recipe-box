insert into cats
(name, color, breed)
values
('Jet', 'Black', 'Mixed Breed'),
('Freyja', 'Orange', 'Unknown'),
('Rocky', 'Black', 'Bombay'),
('Stewart', 'White', 'Birman')
;

insert into toys
(name, color, price)
values
('String', 'yellow', 1.00),
('Tiger', 'Orchid', 2.00),
('Fish', 'Orange', 3.00),
('Ball', 'Peach', 4.00),
('Box', 'Brown', 3.00);

insert into cat_toys
(cat_id, toy_id)
values
(1, 1),
(1, 2),
(3, 4),
(2, 4),
(4, 5)
;
