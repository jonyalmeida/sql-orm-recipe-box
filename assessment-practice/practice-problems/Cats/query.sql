select cats.name as cat, 
cat_id, toys.name as toy
from cat_toys
join cats on cats.id = cat_toys.cat_id
join toys on toys.id = cat_toys.toy_id
where toys.name = 'Box';

select toy_id, 
cats.name as cat, 
toys.name as toy
from cat_toys
join cats on cats.id = cat_toys.cat_id
join toys on toys.id = cat_toys.toy_id
where cats.name = 'Jet';

select cats.name, toys.name
from cat_toys 
join cats on cats.id = cat_toys.cat_id
join toys on toys.id = cat_toys.toy_id
;