const connection = require('../database/connection');
module.exports = {
    async create(req , res) {
        const { id, email, password } = req.body;


        const ong = await connection('ongs')
        .where({
            'email': email,
            'password': password
        })
        .select('name')
        .first();

        if (!ong) {
            return res.status(400).json({error: 'No ONG found with this ID or this password was incorrect!'});
        }

        return res.json(ong);
    }
}