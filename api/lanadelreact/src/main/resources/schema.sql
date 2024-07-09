CREATE TABLE album (
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   release_date VARCHAR(255),
   cover_url VARCHAR(255)
);

CREATE TABLE comment (
     id BIGINT AUTO_INCREMENT PRIMARY KEY,
     text VARCHAR(255) NOT NULL,
     album_id BIGINT, CONSTRAINT fk_album FOREIGN KEY (album_id) REFERENCES album(id)
);