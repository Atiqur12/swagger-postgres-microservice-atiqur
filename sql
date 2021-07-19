CREATE TABLE admin (
name text,
email text,
password text
);
CREATE TABLE customer (
name text,
email text,
phone text,
password text
);
CREATE TABLE tutorial (
name text,
email text,
phone text,
password text
);

CREATE TABLE ordered (
customer text,
product text
);
CREATE TABLE notification (
customer text,
message text
);


CREATE TABLE delievered (
customer text,
order text
);


