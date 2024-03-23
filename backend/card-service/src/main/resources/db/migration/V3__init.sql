
CREATE SCHEMA IF NOT EXISTS `zemoso_diagnostics` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zemoso_diagnostics` ;

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

INSERT INTO zemoso_diagnostics.payment_card VALUES(1, "1244 1234 1345 3255", "Yessie", "02/25", 123, 1);