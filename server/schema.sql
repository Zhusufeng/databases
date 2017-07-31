CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  message varchar(255) NOT NULL,
  roomname varchar(30) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (userid) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE rooms (
--   ID int NOT NULL,
--   name varchar(30),
--   PRIMARY KEY (ID)
-- );

-- CREATE TABLE chat_history (
--   ID int NOT NULL,
--   user_id int NOT NULL,
--   message_id int NOT NULL,
--   room_id int NOT NULL,
--   PRIMARY KEY (ID),
--   FOREIGN KEY (user_id) REFERENCES users(ID),
--   FOREIGN KEY (message_id) REFERENCES messages(ID),
--   FOREIGN KEY (room_id) REFERENCES rooms(ID)
-- );

-- CREATE TABLE users_messages (
--   ID int NOT NULL,
--   user_id int,
--   message_id int,
--   PRIMARY KEY (ID),
--   FOREIGN KEY (user_id) REFERENCES users(ID),
--   FOREIGN KEY (message_id) REFERENCES messages(ID)
-- );

-- CREATE TABLE messages_rooms (
--   ID int NOT NULL,
--   message_id int,
--   room_id int,
--   PRIMARY KEY (ID),
--   FOREIGN KEY (message_id) REFERENCES messages(ID),
--   FOREIGN KEY (room_id) REFERENCES rooms(ID)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

