const stockRepository = require('../repositories/stockrepository');


class StockService {
    async getStocks(page = 1, perPage = 10, search = '') {
        try {
            const filter = {};
            if (search) {
                filter["$text"] = { $search: search };
            }

            const offset = (page - 1) * perPage;
            return await stockRepository.find(filter, perPage, offset);
        } catch (error) {
            throw new Error(`Error fetching stocks: ${error.message}`);
        }
    }

    async createStock(data) {
        try {
            const stock = new Stock(data);
            return stock.save();
        } catch (error) {
            throw new Error(`Error creating stock: ${error.message}`);
        }
    }

    async getStockById(id,res) {
        try {
            const stock = await stockRepository.findById(id);
            if (!stock) {
                res.status(404).json({
                    code: 404,
                    message: "Stock not found."
                });
            }
            return stock;
        } catch (error) {
            throw new Error(`Error fetching stock by ID: ${error.message}`);
        }
    }

    async updateStock(id, data,res) {
        try {
            const stock = await stockRepository.findById(id);

            if (!stock) {
                return res.status(404).json({
                    code: 404,
                    message: "Stock not found."
                });
            }

            Object.assign(stock, data);
            return stock.save();
        } catch (error) {
            throw new Error(`Error updating stock: ${error.message}`);
        }
    }

    async deleteStock(id,res) {
        try {
            const stock = await stockRepository.findById(id);
            
            
            if (!stock) {
                res.status(404).json({
                    code: 404,
                    message: "Stock not found."
                });
            }

            return await stock.remove();
        } catch (error) {
            throw new Error(`Error deleting stock: ${error.message}`);
        }
    }
}

module.exports = new StockService();
