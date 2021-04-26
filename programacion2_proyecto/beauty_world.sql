CREATE DATABASE beauty_world CHARACTER SET utf8mb4;

USE beauty_world;

CREATE TABLE usuarios(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    nombreusuario VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    email VARCHAR (50) NOT NULL,
    contrasena VARCHAR(500) NOT NULL,
    confirmar_contrasena VARCHAR(500)  NOT NULL
);

CREATE TABLE productos(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    fecha_creacion DATE NOT NULL,
    descripcion VARCHAR (500) NOT NULL,
    url_imagen VARCHAR(250),
    usuario_id INT UNSIGNED,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);



CREATE TABLE comentarios(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR (500),
    fecha_creacion DATE NOT NULL,
	usuario_id INT UNSIGNED,
    producto_id INT UNSIGNED,
	FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	FOREIGN KEY (producto_id) REFERENCES productos(id)
     
);

ALTER TABLE usuarios
DROP   contrasena;

ALTER TABLE usuarios
DROP confirmar_contrasena;

ALTER TABLE usuarios
ADD contrasena VARCHAR (500) NOT NULL,
ADD confirmar_contrasena  VARCHAR (500) NOT NULL;

INSERT INTO usuarios VALUES (default, 'Martina', 'Stoessel','tinistoessel_', '1997/03/29',  'tinistoessel@gmail.com', 'hola123','hola123');
INSERT INTO usuarios VALUES (default, 'Carla', 'Roca','carla.rocaa', '1999/04/09',  'carlita.roca@hotmail.com', 'abc234','abc234');
INSERT INTO usuarios VALUES (default, 'Valeria', 'Gonzales', 'valegonzales__', '1987/02/15',  'valuncha_loca@gmail.com', '15febrero','15febrero');
INSERT INTO usuarios VALUES (default, 'Sofia', 'Rimolo', 'sofa_rimolo', '2001/09/13',  'sofitarimolo@yahoo.com', 'sofa789','sofa789');
INSERT INTO usuarios VALUES (default, 'Santiago', 'Salado', 'tot.salado', '1998/06/11',  'totosalado@yahoo.com', 'totito145','totito145');
INSERT INTO usuarios VALUES (default, 'Rocio', 'fagalde', 'rocifagalde', '2003/02/02',  'roci_fag@yahoo.com', 'holamanola','holamanola');
INSERT INTO usuarios VALUES (default, 'Jose', 'Garcia', 'josecito_makeup', '2001/09/13',  'josecito123@yahoo.com', 'helloworld2','helloworld2');

ALTER TABLE  productos
ADD descripcion VARCHAR (500) NOT NULL after fecha_creacion;

INSERT INTO productos VALUES (default, 'MILK LIP + CHEEK', '2021/02/12','Una barra de color hidratante multiusos para labios y mejillas.', 'milkBlush.jpg', 2 );
INSERT INTO productos VALUES (default, 'LANCOME GRANDIOSE', '2021/01/02','Lancôme desvela con la máscara de pestañas Grandiôse una nueva técnica de aplicación para crear, sin esfuerzo, una mirada con unas pestañas perfectamente desplegadas, voluminosas y homogéneas.', 'lancomeMascara.png', 6 );
INSERT INTO productos VALUES (default, 'NAKED RELOADED', '2020/09/08','De Urban Decay. Estos 12 tonos novedosos son de todo menos corrientes y no tienen nada de básico... Esta paleta abarca desde mates sedosos y suaves satinados hasta tonos con más brillo y purpurinas de colores. ', 'nakedReloaded.jpg', 5);
INSERT INTO productos VALUES (default, 'GLOSS BOMB UNIVERSAL LIP', '2020/12/21','De Fenty Beauty. El iluminador de labios Gloss Bomb Universal Lip Luminizer ofrece un brillo explosivo.Los labios lucen instantáneamente más turgentes y suaves, con una formula no pegajosa.', 'glosBomb.jpg', 3 );
INSERT INTO productos VALUES (default, 'BEAUTY BLENDER', '2021/10/05','Una herramienta de maquillaje reutilizable que permite la aplicación uniforme y sin desperdiciar productos de belleza. BeautyBlender tiene una estructura que permite absorber pequeñas cantidades de agua cuando está mojado.' , 'beautyBlender.jpg', 7 );
INSERT INTO productos VALUES (default,'BENE TINT', '2020/04/05','Tinta de bronceado natural, tiene un efecto “rellenador”, también hace que luzca más suave y mejor la textura en general de la piel.', 'benetint.jpg', 1 );
INSERT INTO productos VALUES (default,'RUBOR SUNSHINE MAC', '2021/11/09','Polvo leve iluminador con tonalidad rosada, ideal para lucir un aspecto bronceado diariamente', 'macpolvobrillo.jpg', 2 );
INSERT INTO productos VALUES (default,'BRONCER BRUSH', '2020/03/04','Herramienta ideal para polvos compactos o rubores, la mejor calidad de cerdas seleccionadas eco-friendly y cruelty-free', 'brush.jpeg', 4 );
INSERT INTO productos VALUES (default, 'ESTEE LAUDER RUN', '2020/06/08', 'Base compacta de excelente cobertura para utilizar en cualquier lugar y en cualquier momento', 'baseCompacta.jpeg', 3);
INSERT INTO productos VALUES (default, 'WAVES, YVES SAINT LAURENT', '2020/03/09', 'Delineador de alta duración a prueba de agua, para lucir una mirada más profunda y desafiante', 'eyeliner.jpg', 4);
INSERT INTO productos VALUES (default, 'MAC LIPGLOSS', '2020/02/05', 'Labial rosado con terminación total GLOSS. Disponible en más de 4 colores.', 'lipgloss.jpg', 5);
INSERT INTO productos VALUES (default, 'NAKED CHERRY', '2021/05/05', 'Paleta de 12 tonalidades, una buena elección si buscas una mezcla de colores para el uso diario, sin dejar de lado algunos tonos más jugados e intensos.','paletaCherry.jpeg', 6);


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
