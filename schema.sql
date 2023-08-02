USE db_kambista;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(500),
    completed BOOLEAN DEFAULT false
);

INSERT INTO todos (title, description) VALUES ('Hacer café', 'Hacer café para el equipo de trabajo');
INSERT INTO todos (title, description) VALUES ('Estudiar Node.js', 'Estudiar Node.js para el examen de certificación');
