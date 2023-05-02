const { Router } = require('express');
const router = Router();
const Controller = require('../controllers/controller');



router.post('/restaurantes', Controller.add);
router.get('/restaurantes', Controller.list);
router.get('/restaurantes/:id', Controller.show);
router.put('/restaurantes/:id', Controller.update);
router.delete('/restaurantes/:id', Controller.delete);


module.exports = router;