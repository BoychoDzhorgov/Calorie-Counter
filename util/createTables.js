const connection = require('./database');

connection.query(`
CREATE TABLE IF NOT EXISTS patients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);
`);

connection.query(`
CREATE TABLE IF NOT EXISTS foods (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  calories_per_100g INT NOT NULL,
  deleted_at TIMESTAMP DEFAULT NULL
);
`);

connection.query(`
CREATE TABLE IF NOT EXISTS food_logs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  patient_id INT NOT NULL,
  food_id INT NOT NULL,
  quantity INT NOT NULL,
  consumed_at DATETIME NOT NULL,
  FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
  FOREIGN KEY (food_id) REFERENCES foods(id) ON DELETE RESTRICT
);
`);