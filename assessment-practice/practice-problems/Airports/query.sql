--query 1
select * from flights 
where date < '2020-07-01';

--query 2
select departure_airport_id, date as departure
from flights join airports 
on (flights.departure_airport_id = airports.id)
where date > '2020-07-01';

--query 3
select model, capacity, 
departure_airport_id as departure,
airport_code as airport
from flights join airplanes
on (flights.airplane_id = airplanes.id)
join airports 
on (flights.departure_airport_id = airports.id)
where airport_code = 'YYC';