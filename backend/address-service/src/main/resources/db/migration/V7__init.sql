
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`address` (
  `id` INT NOT NULL,
  `house_no` VARCHAR(45) NULL,
  `area` VARCHAR(45) NULL,
  `zipcode` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_address_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `zemoso_diagnostics`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO zemoso_diagnostics.address VALUES(1,"2235 California Street  APT#021", "Mountain View California", "11023", "Mountain View ,California",1);