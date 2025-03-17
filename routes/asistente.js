import express from "express";
const router = express.Router();
import pool from "../db.js";

router.get('/get-all-person', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM asistente order by id asc');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

router.post('/add-person', async (req, res) => {
    const {rut, nombre, apellido} = req.body;
    try {
        const result = await pool.query('INSERT INTO asistente (rut, nombre, apellido) VALUES ($1, $2, $3) RETURNING rut, nombre, apellido, confirmado', [rut, nombre, apellido]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al agregar el usuario' });
    }
});

router.patch('/confirm-person', async (req, res) => {
    const {rut} = req.body;
    try {
        const result = await pool.query('UPDATE asistente SET confirmado = true WHERE rut = $1 RETURNING nombre', [rut]);
        res.json({msg: `Se ha confirmado el usuario ${result.rows[0].nombre}`});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al confirmar el usuario' });
    }
});

router.delete('/delete-person', async (req, res) => {
    const {rut} = req.body;
    try {
        const result = await pool.query('DELETE FROM asistente WHERE rut = $1 RETURNING nombre', [rut]);
        res.json({msg: `Se ha eliminado el usuario ${result.rows[0].nombre}`});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

export default router;