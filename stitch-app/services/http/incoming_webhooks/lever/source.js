exports = function(payload) {
  const mongodb = context.services.get("mongodb-atlas");
  const lever = mongodb.db("jobs").collection("lever");
  var queryTitle = payload.query.title || '';
  var queryLocation = payload.query.location || '';
  return {"jobs": lever.find({$and: [{text: BSON.BSONRegExp(queryTitle, "i")}, {"categories.location": BSON.BSONRegExp(queryLocation, "i")}]}).toArray()};
};