
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

 INSERT INTO zemoso_diagnostics.user VALUES(1, "Patrick Smith", "patrick.smith@gmail.com");