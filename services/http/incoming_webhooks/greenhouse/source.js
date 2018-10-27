exports = function(payload) {
  const mongodb = context.services.get("mongodb-atlas");
  const greenhouse = mongodb.db("jobs").collection("greenhouse");
  var queryTitle = payload.query.title || '';
  return greenhouse.find({title: BSON.BSONRegExp(queryTitle, "i")}).toArray();
};