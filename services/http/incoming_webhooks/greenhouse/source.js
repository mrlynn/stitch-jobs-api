exports = function(payload) {
  const mongodb = context.services.get("mongodb-atlas");
  const greenhouse = mongodb.db("jobs").collection("greenhouse");
  var queryTitle = payload.query.title || '';
  var queryLocation = payload.query.location || '';
  return {"jobs": greenhouse.find({$and: [{title: BSON.BSONRegExp(queryTitle, "i")}, {"location.name": BSON.BSONRegExp(queryLocation, "i")}]}).toArray()};
};