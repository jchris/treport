function(doc) {
  emit(doc.timestamp, doc.summary);
}