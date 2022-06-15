import express from 'express'
import { guardar, listar, buscar, eliminar } from '../DAO/ProductoDAO.js'
const router = express.Router()

router.get('/', listar)
router.get('/:id', buscar)
router.put('/', guardar)
router.delete('/:id', eliminar)

export default router
