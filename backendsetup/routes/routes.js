const {Router} = require('express');
const { getData, saveData, updateData, deleteData, getSingleData } = require('../controllers/controllers');

const router = Router();

router.get('/',getData);
router.get('/user/:id',getSingleData);
router.post('/save',saveData);
router.put('/update/:id',updateData);
router.delete('/delete/:id',deleteData);

module.exports = router;