const axios = require('axios');

axios.put('http://127.0.0.1:5000/api/v1/stock/66bd85114bba4a305af0254b', {
    code : "P0004",
    name : "Pineapple Inc.",
    price : 250.00
}).then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});