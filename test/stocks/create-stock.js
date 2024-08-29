const axios = require('axios');

axios.post("http://127.0.0.1:5000/api/v1/stock/store", {
    code : "P0003",
    name : "WaterMelon Inc.",
    price : 400.00
}).then((response) => {
    console.log(response);
}).catch((err) =>{
    console.log(err);
});