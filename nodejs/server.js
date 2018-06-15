'use strict';

const express = require('express');

// Constants
const PORT = 13061;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


var mongodb = require('mongodb');
var client = mongodb.MongoClient;

var uri = "mongodb://mongotest/test";

/* GET home page. */
app.get('/data', function(req, res, next) {
        client.connect(uri, function (err, db) {
            if (err) return next(err);
        var collection = db.collection('PayRollColl');
        collection.find({}).toArray(function(err, docs) {
                        if (err) return next(err);
                        return res.json(docs);
        });
        });
  
});

