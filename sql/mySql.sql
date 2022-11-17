TRUNCATE table book

SELECT ut.token  FROM  userToken ut join users u  on  ut.user_id  = p.user_id  where pu.username  = 'Ольга';

SELECT user_id  from users u where p.username = 'CoreKid';

SELECT * FROM purchase_payment_form ppf
LEFT JOIN money m ON m.user_id = ppf.user_id AND m.purchase_id = ppf.purchase_id
WHERE ppf.payment_source = 'sbp' AND ppf.payment_state = 'confirmed'
ORDER BY ppf.payment_id DESC
LIMIT 2;


UPDATE refund_request
SET account_payment_id = NULL;

INSERT INTO spwww.purchase_payment_form
(payment_id, purchase_id, user_id, payment_date, payment_date_cnt, payment_time, payment_time_cnt, payment_card, payment_card_cnt, payment_money, payment_money_cnt, payment_state, payment_type, payment_comment, payment_created, payment_source, user_who_changed)
VALUES(16563219, 735556, 156, '2022-07-26', 0, '18:06:37', 0, '*.0000', 0, 191.79, 0, 'new', 'payment', 'сбп альфа банк', '2022-07-26 18:06:37', 'user', 0);
