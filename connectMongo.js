var MongoClient = require ('mongodb').MongoClient;

var Promise = require('rsvp').Promise;

module.exports = {
   FindinCollections: function() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect('mongodb://localhost:27017/DLLLocalTCP', function (err, db) {
            if (err) {
                reject(err);
            } else {
                resolve (db);
            }
        })
    }).then (function(db) {
      return new Promise(function(resolve, reject) {
          var collection =  db.collection('RTM_Msgs');  
          collection.count(function (err, count) {
         /* collection.find().toArray(function(err, items) {*/
          if (err) {
                reject(err);
            } else {  
                //console.log(count);
                resolve (count) ; 
            }
          });
       });
    });
   }
};  
    
    
    
