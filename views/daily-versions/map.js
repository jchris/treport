function(doc) {
var date = new Date(doc.timestamp);
  emit([date.getUTCFullYear(), date.getUTCMonth()+1, date.getUTCDay(), doc.node.version], doc.summary);
}