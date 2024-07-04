INSERT INTO album (id, title, release_date, cover_url) VALUES (1, 'Born to Die', '2012-01-27', 'cover-url-1');
INSERT INTO album (id, title, release_date, cover_url) VALUES (2, 'Ultraviolence', '2014-06-13', 'cover-url-2');
INSERT INTO album (id, title, release_date, cover_url) VALUES (3, 'Honeymoon', '2015-09-18', 'cover-url-3');

INSERT INTO comment (text, album_id) VALUES ('Amazing album!', 1);
INSERT INTO comment (text, album_id) VALUES ('Love this song!', 1);
INSERT INTO comment (text, album_id) VALUES ('A masterpiece.', 2);
INSERT INTO comment (text, album_id) VALUES ('Great production.', 3);