-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2024 at 10:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--
CREATE DATABASE IF NOT EXISTS `project` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `project`;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `detail` text NOT NULL,
  `link` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `imageMore` varchar(500) DEFAULT NULL,
  `language` varchar(500) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `name`, `detail`, `link`, `image`, `imageMore`, `language`, `icon`) VALUES
(1, 'Monopoly Game', 'เกมเศรษฐีสุดหรรษาของเหล่าราชาเเห่งโลกทุนนิยมที่คุณสามารถเป็นนายทุน เเละครอบครองอสังหาริมทรัพย์เหนือจิตนาการได้ เนื่องจากโลกใบนี้เเคบเกินไปจึงทำให้เกมนี้สามารถเล่นได้เเค่นายทุน 2 คนเท่านั้น ', 'https://github.com/Berubell9/CS_Monopoly_Java', 'image/1.PNG', 'image/9.PNG', 'Java', 'Github'),
(2, 'Searching Pokemon Website', 'สวมรอยเป็นโปรเกมอนเทรนเนอร์เพื่อตามจับโปรเกมอนข้างทาง เเล้วเราจะรู้ได้ไงละว่าโปรเกมอนนั้นมีความสามารถอะไร งั้นก็ใช้ Pokedex ของเราสิ เรารวมทุกอย่างไว้ที่นั่นหมดเเล้ว', 'https://github.com/Berubell9/PJOS_Searching_Pokemon_API', 'image/2.PNG', 'image/10.PNG', 'HTML, CSS, JavaScript', 'Github'),
(3, 'Chat With Doctor', 'เนื่องจากสังคมในปัจจุบันมีปัญหาเรื่องสุขภาพกันมากขึ้น แต่การเข้าพบแพทย์เพื่อต้องการคำปรึกษา และคำวินิจฉัยอาการป่วยที่โรงพยาบาลนั้นมักจะใช้ระยะเวลาที่นาน จากปัญหาดังกล่าวจึงทำให้เกิดการออกเเบบแอปพลิเคชันที่มีชื่อว่า “แชทกับหมอ” เป็นแอปพลิเคชันที่เข้ามาช่วยให้ผู้ใช้งานสามารถใกล้ชิดมือหมอได้มากยิ่งขึ้น เเละห่างไกลจากโรค Covid-19 ที่อาจจะติดกลับมาจากโรงพยาบาลได้ อีกทั้งยังสามารถขอคำปรึกษาจากแพทย์ เเละยังสามารถนัดพบแพทย์ได้โดยใช้ช่องทางออนไลน์เพื่อเช็คอาการป่วยได้ด้วยตนเองอีกด้วย', 'https://www.figma.com/design/1knDorq73l8yorfJcaRzps/Chat-with-doctor?node-id=0-1&node-type=canvas&t=EWWyKdgiTs0iCvC6-0', 'image/3.PNG', 'image/11.PNG', 'Figma', 'Figma'),
(4, 'Tee Chords', 'เเอปพลิเคชัน \"Tee Chords\" ( ตีคอร์ด ) เป็นเเอปพลิเคชันที่ออกเเบบมาเพื่อมุ้งเน้นในการให้ความรู้\r\nได้เเก่ วิธีการฝึกจับคอร์ด ,การฝึกฟังเสียงคอร์ดของเเต่ละคีย์ เเละการนำมาประยุกต์เพื่อเล่นเพลงต่างๆ\r\nเหมาะสำหรับทุกเพศทุกวัยที่อยากจะฝึกเล่นเครื่องดนตรีสากลประเภทสาย เช่น กีตาร์ เบส อูคูเลเล่ เป็นต้น\r\nพร้อมทั้งมีจูนเนอร์ เเละคอร์ดของเพลงที่เเบ่งความยากง่าย เเบ่งเสียงไว้ให้สำหรับได้ฝึกฝนอีกด้วย', 'https://www.figma.com/design/NHbJSFA7F2H4ghuE5cZZj2/65050022?node-id=142-720&node-type=frame&t=BUCbjUVli5rS121R-0', 'image/4.PNG', 'image/12.PNG', 'Figma', 'Figma'),
(5, 'PURIRI Focus Time', 'เว็บไซต์ \"Puri Puri\" (พูริ พูริ) เป็นเว็บไซต์ที่ออกเเบบมาเพื่อมุ่งเน้นในการจัดการเวลาอย่างมีประสิทธิภาพ เหมาะสำหรับนักเรียน และนักศึกษาที่มักจะพบปัญหาในการจดจ่อ เเละแบ่งเวลาในการทำกิจกรรมต่างๆ ดังนั้น Puri Puri จึงเน้นการออกแบบที่เป็นมิตรต่อผู้ใช้งาน และเหมาะสำหรับทุกเพศทุกวัยให้สามารถจัดสรรเวลาด้วยตัวเองได้', 'https://www.figma.com/design/Yoc4LFNZNxgKnMA9s77SDj/Focustimer?node-id=2-2&node-type=canvas&t=FfDfTsb4L73dkSJi-0', 'image/5.PNG', 'image/13.PNG', 'Figma', 'Figma'),
(6, 'Chrome Extensions For Color Blindness', 'ในปัจจุบันการใช้งานเว็บไซต์ผ่านคอมพิวเตอร์เป็นสิ่งที่ทำกันในกิจวัตรประจำวัน ไม่ว่าจะเป็นงานด้านการออกแบบ ,กราฟิก ,การอ่านข้อมูล หรือการทำงานที่ต้องใช้การแยกแยะสี สำหรับผู้ที่มีภาวะตาบอดสี ได้เเก่ ตาบอดสีเขียว, ตาบอดสีแดง และตาบอดสีน้ำเงิน เป็นต้น ไม่สามารถแยกแยะสีบางสีได้อย่างถูกต้อง ดังนั้นการพัฒนาโปรแกรมส่วนขยายสำหรับ Chrome Engine ที่สามารถปรับสีหน้าจอเว็บไซต์ได้ จะช่วยให้ผู้ที่มีภาวะตาบอดสีสามารถเเยกเเยะความเเตกต่างของสีได้ดียิ่งขึ้น อีกทั้งยังเพิ่มโอกาสในการทำงานในสายอาชีพต่าง ๆ และยังช่วยให้เข้าใจผู้ที่มีภาวะตาบอดสีได้อีกด้วย', 'https://github.com/Berubell9/Chrome_Extensions_For_Color_Blindness?tab=readme-ov-file', 'image/6.PNG', 'image/14.PNG', 'HTML, CSS, JavaScript, JQuery', 'Github'),
(7, 'Age Is Just A Number Game Website', 'เว็บไซต์เกมทายเชื้อชาติ เพศ เเละช่วงอายุจากใบหน้าบุคคล ที่มีการนำโมเดล Ai มาใช้ในการประมวลผลภาพใบหน้าเพื่อนำคำตอบที่ได้ไปสร้างโจทย์เกมเพื่อเล่นกับเพื่อนๆ สามารถรองรับผู้เล่นได้หลายคน ตัวเว็บไซต์คล้ายกับ Kahoot! เมื่อเล่นเสร็จมีการสรุปอันดับ เเละคะเเนนให้ผู้เล่น ', 'https://github.com/3032126/Ethnicity-Detection-Model', 'image/7.PNG', 'image/15.PNG', 'HTML, CSS, JavaScript, MongoDB, Nodejs, Python', 'Github'),
(8, 'E-Portfolio', 'เว็บไซต์ Portfolio เพื่อใช้ในการยื่นเข้าศึกษาระดับมหาวิทยาลัย ในเว็บไซต์นี้ได้เก็บรวบรวมประวัติส่วนตัว ,ผลงาน ,กิจกรม เเละเกียรติบัตร ทั้งด้านคอมพิวเตอร์ เเละด้านอื่นๆเอาไว้\r\nGibhub : https://github.com/Berubell9/E-Portfolio', 'https://e-portfolio-kornkamol-a2560.web.app/', 'image/8.PNG', 'image/16.PNG', 'HTML, CSS, JavaScript', 'Website');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
