-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zemoso_diagnostics
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zemoso_diagnostics
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` ;
USE `zemoso_diagnostics` ;

-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`labs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`lab` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  `available_slots` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`patients`
-- -----------------------------------------------------
CREATE TABLE `patient` (
  `id` int NOT NULL AUTO_INCREMENT,
  `relation` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_patients_users1_idx` (`user_id`),
  CONSTRAINT `fk_patients_users1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`address`
-- -----------------------------------------------------
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


-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`tests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`test` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `time` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`test_lab`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`test_lab` (
  `id` INT NOT NULL,
  `cost` INT NULL,
  `test_id` INT NOT NULL,
  `lab_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_test_lab_test1_idx` (`test_id` ASC) VISIBLE,
  INDEX `fk_test_lab_lab1_idx` (`lab_id` ASC) VISIBLE,
  CONSTRAINT `fk_test_lab_test1`
    FOREIGN KEY (`test_id`)
    REFERENCES `zemoso_diagnostics`.`test` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_test_lab_lab1`
    FOREIGN KEY (`lab_id`)
    REFERENCES `zemoso_diagnostics`.`lab` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`appointment` (
  `id` INT NOT NULL,
  `month` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `time` VARCHAR(45) NULL,
  `day` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `test_lab_id` INT NOT NULL,
  `patient_id` INT NOT NULL,
  `address_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_appointments_users_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_appointments_test_lab1_idx` (`test_lab_id` ASC) VISIBLE,
  INDEX `fk_appointments_patients1_idx` (`patient_id` ASC) VISIBLE,
  INDEX `fk_appointments_address1_idx` (`address_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointments_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `zemoso_diagnostics`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointments_test_lab1`
    FOREIGN KEY (`test_lab_id`)
    REFERENCES `zemoso_diagnostics`.`test_lab` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointments_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `zemoso_diagnostics`.`patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointments_address1`
    FOREIGN KEY (`address_id`)
    REFERENCES `zemoso_diagnostics`.`address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zemoso_diagnostics`.`payment_card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`payment_card` (
  `id` INT NOT NULL,
  `number` VARCHAR(45) NULL,
  `card_holder` VARCHAR(45) NULL,
  `expiry_date` VARCHAR(45) NULL,
  `cvv` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_payment_card_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_payment_card_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `zemoso_diagnostics`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
INSERT INTO zemoso_diagnostics.lab VALUES(1,"Los Altos Center Lab",4.3,4);
INSERT INTO zemoso_diagnostics.lab VALUES(2,"Los Altos Center Lab",4.3,4);
 -- // ------------  for lab -----------------
 
 -- user
 INSERT INTO zemoso_diagnostics.user VALUES(1, "Patrick Smith", "patrick.smith@gmail.com");
 
 -- Patient-- 
 INSERT INTO zemoso_diagnostics.patient VALUES(1,"Myself", "Patrick Smith", 30, "Male", 1);
 
 -- address
 INSERT INTO zemoso_diagnostics.address VALUES(1,"2235 California Street  APT#021", "Mountain View California", "11023", "Mountain View ,California",1);
 
 -- payment_card
 INSERT INTO zemoso_diagnostics.payment_card VALUES(1, "1244 1234 1345 3255", "Yessie", "02/25", 123, 1);
 
 -- tests
 INSERT INTO zemoso_diagnostics.test VALUES(1, "Full body Check", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(2, "Covid RTPCR", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(3, "Liver Function Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(4, "Complete Blood Count", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(5, "Diabetes Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(6, "Kidney Function Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(7, "Thyroid Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(8, "Lipid Profile", "24hrs");

-- test_labs
INSERT INTO zemoso_diagnostics.test_lab VALUES(1,1200, 1, 1);

-- appointments
INSERT INTO zemoso_diagnostics.appointment VALUES(1,"March", "23", "7.00am-8.00am","Wednesday",1,1,1,1);