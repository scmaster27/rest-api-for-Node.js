const Todo = require('./todo.model');

const create = (req, res) => {
    Todo.findOne({})
    .sort({id: -1})
    .exec((err, todo) => {
        let = lastId = todo ? todo.id : 0;
        const { title, content } = 
            JSON.parse(JSON.stringify(req.body));
        const newTodo = new Todo({
            title, content
        });
        newTodo.date = new Date();
        newTodo.id = lastId + 1;
        newTodo.save((err, todo) => {
            res.json(lastId + 1);
        });
    });
};

const index = (req, res) => {
    Todo.find({})
    .sort({id: -1})
    .exec((err, todos) => {
        res.json(todos);
    });
};

const show = ((req, res) => {
    Todo.findOne({id: req.params.id})
    .exec(function(err, todo){
        res.json(todo);
    });
});

const update = (req, res) => {
    const { title, content } = 
        JSON.parse(JSON.stringify(req.body));
    Todo.findOneAndUpdate({id: req.params.id}, { title, content })
    .exec((err, todo) => {
        res.json({
            'statusCode': 200,
            'body': 'OK'
        });
    });
};

const destroy = (req, res) => {
    Todo.findOneAndRemove({id: req.params.id})
    .exec(function(err, todo){
        res.json({
            'statusCode': 200,
            'body': 'OK'
        });
    });
};

module.exports = {
    create, index, show, update, destroy
};
