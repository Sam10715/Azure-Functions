module.exports = function (context, req) {
    
    var cart = req.body.resource.obj;
    context.log(JSON.stringify(cart))
    var currency=cart.totalPrice.currencyCode;


    if (currency == "USD") {
        context.res = {
            status: 200,
            body: undefined
        };
    }
    else {
        context.res = {
            status: 400,
            body : {
                errors : [{
                    code: "InvalidInput",
                    message: "You can not use EU as Currency."
                }]
            }
        };
    }
    
    context.done();
};