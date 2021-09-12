
create table if not exists Users(
	Id char(36) primary key,
	Login varchar(99) not null,
	Email varchar(99) not null unique,
	Password varchar(99) not null,
	Avatar varchar(256),
	Role varchar(99) not null
	);

create table if not exists Videos(
	Id char(36) primary key,
	Name varchar(99) not null,
	Link varchar(256) not null,
	Owner char(36) not null,
	Duration varchar(99) not null,
	Quality varchar(99) not null,
	Created timestamp not null,
	FOREIGN KEY (Owner) REFERENCES Users(Id)
);

