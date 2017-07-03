var MongoClient = require ('mongodb').MongoClient;

//Connect to my Local Mongo DB
MongoClient.connect("mongodb://localhost:27017/DLLLocalTCP", function (err, db)
{
    if (err) { 
        console.log('Unable to connect to the mongoDB server. Error:', err);
        throw err; }
    console.log ("We Connected to Local mongodb."); 


    db.collection('RTM_Msgs').count(function (err, count) {
        if (err) throw err;
        console.log('Total Rows:' + count);    });
       
    db.collection('RTM_Msgs', function (err, collection)   {
        if (err) { 
          console.log('Unable to access collection. Error:', err); 
          throw err; }   
        console.log ("We are able to access collection: RTM_Msgs.");  
       // collection.find({
       // "VehicleInventoryBOD.DataArea.VehicleInventory.UnitId": "121038970" }).toArray(
       //  function(err, result)
       collection.find().toArray(function(err, results)   {
       if (err) {
               console.log('Unable to find any data in collection. Error:', err);
               throw err; }
       console.log (results);            
       //  db.close();
      });      

    });
     
 });