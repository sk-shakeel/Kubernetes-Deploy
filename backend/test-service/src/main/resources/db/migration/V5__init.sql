
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

CREATE TABLE IF NOT EXISTS `zemoso_diagnostics`.`test` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `time` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO zemoso_diagnostics.test VALUES(1, "Full body Check", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(2, "Covid RTPCR", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(3, "Liver Function Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(4, "Complete Blood Count", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(5, "Diabetes Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(6, "Kidney Function Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(7, "Thyroid Test", "24hrs");
INSERT INTO zemoso_diagnostics.test VALUES(8, "Lipid Profile", "24hrs");