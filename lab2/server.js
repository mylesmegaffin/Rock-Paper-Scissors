// import the connect package
const connect = require('connect');
const url = require('url');
const http = require('http');
// instantiate the connect application
const app = connect();
console.log('app is runing on http://localhost:3000/');

http.createServer((req, res) => {
    console.log(req.url);

    let queryString = url.parse(req.url, true).query;
    
    //get the values
    let method = queryString.method;
    let x = queryString.x;
    let y = queryString.y

    //calc the val
    calculator(method, x, y);
    //log it to see if working
    console.log(calculator(method, x, y));

    // if method doesnt get the right method
    if(calculator(method, x, y) != 'Error 404'){
        res.write('<h1>' + x + ' ' + method + ' ' + y + ' = ' + calculator(method, x, y) + '</h1>');
    }else{
        res.write('Error \nThere is not method named' + method);
    }

    res.end();
}).listen(3000);

// Calculate function 
function calculator(method, x, y){
    switch (method){
        case "divide":
            return x / y;
            break;
        case "multiply":
            return x * y;
            break;
        case "subtract":
            return x - y;
            break;
        case "add":
            return parseInt(x) + parseInt(y);
            break; 
        default:
            return "Error 404";
    }
}