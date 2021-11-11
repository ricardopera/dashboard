// This function is the webhook's request handler.
exports = async function(payload, response) {

  const collection = context.services.get("mongodb-atlas").db("");
  const procuradores = await collection.distinct("procs-tudo-3.medicamento.nome");
  
  return procuradores;

};