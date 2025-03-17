const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({hola: 'Hola Mundo'});
})

module.exports = router;