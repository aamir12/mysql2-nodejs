const express = require('express');
const router = express.Router();
const {getAllProducts,addProduct,updateProduct,deleteProduct} = require('../controllers/productController');
router.route('/').get(getAllProducts).post(addProduct).put(updateProduct);
router.route('/:id').delete(deleteProduct);
module.exports = router;