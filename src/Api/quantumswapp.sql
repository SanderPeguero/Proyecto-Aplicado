-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-06-2022 a las 19:08:11
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritos`
--

use quantumswap;
CREATE TABLE `carritos` (
  `IDCarrito` int(11) NOT NULL,
  `IDUsuario` int(11) NOT NULL,
  `Monto` double NOT NULL DEFAULT 0,
  `FechaCreacion` datetime NOT NULL,
  `FechaModificacion` datetime DEFAULT NULL,
  `Estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `IDImagen` int(11) NOT NULL,
  `IDProducto` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `FechaCreacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`IDImagen`, `IDProducto`, `Nombre`, `FechaCreacion`) VALUES
(1, 1, 'Imagen1', '2022-06-17 12:35:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `IDProducto` int(11) NOT NULL,
  `Descripcion` varchar(1024) DEFAULT NULL,
  `CantidadRestante` int(11) DEFAULT 0,
  `Costo` double DEFAULT 0,
  `Precio` double DEFAULT 0,
  `Descuento` double DEFAULT 0,
  `QRCode` varchar(200) DEFAULT NULL,
  `FechaCreacion` datetime DEFAULT NULL,
  `FechaModificacion` datetime DEFAULT NULL,
  `Estatus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`IDProducto`, `Descripcion`, `CantidadRestante`, `Costo`, `Precio`, `Descuento`, `QRCode`, `FechaCreacion`, `FechaModificacion`, `Estatus`) VALUES
(1, 'Lentes', 0, 0, 500, 0, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80', '2022-06-11 09:23:45', NULL, NULL),
(2, 'GameBoy Color', 0, 0, 500, 0, 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80', '2022-06-11 13:23:45', NULL, NULL),
(3, 'Reloj', 0, 0, 500, 0, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80', '2022-06-11 13:23:45', NULL, NULL),
(4, 'Headset', 0, 0, 500, 0, 'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80', '2022-06-11 13:23:45', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosencarrito`
--

CREATE TABLE `productosencarrito` (
  `IDCarrito` int(11) NOT NULL,
  `IDProducto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL DEFAULT 0,
  `FechaCreacion` datetime NOT NULL,
  `FechaModificacion` datetime DEFAULT NULL,
  `Estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellido` varchar(30) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Clave` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IDUsuario`, `Nombre`, `Apellido`, `Email`, `Clave`) VALUES
(1, 'Albert', 'Mendoza Roque', 'a@a.com', 'clave'),
(2, 'Albert', 'Mendoza', 'albert@gmail.com', 'clave'),
(3, 'Jose Alberto', 'Gonzalez', 'josealbertogonzales@gmail.com', 'clave');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`IDCarrito`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`IDImagen`),
  ADD KEY `IDProducto` (`IDProducto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`IDProducto`);

--
-- Indices de la tabla `productosencarrito`
--
ALTER TABLE `productosencarrito`
  ADD KEY `IDCarrito` (`IDCarrito`),
  ADD KEY `IDProducto` (`IDProducto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carritos`
--
ALTER TABLE `carritos`
  MODIFY `IDCarrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `IDImagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IDProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
