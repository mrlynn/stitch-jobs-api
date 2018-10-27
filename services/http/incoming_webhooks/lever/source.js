exports = function(payload) {
  const mongodb = context.services.get("mongodb-atlas");
  const lever = mongodb.db("jobs").collection("lever");
  var queryTitle = payload.query.title || '';
  return lever.find({text: BSON.BSONRegExp(queryTitle, "i")}).toArray();
};