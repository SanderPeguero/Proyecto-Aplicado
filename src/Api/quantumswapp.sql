-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2022 a las 05:10:54
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `quantumswapp`
--
CREATE DATABASE IF NOT EXISTS `quantumswapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `quantumswapp`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritos`
--

DROP TABLE IF EXISTS `carritos`;
CREATE TABLE IF NOT EXISTS `carritos` (
  `IDCarrito` int(11) NOT NULL AUTO_INCREMENT,
  `IDUsuario` int(11) NOT NULL,
  `Monto` double NOT NULL DEFAULT 0,
  `FechaCreacion` datetime NOT NULL,
  `FechaModificacion` datetime DEFAULT NULL,
  `Estatus` int(11) NOT NULL,
  PRIMARY KEY (`IDCarrito`),
  KEY `IDUsuario` (`IDUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
CREATE TABLE IF NOT EXISTS `imagenes` (
  `IDImagen` int(11) NOT NULL AUTO_INCREMENT,
  `IDProducto` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `FechaCreacion` datetime NOT NULL,
  PRIMARY KEY (`IDImagen`),
  KEY `IDProducto` (`IDProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `IDProducto` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion` longtext NOT NULL,
  `CantidadRestante` int(11) NOT NULL DEFAULT 0,
  `Costo` double NOT NULL DEFAULT 0,
  `Precio` double NOT NULL DEFAULT 0,
  `Descuento` double DEFAULT 0,
  `QRCode` varchar(200) NOT NULL,
  `FechaCreacion` datetime NOT NULL,
  `FechaModificacion` datetime DEFAULT NULL,
  `Estatus` int(11) NOT NULL,
  PRIMARY KEY (`IDProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosencarrito`
--

DROP TABLE IF EXISTS `productosencarrito`;
CREATE TABLE IF NOT EXISTS `productosencarrito` (
  `IDCarrito` int(11) NOT NULL,
  `IDProducto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL DEFAULT 0,
  `FechaCreacion` datetime NOT NULL,
  `FechaModificacion` datetime DEFAULT NULL,
  `Estatus` int(11) NOT NULL,
  KEY `IDCarrito` (`IDCarrito`),
  KEY `IDProducto` (`IDProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `IDUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Clave` varchar(128) NOT NULL,
  PRIMARY KEY (`IDUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IDUsuario`, `Nombre`, `Apellido`, `Email`, `Clave`) VALUES
(1, 'Albert', 'Mendoza Roque', 'a@a.com', 'clave');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carritos`
--
ALTER TABLE `carritos`
  ADD CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`IDProducto`) REFERENCES `productos` (`IDProducto`);

--
-- Filtros para la tabla `productosencarrito`
--
ALTER TABLE `productosencarrito`
  ADD CONSTRAINT `productosencarrito_ibfk_1` FOREIGN KEY (`IDCarrito`) REFERENCES `carritos` (`IDCarrito`),
  ADD CONSTRAINT `productosencarrito_ibfk_2` FOREIGN KEY (`IDProducto`) REFERENCES `productos` (`IDProducto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
