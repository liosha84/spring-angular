
INSERT INTO roles (id, name) VALUES (1, 'ROLE_USER');
INSERT INTO roles (id, name) VALUES (2, 'ROLE_MODERATOR');
INSERT INTO roles (id, name) VALUES (3, 'ROLE_ADMIN');

INSERT INTO users (id, email, password, username)
VALUES (1, ''liosha84@gmail.com'', ''$2a$10$qyoKXYSukha6XCjorTzoweF4Os1pwmwyzbaSsb3RCVB0LK6WLQKPC'', ''Admin'');
INSERT INTO users (id, email, password, username)
VALUES (4, ''Moderator@gmail.com'', ''$2a$10$zLo5th8Xbfq.MM7y/dCRQu3Ud7HHyAwm.7.yS08ytJtkHMKrbOJlu'', ''Moderator'');
INSERT INTO users (id, email, password, username)
VALUES (5, ''user@gmail.com'', ''$2a$10$2EcwYffteBF3GhVaf5qPB.I7XiHepDEauU5D4fx9fpBXMTZI/QnnC'', ''User'');


INSERT INTO user_roles (user_id, role_id) VALUES (5, 1);
INSERT INTO user_roles (user_id, role_id) VALUES (1, 3);
INSERT INTO user_roles (user_id, role_id) VALUES (4, 2);