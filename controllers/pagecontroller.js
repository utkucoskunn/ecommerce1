

exports.getIndexPage =(req, res) => {

    res.status(200).render('index', {
        page_name: "index",

    });
};

exports.getCartPage =(req, res) => {

    res.status(200).render('cart', {
        page_name: "cart",
    });
};

exports.getCheckoutPage =(req, res) => {

    res.status(200).render('checkout', {
        page_name: "checkout",
    });
};

exports.getProductDetailsPage =(req, res) => {

    res.status(200).render('product-details', {
        page_name: "product-details",
    });
};

exports.getShopPage =(req, res) => {

    res.status(200).render('shop', {
        page_name: "shop",
    });
};