CREATE DATABASE beauty_world2 CHARACTER SET utf8mb4;

USE beauty_world2;

CREATE TABLE users(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name_users VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL,
    email VARCHAR (50) NOT NULL,
    password_ VARCHAR(500) NOT NULL,
    confirm_password VARCHAR(500)  NOT NULL
);

CREATE TABLE types_products(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    type_product VARCHAR(60) NOT NULL
);
CREATE TABLE products(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name_ VARCHAR(50) NOT NULL,
	publish_date DATE NOT NULL,
    description VARCHAR (500) NOT NULL,
    url_image VARCHAR(250),
    user_id INT UNSIGNED,
    FOREIGN KEY (user_id) REFERENCES users(id),
    type_id INT UNSIGNED,
	FOREIGN KEY (type_id) REFERENCES types_products(id)
);



CREATE TABLE comments(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    text_ VARCHAR (500),
    comment_date DATE NOT NULL,
	user_id INT UNSIGNED,
    product_id INT UNSIGNED,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (product_id) REFERENCES products(id)
);


INSERT INTO users VALUES (default, 'Martina', 'Stoessel','tinistoessel_', '1997/03/29',  'tinistoessel@gmail.com', 'hola123','hola123');
INSERT INTO users VALUES (default, 'Carla', 'Roca','carla.rocaa', '1999/04/09',  'carlita.roca@hotmail.com', 'abc234','abc234');
INSERT INTO users VALUES (default, 'Valeria', 'Gonzales', 'valegonzales__', '1987/02/15',  'valuncha_loca@gmail.com', '15febrero','15febrero');
INSERT INTO users VALUES (default, 'Sofia', 'Rimolo', 'sofa_rimolo', '2001/09/13',  'sofitarimolo@yahoo.com', 'sofa789','sofa789');
INSERT INTO users VALUES (default, 'Santiago', 'Salado', 'tot.salado', '1998/06/11',  'totosalado@yahoo.com', 'totito145','totito145');
INSERT INTO users VALUES (default, 'Rocio', 'fagalde', 'rocifagalde', '2003/02/02',  'roci_fag@yahoo.com', 'holamanola','holamanola');
INSERT INTO users VALUES (default, 'Jose', 'Garcia', 'josecito_makeup', '2001/09/13',  'josecito123@yahoo.com', 'helloworld2','helloworld2');

INSERT INTO types_products VALUES (default, 'Mascaras y Delineadores');
INSERT INTO types_products VALUES (default, 'Bronzers');
INSERT INTO types_products VALUES (default, 'Bases y Correctores');
INSERT INTO types_products VALUES (default, 'Brochas y Esponjas');
INSERT INTO types_products VALUES (default, 'Sombras');
INSERT INTO types_products VALUES (default, 'Iluminadores y Rubores');
INSERT INTO types_products VALUES (default, 'Hidratantes y Primers');
INSERT INTO types_products VALUES (default, 'Pintalabios');

