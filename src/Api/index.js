const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))
// const JWT = require('jsonwebtoken')
// const secretWord = 'Samus#Aran'

const credentials = {
	host: 'localhost',
	user: 'quantumswapp_system',
	password: '7oN@W4LtJ31lL_GQ',
	database: 'quantumswapp'
}

app.get('/', (req, res) => {
	res.send('Bienvenido al API de QuantumSwapp!')
})

app.post('/api/login', (req, res) => {
	console.log("############################ Entrada ############################");
	console.log(req.body);
	const { email, password } = req.body
	const values = [email, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM usuarios WHERE Email = ? AND Clave = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			console.log("############################ Salida ############################");
			let output;
			if (result.length > 0) {
				output = result;
				res.status(200).send(output)
			} else {
				output = 'Usuario no existe'
				res.status(400).send(output)
			}
			console.log(output);
			console.log("----------------------------------------------------------------");
		}
	})
	connection.end()
})


app.listen(4000, () => console.log('Servidor iniciado!'))