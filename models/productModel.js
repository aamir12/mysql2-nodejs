const db = require('../config/db');

exports.getAllProductsMdl = async ()=>{
    const [rows] = await db.query('select * from products');
    return rows;
};

exports.addProductMdl = async (data) => {
    const created  = new Date();
    const updateAt = new Date();
    const [result] = await db.query(
        'INSERT INTO products (name, price, category, image,createdAt,updateAt) VALUES (?, ?, ?,?, ?,?)',
        [data.name, data.price, data.category,data.image,created,updateAt]
      );

    return result;
}

exports.updateProductMdl = async (id,data) => {
    const updateAt = new Date();
    const [result] = await db.query(
        'update products set  name=?, price=?, category=?, image=?,updateAt = ?',
        [data.name, data.price, data.category,data.image,updateAt]
      );

    return result;
}

exports.deleteProductMdl = async (id) => {
    const updateAt = new Date();
    const [result] = await db.query(
        'delete from products where id=?',
        [id]
      );

    return result;
}

