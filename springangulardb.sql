

CREATE TABLE IF NOT EXISTS public.roles
(
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    name character varying(20) COLLATE pg_catalog."default",

);

CREATE TABLE IF NOT EXISTS public.users
(
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    email character varying(50) COLLATE pg_catalog."default",
    password character varying(120) COLLATE pg_catalog."default",
    username character varying(20) COLLATE pg_catalog."default",

    CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email),
    CONSTRAINT ukr43af9ap4edm43mmtq01oddj6 UNIQUE (username)
);


CREATE TABLE IF NOT EXISTS public.user_roles
(
    user_id bigint NOT NULL,
    role_id integer NOT NULL,
    CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id),
    CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id)
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.tutorials
(
    id bigint NOT NULL,
    description character varying(255) COLLATE pg_catalog."default",
    published boolean,
    title character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT tutorials_pkey PRIMARY KEY (id)
);


INSERT INTO roles (id, name) VALUES (1, 'ROLE_USER');
INSERT INTO roles (id, name) VALUES (2, 'ROLE_MODERATOR');
INSERT INTO roles (id, name) VALUES (3, 'ROLE_ADMIN');

INSERT INTO users (id, email, password, username)
VALUES (1, 'liosha84@gmail.com', '$2a$10$qyoKXYSukha6XCjorTzoweF4Os1pwmwyzbaSsb3RCVB0LK6WLQKPC', 'Admin');
INSERT INTO users (id, email, password, username)
VALUES (4, 'Moderator@gmail.com', '$2a$10$zLo5th8Xbfq.MM7y/dCRQu3Ud7HHyAwm.7.yS08ytJtkHMKrbOJlu', 'Moderator');
INSERT INTO users (id, email, password, username)
VALUES (5, 'user@gmail.com', '$2a$10$2EcwYffteBF3GhVaf5qPB.I7XiHepDEauU5D4fx9fpBXMTZI/QnnC', 'User');


INSERT INTO user_roles (user_id, role_id) VALUES (5, 1);
INSERT INTO user_roles (user_id, role_id) VALUES (1, 3);
INSERT INTO user_roles (user_id, role_id) VALUES (4, 2);

