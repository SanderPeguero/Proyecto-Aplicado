import mysql from 'mysql'

const Conexion = mysql.createConnection({
	host: 'localhost',
	user: 'quantumswapp_system',
	password: '7oN@W4LtJ31lL_GQ',
	database: 'quantumswapp'
})

export default Conexion