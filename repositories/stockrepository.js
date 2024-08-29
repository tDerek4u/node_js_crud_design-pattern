// repositories/stockrepository.js
const Stock = require('../models/Stock');

class StockRepository {
    async find(filter, perPage, offset) {
        const stocks = await Stock.find(filter).limit(perPage).skip(offset);
        const total = await Stock.countDocuments(filter); // Corrected count method
        return { stocks, total };
    }

    async findById(id) {
        return await Stock.findById(id);
    }
    
    async create(data) {
        const stock = new Stock(data);
        return stock.save();
    }
    
    async remove(stock) {
        return stock.remove();
    }
}

module.exports = new StockRepository();
