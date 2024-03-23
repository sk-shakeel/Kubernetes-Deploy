
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

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

INSERT INTO zemoso_diagnostics.test_lab VALUES(1,1200, 1, 1);