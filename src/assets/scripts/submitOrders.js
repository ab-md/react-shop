const submitOrders = (products) =>
    products.map(product => ({
        "product": product['_id'],
        "name": product.name,
        "image": product.image,
        "price": product.price,
        "countInStock": product.countInStock,
        "qty": product.qty
    }))

export { submitOrders };