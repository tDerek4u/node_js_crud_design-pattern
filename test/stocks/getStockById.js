const axios = require('axios');

axios.get('http://127.0.0.1:5000/api/v1/stock/66bd8d2ff6f6d1f171f36200').then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});