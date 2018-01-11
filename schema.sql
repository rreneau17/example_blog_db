create table authors(
author_id serial PRIMARY KEY,
first_name VARCHAR (50),
last_name VARCHAR (50),
email VARCHAR (355)
);

create table posts (
post_id serial PRIMARY KEY,
content VARCHAR (10000),
created_on TIMESTAMP
);

create table author_post
(
  author_id integer references authors(author_id),
  post_id integer references posts(post_id),
  last_update timestamp
 );



 create table post_tag
(
  post_id integer references posts(post_id),
  tag_id integer references tags(tag_id),
  last_update timestamp
 );

 create table tags (
  tag_id serial PRIMARY KEY,
  tag_name VARCHAR (50),
  last_update timestamp
 );

create table commenters (
  commenter_id serial PRIMARY KEY,
  name VARCHAR (50),
  email VARCHAR (355),
  last_update timestamp
 );

 create table comments
(
comments_id serial primary key,
comment_content VARCHAR (1000),
commenter_id integer references commenters(commenter_id),
author_id integer references authors(author_id),
last_update timestamp 
);