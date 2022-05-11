const fs = require('fs');

const path = require('path').join(require.main.filename, '..', 'data', 'products.json');

// Reads from file and executes callback on either an empty array (if no file exists) or the product list. 
// Using callback to avoid reading assync problems.
const readProductsFromFile = (cb) => {
    fs.readFile(path, (err, fileTextData) => {
    
        if (err) {
            cb([]);
        }
        
        else {
            cb(JSON.parse(fileTextData));
        }    
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
        }

    save() {
        //read from file, add new product, write into file. 
        //TO-DO: Change this logic to 'append'.
        readProductsFromFile(products => {
            products.push(this)
            // TO-DO: error handling.
            fs.writeFile(path, JSON.stringify(products), (err) => console.log(err))
        });
    }

    static listProducts (cb) {
        readProductsFromFile(cb);
    }

};