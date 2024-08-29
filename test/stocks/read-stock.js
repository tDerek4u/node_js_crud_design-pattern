const axios = require('axios');

axios.get("http://127.0.0.1:5000/api/v1/stocks/index" , {
    params: {
      page: 1,
      perPage: 10,
      search: ""
    }
}).then((response) => {
    console.log(response.data);
}).catch((err) => {
    console.log(err);
});