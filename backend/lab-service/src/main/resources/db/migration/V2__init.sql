
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`lab` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  `available_slots` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO zemoso_diagnostics.lab VALUES(3,"Los Altos Center Lab",4.3,4);
INSERT INTO zemoso_diagnostics.lab VALUES(4,"Los Altos Center Lab",4.3,4);