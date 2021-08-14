CREATE DATABASE `game` /*!40100 DEFAULT CHARACTER SET latin1 */;
CREATE TABLE `questions` (
  `idQuestions` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(9999) NOT NULL,
  `level` tinyint(16) NOT NULL COMMENT 'Nivel de zarpado de la pregunta.',
  PRIMARY KEY (`idQuestions`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;