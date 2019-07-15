const mysql = require('mysql');
const inquire = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

var initConnect = function(){
    connection.connect(function (err) {
        if (err) throw err
        startBamazon()
    })
}

var startBamazon = function () {

    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err

        Object.keys(res).forEach(function (key) {
            var row = res[key];
            console.log('ID: ' + row.id + ' || ' + row.product_name + '|| Department: ' + row.department_name + ' || Price: ' + row.price + ' || Stock: ' + row.stock)
        });
        // for (i=0; i<res.length;i++){
        //     console.log(res[i])
        // }
        placeOrder()
    })
}
var placeOrder = function () {

    inquire.prompt([{
            type: 'number',
            name: 'id',
            message: 'Type the id of the product you would like to purchase!'
        },
        {
            type: 'number',
            name: 'stock',
            message: 'Please type how many you would like to buy!'
        }
    ]).then(function (answers) {
        connection.query("SELECT stock FROM products WHERE id= ? ", [answers.id], function (error, results) {
            var newStock = parseInt(results[0].stock) - parseInt(answers.stock);
            if (newStock < 1) {
                console.log('Not enough quantity on hand for this purchase.')
                connection.end()
            } else {
                //console.log(parseInt(newStock))
                connection.query("UPDATE products SET stock= ? WHERE id= ? ", [newStock, answers.id], function (error, row) {
                    console.log('Item purchased!')
                    connection.end()
                })
            }
        })
    }
    )
}
initConnect()