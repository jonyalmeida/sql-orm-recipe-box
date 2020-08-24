select 
users.full_name, 
merchant_types.type,
countries.name,
merchants.merchant_name
from merchants
join users on (merchants.admin_id = users.id)
join countries on (merchants.country_id = countries.id)
join merchant_types on (merchants.merchant_type_id = merchant_types.id)
order by merchant_name;