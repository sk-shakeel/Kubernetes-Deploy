
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

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

INSERT INTO zemoso_diagnostics.appointment VALUES(1,"March", "23", "7.00am-8.00am","Wednesday",1,1,1,1);