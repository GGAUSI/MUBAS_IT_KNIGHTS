-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 03, 2023 at 09:52 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fdh_bank`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_bank_details`
--

DROP TABLE IF EXISTS `customer_bank_details`;
CREATE TABLE IF NOT EXISTS `customer_bank_details` (
  `account_number` int NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `Pin` int NOT NULL DEFAULT '1234',
  `account_type` enum('Savings Account','Current Account','Fixed Account','Student Serve Account','Special Savers Account') NOT NULL,
  `bank_balance` decimal(12,2) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  PRIMARY KEY (`account_number`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_bank_details`
--

INSERT INTO `customer_bank_details` (`account_number`, `account_name`, `Pin`, `account_type`, `bank_balance`, `branch_name`) VALUES
(1001, 'John Doe', 1111, 'Savings Account', '5000.00', 'Main Branch'),
(1002, 'Jane Smith', 2222, 'Current Account', '1120.00', 'Downtown Branch'),
(1003, 'Alice Johnson', 3333, 'Fixed Account', '10000.00', 'Main Branch'),
(1004, 'Bob Brown', 4444, 'Fixed Account', '750.25', 'Campus Branch'),
(1005, 'Eve Davis', 5555, 'Savings Account', '15000.75', 'Downtown Branch');

-- --------------------------------------------------------

--
-- Table structure for table `customer_personal_details`
--

DROP TABLE IF EXISTS `customer_personal_details`;
CREATE TABLE IF NOT EXISTS `customer_personal_details` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `account_number` int DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `account_number` (`account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_personal_details`
--

INSERT INTO `customer_personal_details` (`customer_id`, `firstname`, `lastname`, `gender`, `phone_number`, `account_number`) VALUES
(1, 'John', 'Doe', 'Male', '123-456-7890', 1001),
(2, 'Jane', 'Smith', 'Female', '987-654-3210', 1002),
(3, 'Alice', 'Johnson', 'Female', '555-555-5555', 1003),
(4, 'Bob', 'Brown', 'Male', '111-222-3333', 1004),
(5, 'Eve', 'Davis', 'Female', '999-999-9999', 1005);

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

DROP TABLE IF EXISTS `queries`;
CREATE TABLE IF NOT EXISTS `queries` (
  `question` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`question`) VALUES
(''),
(''),
(''),
(''),
(''),
(''),
('');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_personal_details`
--
ALTER TABLE `customer_personal_details`
  ADD CONSTRAINT `customer_personal_details_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `customer_bank_details` (`account_number`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
