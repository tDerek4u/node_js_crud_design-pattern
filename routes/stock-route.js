const express = require('express');
const stockRouter = express.Router();
const stockcontroller = require('../controller/stockcontroller');

stockRouter.get('/stocks/index', stockcontroller.index);
stockRouter.post('/stock/store', stockcontroller.store);
stockRouter.get('/stock/:id' , stockcontroller.getStockById);
stockRouter.put('/stock/:id' , stockcontroller.update);
stockRouter.delete('/stock/:id' , stockcontroller.deleteStock);

module.exports = stockRouter;