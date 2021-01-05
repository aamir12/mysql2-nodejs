const express = require('express');
const enableCORS = require('../middleware/enableCors');
const router = express.Router();
const {getAllProducts,addProduct,updateProduct,deleteProduct} = require('../controllers/productController');
router.use(enableCORS);
router.route('/').get(getAllProducts).post(addProduct).put(updateProduct);
router.route('/:id').delete(deleteProduct);
module.exports = router;