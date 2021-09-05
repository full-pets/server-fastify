//<<<<<<<USERS>>>>>>>>>

create table if not exists users(
	id char(36) primary key,
	login varchar(99) not null,
	email varchar(99) not null unique,
	password varchar(99) not null,
	role varchar(99) not null);


//<<<<<<<  >>>>>>>>>