INSERT INTO products VALUES (default, 'MILK LIP + CHEEK', '2021/02/12','Una barra de color hidratante multiusos para labios y mejillas.', 'milkBlush.jpg', 2, 6);
INSERT INTO products VALUES (default, 'LANCOME GRANDIOSE', '2021/01/02','Lancôme desvela con la máscara de pestañas Grandiôse una nueva técnica de aplicación para crear, sin esfuerzo, una mirada con unas pestañas perfectamente desplegadas, voluminosas y homogéneas.', 'lancomeMascara.png', 6, 6);
INSERT INTO products VALUES (default, 'NAKED RELOADED', '2020/09/08','De Urban Decay. Estos 12 tonos novedosos son de todo menos corrientes y no tienen nada de básico... Esta paleta abarca desde mates sedosos y suaves satinados hasta tonos con más brillo y purpurinas de colores. ', 'nakedReloaded.jpg', 5, 6);
INSERT INTO products VALUES (default, 'GLOSS BOMB UNIVERSAL LIP', '2020/12/21','De Fenty Beauty. El iluminador de labios Gloss Bomb Universal Lip Luminizer ofrece un brillo explosivo.Los labios lucen instantáneamente más turgentes y suaves, con una formula no pegajosa.', 'glosBomb.jpg', 3, 8);
INSERT INTO products VALUES (default, 'BEAUTY BLENDER', '2021/10/05','Una herramienta de maquillaje reutilizable que permite la aplicación uniforme y sin desperdiciar productos de belleza. BeautyBlender tiene una estructura que permite absorber pequeñas cantidades de agua cuando está mojado.' , 'beautyBlender.jpg', 7 , 4);
INSERT INTO products VALUES (default,'BENE TINT', '2020/04/05','Tinta de bronceado natural, tiene un efecto “rellenador”, también hace que luzca más suave y mejor la textura en general de la piel.', 'benetint.jpg', 1, 2);
INSERT INTO products VALUES (default,'RUBOR SUNSHINE MAC', '2021/11/09','Polvo leve iluminador con tonalidad rosada, ideal para lucir un aspecto bronceado diariamente', 'macpolvobrillo.jpg', 2, 6 );
INSERT INTO products VALUES (default,'BRONZER BRUSH', '2020/03/04','Herramienta ideal para polvos compactos o rubores, la mejor calidad de cerdas seleccionadas eco-friendly y cruelty-free', 'brush.jpeg', 4, 2);
INSERT INTO products VALUES (default, 'ESTEE LAUDER RUN', '2020/06/08', 'Base compacta de excelente cobertura para utilizar en cualquier lugar y en cualquier momento', 'baseCompacta.jpeg', 3, 3);
INSERT INTO products VALUES (default, 'WAVES, YVES SAINT LAURENT', '2020/03/09', 'Delineador de alta duración a prueba de agua, para lucir una mirada más profunda y desafiante', 'eyeliner.jpg', 4, 1);
INSERT INTO products VALUES (default, 'MAC LIPGLOSS', '2020/02/05', 'Labial rosado con terminación total GLOSS. Disponible en más de 4 colores.', 'lipgloss.jpg', 5, 8);
INSERT INTO products VALUES (default, 'NAKED CHERRY', '2021/05/05', 'Paleta de 12 tonalidades, una buena elección si buscas una mezcla de colores para el uso diario, sin dejar de lado algunos tonos más jugados e intensos.','paletaCherry.jpeg', 6, 5);


ALTER TABLE comentarios
MODIFY texto VARCHAR (500);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,1);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 1);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 1);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 1);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/04/21', 5, 1);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 1);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 1);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,2);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 2);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 2);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 2);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/04/21', 5, 2);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 2);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 2);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,3);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 3);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 3);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 3);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/08/02', 5, 3);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/12/09', 6, 3);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 3);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,4);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 4);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 4);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 4);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/03/01', 5, 4);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 4);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 4);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,5);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 5);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 5);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 5);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/12/09', 5, 5);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 5);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 5);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,6);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 6);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 6);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 6);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/12/09', 5, 6);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 6);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 6);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,7);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 7);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 7);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 7);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/12/09', 5, 7);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 7);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 7);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,8);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.','2021/12/03', 2, 8);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.','2020/10/04', 3, 8);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.','2020/12/09', 4, 8);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/12/09', 5, 8);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 8);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7,8);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,9);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 9);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 9);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 9);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/12/09', 5, 9);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 9);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 9);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,10);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 10);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 10);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 10);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/11/09', 5, 10);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 10);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 10);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!','2021/01/03', 1,11);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 11);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 11);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 11);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/11/09', 5, 11);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 11);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22', 7, 11);

INSERT INTO comentarios VALUES (default, 'Este producto los compré hace aproximadamente 1 mes. ¡De verdad que es fantastico!', '2021/01/03', 1,12);
INSERT INTO comentarios VALUES (default, 'La verdad que hace tiempo buscaba un producto tan duradero y por fín lo encontre.', '2021/12/03', 2, 12);
INSERT INTO comentarios VALUES (default, 'Si buscaban un producto duradero y bueno para tu piel, ni lo duden! La verdad que no paro de utilizarlo. Esta genial.', '2020/10/04', 3, 12);
INSERT INTO comentarios VALUES (default, 'Me vino fallado, tengan mucho cuidado con lo que compran.', '2020/12/09', 4, 12);
INSERT INTO comentarios VALUES (default, 'Increible el color que te deja. Más que recomendado!', '2020/11/09', 5, 12);
INSERT INTO comentarios VALUES (default, 'Nunca tuve una peor experiencia!', '2020/08/02', 6, 12);
INSERT INTO comentarios VALUES (default, '@rocifag, es mi producto estrella en mjis prroducciones, te recomiendo que veas mis tutoriales y aprendas a utilizarlo.', '2020/07/22',7, 12)
