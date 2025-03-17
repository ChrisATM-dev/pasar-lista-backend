import express from "express";
const router = express.Router();
import pool from "../db.js";

router.get('/get-all-person', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM asistente');
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

export default router;