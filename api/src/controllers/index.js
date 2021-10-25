class ModelCrud {
    constructor(model) {
        this.model = model;
    }
    getAll = async (req, res, next) => {
        const {name} = req.query;
        if(name){
            const filter = await this.model.findAll({
                where:{
                    name:name
                }
            });
            return res.status(200).json(filter.slice(0,15));
        }
        this.model.findAll() 
            .then(results => res.status(200).json(results))
            .catch(error => next(error));
    }
    getById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const result = await this.model.findByPk(id);
            res.status(200).json(result);
        }catch (error) {
            next(error);
        }

    }
    insert = (req, res, next) => {
        const object = {
            ...req.body
        }
        return this.model.create({
            ...object
        })
            .then(object => res.status(200).json(object))
            .catch(error => next(error));
    }
}
module.exports = ModelCrud;
