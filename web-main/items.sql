-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2024 at 03:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `server`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `class` varchar(30) NOT NULL,
  `price` int(10) NOT NULL,
  `oldPrice` int(10) NOT NULL,
  `img1` varchar(30) NOT NULL,
  `img2` varchar(30) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `title`, `class`, `price`, `oldPrice`, `img1`, `img2`, `date`) VALUES
(1, 'ЛАМИНИРОВАННЫЕ ПЛИТКИ PERGO PORTFOLIO 8057', '39 класс 8.5 мм', 2988, 4899, '5.png', '8.png', '2024-06-12 09:31:52'),
(5, 'НОВЫЙ ТАЙТЛ', '32 класс 5.5 мм', 6146, 6146, '4.png', '3.png', '2024-06-12 10:06:46'),
(7, 'ЛАМИНИРОВАННЫЕ ПЛИТКИ PERGO 2481', '30 класс 5 мм', 6383, 6383, '1.png', '4.png', '2024-06-12 10:13:53'),
(8, 'LAMINATE ПАНЕЛИ QUICK-STEP MAJESTIC 3442', '34 класс 6.5 мм', 1571, 2493, '5.png', '3.png', '2024-06-12 10:15:08'),
(9, 'SOLID ДЕРЕВЯННЫЙ ПОЛ BRUCE OAK 3739', '36 класс 7 мм', 3904, 4387, '5.png', '7.png', '2024-06-12 10:20:09'),
(10, 'ЛАМИНИРОВАННЫЕ ПЛИТКИ PERGO 2481', '33 класс 6 мм', 3099, 3734, '6.png', '7.png', '2024-06-12 10:21:27'),
(11, 'LINOLEUM ПЛИТКА FORBO MARMOLEUM 9222', '31 класс 5 мм', 5883, 5883, '1.png', '5.png', '2024-06-12 10:22:33'),
(12, 'LINOLEUM ПЛИТКА FORBO MARMOLEUM REAL 6034', '37 класс 7.5 мм', 3515, 3949, '5.png', '1.png', '2024-06-12 10:23:49'),
(13, 'SPC ЛАМИНАТ MODULEO LAYRED LAUREL OAK 51864', '31 класс 5 мм', 6958, 6958, '7.png', '4.png', '2024-06-12 10:24:21'),
(14, 'ЛАМИНИРОВАННЫЕ ПЛИТКИ PERGO PORTFOLIO 8057', '39 класс 8.5 мм', 2394, 2817, '8.png', '2.png', '2024-06-12 10:25:11'),
(15, 'LAMINATE ПАНЕЛИ QUICK-STEP MAJESTIC 3442', '34 класс 6.5 мм', 6717, 6717, '2.png', '7.png', '2024-06-12 10:25:43'),
(16, 'SOLID ДЕРЕВЯННЫЙ ПОЛ BRUCE HYDROPEL OAK 4218', '30 класс 5 мм', 4013, 4666, '2.png', '4.png', '2024-06-12 10:26:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
