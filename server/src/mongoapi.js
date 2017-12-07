var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');

var buildTodo = (info) => {
    return new Todo(info);
};

var addTodo = (todo) => {
    return todo.save();
};
var saveTodo = (info, callback) => {
    if (info.text) {
        var todo = new Todo({
            text: info.text
        });
        todo.save().then(doc => {
            callback(null, doc);

        }).catch(e => {
            callback(e, {});
        })
    } else {
        callback(new Error('informacion Incorrecta'), {});
    }
};

var getTodos = (callback) => {
    Todo.find().then((todos) => {
        callback(null, todos);
    }).catch(e => {
        callback(e, {});
    });
}

module.exports = {
    saveTodo,
    getTodos
};