const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (erro, client) => {
    if (erro) {
        return console.log('unable to connect to mongodb');
    }
    console.log('connect to mongodb');


    // to get db in mango3
    const db = client.db('TodoApp');
    // https://github.com/mongodb/node-mongodb-native
    // check this doc https://mongodb.github.io/node-mongodb-native/api-generated/cursor.html
    // http://mongodb.github.io/node-mongodb-native/3.0/api/Collection.html

    // db.collection('Todos').find().toArray().then((docs)=> {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('there is an error, unable to fetch the data');
    // });


    // deleteMany
    // db.collection('Todos').deleteMany({text: 'test'}).then((result)=> {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text: 'lol', completed: true}).then(result => {
    //     console.log(result);
    // });



    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate(
        {
            //_id: new ObjectID('id')
            text: 'eat lunch'
        }, 
        {
            $set: { 
                completed: true
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result)
    });

    // db.close();
});