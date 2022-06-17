import express from 'express'
import { Create, List, Search, Delete } from '../DAO/UserDAO.js'

const router = express.Router()

router.post('/login', (req, res) => {res.json({Respuesta: "Sander debe implementar una funcion aqui!"})})

// router.get('/', List)
router.get('/:id', Search)
router.put('/', Create)
router.delete('/:id', Delete)


export default router
