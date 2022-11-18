TRUNCATE table book
-- -------------------------------------
SELECT token  FROM  userToken ut join users u  on  ut.user_id  = p.user_id  where pu.username  = 'destoer';
-- -------------------------------------
SELECT user_id  from users u where p.username = 'CoreKid';
-- -------------------------------------
SELECT * FROM book b
LEFT JOIN `money` m ON m.user_id = b.book_id AND m.total_money = b.author_id
WHERE b.book_author = 'Чехов' AND b.type = 'sold'
ORDER BY b.book_id DESC
LIMIT 2;

-- -------------------------------------
UPDATE bookMarket
SET americanBook = NULL;
-- -------------------------------------
INSERT INTO bookMarket
(id, book_id, user_id, payment_date, payment_date_cnt, payment_time, payment_time_cnt, payment_card, payment_card_cnt, payment_money, payment_money_cnt, payment_state, payment_type, payment_comment, payment_created, payment_source, who_changed)
VALUES(16563219, 735556, 156, '2022-07-26', 0, '18:06:37', 0, '*.0000', 0, 191.79, 0, 'new', 'payment', 'New банк', '2022-07-26 18:06:37', 'user', 0);

-- -------------------------------------
DELETE from `bool_id` WHERE `id` = 007;
-- -------------------------------------
select
	sum(b.book_price) as sum_book_price
from
	book as b
left join `catalog` as c on
	c.catalog_id = b.book_id
right join orders as o on
	o.order_id = b.book_id
where
	c.cat_id in (
       1,5,9,8)
limit 1 
-- -------------------------------------