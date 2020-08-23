insert into airports (airport_code, airport_name)
values
	('YYC', 'Calgary'),
	('YYZ', 'Toronto'),
	('YVR', 'Vancouver'),
	('YUL', 'Montreal');

insert into airplanes (model, capacity)
values 
	('747', 500),
	('737', 100),
	('Cessna 172', 4);

insert into flights (date, time, departure_airport_id, arrival_airport_id, status, departuregate, airplane_id)
values
	('2020-03-01', '12:40', 1, 2, 'ON-TIME', 'D34', 1),
	('2020-04-01', '1:30', 4, 2, 'ON-TIME', 'D34', 1),
 	('2020-05-01', '2:25', 4, 3, 'ON-TIME', 'D34', 1),
	('2020-06-01', '3:30', 3, 2, 'ON-TIME', 'D34', 2),
	('2020-07-01', '12:40', 2, 1, 'ON-TIME', 'D34',3),
	('2020-08-01', '2:14', 4, 3, 'ON-TIME', 'D34', 1);
