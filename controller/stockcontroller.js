// controllers/stockcontroller.js
const stockService = require('../service/stockservice');

const index = async (req, res) => {
    try {
        const { page = 1, perPage = 10, search = '' } = req.query;
        const stocks = await stockService.getStocks(parseInt(page), parseInt(perPage), search);
        res.json({ code: 200, data: stocks, message: 'Stocks fetched.' });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

const store = async (req, res) => {
    try {
        const { code, name, price } = req.body;
        const stock = await stockService.createStock({ code, name, price });
        res.status(201).json({ data: stock, message: 'Stock Created.' });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

const getStockById = async (req, res) => {
    try {
        const { id } = req.params;
        const stock = await stockService.getStockById(id,res);
        res.status(200).json({ code: 200, data: stock, message: 'Stock fetched.' });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { code, name, price } = req.body;
        const stock = await stockService.updateStock(id,res, { code, name, price });
        res.status(200).json({ data: stock, message: 'Stock updated.' });
    } catch (error) {
        res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

const deleteStock = async (req, res) => {
    try {
        const { id } = req.params;
        await stockService.deleteStock(id,res);
        res.status(200).json({ code: 200, message: 'Stock deleted.' });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    index,
    store,
    getStockById,
    update,
    deleteStock
};
