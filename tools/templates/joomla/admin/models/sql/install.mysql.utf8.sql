DROP TABLE IF EXISTS `#____component_name__(lowerCase)___item__(lowerCase)`;

CREATE TABLE `#____component_name__(lowerCase)___item__(lowerCase)` (
	`id`       INT(11)     NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(25) NOT NULL,
	`published` tinyint(4) NOT NULL DEFAULT '1',
	PRIMARY KEY (`id`)
)
	ENGINE =MyISAM
	AUTO_INCREMENT =0
	DEFAULT CHARSET =utf8;

INSERT INTO `#____component_name__(lowerCase)___item__(lowerCase)` (`name`) VALUES
('Hello World!'),
('Good bye World!');