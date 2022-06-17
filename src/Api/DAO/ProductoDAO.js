//importamos el Modelo
import ProductoModel from "../models/ProductoModel.js"
import ImagenModel from "../models/ImagenModel.js"
//importamos la Conexion
import Conexion from "../Conexion/Conexion.js"

let SqlQuery = "SELECT IDProducto, Descripcion, CantidadRestante, Costo, Precio, Descuento, QRCode, FechaCreacion, FechaModificacion, Estatus FROM productos "
let SqlQueryImagen = "SELECT `IDImagen`, `IDProducto`, `Nombre`, `FechaCreacion` FROM `imagenes` "

//** Métodos para el CRUD **/

//obtiene una instancia de un modelo a partir de un registro de una tabla de base de datos
function getInstancia(fila) {
    ProductoModel.IDProducto = fila.IDProducto
    ProductoModel.Descripcion = fila.Descripcion
    ProductoModel.CantidadRestante = fila.CantidadRestante
    ProductoModel.Costo = fila.Costo
    ProductoModel.Precio = fila.Precio
    ProductoModel.Descuento = fila.Descuento
    ProductoModel.QRCode = fila.QRCode
    ProductoModel.FechaCreacion = fila.FechaCreacion
    ProductoModel.FechaModificacion = fila.FechaModificacion
    ProductoModel.Estatus = fila.Estatus
    if (ProductoModel.IDProducto > 0) {
        ProductoModel.Imagenes = listarImagenes(ProductoModel.IDProducto)
    }
    return ProductoModel
}

//guardar datos
export const guardar = async (req, res) => {
    const ProductoModel = req.body
    if (ProductoModel.IDProducto == 0) {
        insertar(ProductoModel, res)
    } else {
        modificar(ProductoModel, res)
    }
}

//Crear un registro
async function insertar(productoModel, res) {
	const values = [
        productoModel.Descripcion,
        productoModel.CantidadRestante,
        productoModel.Costo,
        productoModel.Precio,
        productoModel.Descuento,
        productoModel.QRCode,
        productoModel.FechaCreacion,
        productoModel.FechaModificacion,
        productoModel.Estatus
    ]
    await Conexion.query("INSERT INTO productos (Descripcion, CantidadRestante, Costo, Precio, Descuento, QRCode, FechaCreacion, FechaModificacion, Estatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", values,
        (err, result) => {
            res.json({ Success: (!err && result.affectedRows > 0), MensajeError: err })
        }
    )
}

//Actualizar un registro
async function modificar(productoModel, res) {
	const values = [
        productoModel.Descripcion,
        productoModel.CantidadRestante,
        productoModel.Costo,
        productoModel.Precio,
        productoModel.Descuento,
        productoModel.QRCode,
        productoModel.FechaCreacion,
        productoModel.FechaModificacion,
        productoModel.Estatus,
        productoModel.IDProducto
    ]
    await Conexion.query("UPDATE productos SET Descripcion=?, CantidadRestante=?, Costo=?, Precio=?, Descuento=?, QRCode=?, FechaCreacion=?, FechaModificacion=?, Estatus=? WHERE IDProducto=?", values,
        (err, result) => {
            res.json({ Success: (!err && result.affectedRows > 0), MensajeError: err })
        }
    )
}

//Mostrar todos los registros
export const listar = (req, res) => {
    Conexion.query(SqlQuery, (err, result) => {
        if (err || result.length == 0) {
            res.json({ Data: null, MensajeError: err })
        } else {
            let data = new Array()
            for (let i = 0; i < result.length; i++) {
                let fila = result[i];
                data.push(Object.assign({}, getInstancia(fila)))
            }
            res.json({ Data: data, MensajeError: err })
        }
    })
}

//Mostrar un registro
export const buscar = async (req, res) => {
    const { id } = req.params
	const values = [id]
    await Conexion.query(SqlQuery + " WHERE IDProducto = ? ", values, (err, result) => {
        if (err || result.length == 0) {
            res.json({ Data: null, MensajeError: err })
        } else {
            let data = getInstancia(result[0])
            res.json({ Data: data, MensajeError: err })
        }
    })
}

//Eliminar un registro
export const eliminar = async (req, res) => {
    const ProductoModel = req.params
	const values = [ProductoModel.IDProducto]
    await Conexion.query("DELETE FROM productos WHERE IDProducto=? ", values,
        (err, result) => {
            res.json({ Success: (!err && result.affectedRows > 0), MensajeError: err })
        }
    )
}





//obtiene una instancia de un modelo a partir de un registro de una tabla de base de datos
function getInstanciaImagen(resultSet) {
    ImagenModel.IDImagen = resultSet.IDImagen
    ImagenModel.IDProducto = resultSet.IDProducto
    ImagenModel.Nombre = resultSet.Nombre
    ImagenModel.FechaCreacion = resultSet.FechaCreacion
    return ImagenModel
}

//guardar datos
export const guardarImagen = async (req, res) => {
    const ImagenModel = req.body
    if (ImagenModel.IDImagen == 0) {
        insertarImagen(ImagenModel, res)
    } else {
        modificarImagen(ImagenModel, res)
    }
}

//Crear un registro
async function insertarImagen(imagenModel, res) {
	const values = [
        imagenModel.IDProducto,
        imagenModel.Nombre,
        imagenModel.FechaCreacion
    ]
    await Conexion.query("INSERT INTO imagenes (IDProducto, Nombre, FechaCreacion) VALUES (?, ?, ?)", values,
        (err, result) => {
            res.json({ Success: (!err && result.affectedRows > 0), MensajeError: err })
        }
    )
}

//Actualizar un registro
async function modificarImagen(imagenModel, res) {
	const values = [
        imagenModel.Nombre,
        imagenModel.IDImagen,
    ]
    await Conexion.query("UPDATE imagenes SET Nombre = ? WHERE IDImagen = ?", values,
        (err, result) => {
            res.json({ Success: (!err && result.affectedRows > 0), MensajeError: err })
        }
    )
}

//Mostrar todos los registros
async function listarImagenes(id) {
    let data = []
	const values = [id]
    await Conexion.query(SqlQueryImagen + " WHERE IDProducto = " + id,
     id, (err, result) => {
        if (!err && result.length > 0) {
            result.forEach(fila => {
                data.push(fila)
            })
        }
    })
    return data
}

//Mostrar un registro
export const buscarImagen = async (req, res) => {
    const { id } = req.params
	const values = [id]
    await Conexion.query(SqlQueryImagen + " WHERE IDImagen = ? ", values, (err, result) => {
        if (err || result.length == 0) {
            res.json({ Data: null, MensajeError: err })
        } else {
            let data = getInstanciaImagen(result[0])
            res.json({ Data: data, MensajeError: err })
        }
    })
}

//Eliminar un registro
export const eliminarImagen = async (req, res) => {
    const ImagenModel = req.params
	const values = [ImagenModel.IDImagen]
    await Conexion.query("DELETE FROM imagens WHERE IDImagen=? ", values,
        (err, result) => {
            res.json({ Success: (!err && result.affectedRows > 0), MensajeError: err })
        }
    )
}