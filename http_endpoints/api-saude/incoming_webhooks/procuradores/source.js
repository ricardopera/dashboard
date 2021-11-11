// This function is the webhook's request handler.
exports = async function(payload, response) {

  const collection = context.services.get("mongodb-atlas").db("procs-tudo-3").collection("medicamento");
  const procuradores = await collection.distinct("nome");
  
  return procuradores;

};