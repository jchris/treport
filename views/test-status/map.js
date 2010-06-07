function(doc) {
doc.tests.forEach(function(t) {
  emit([t.name, t.status], doc.node.version);
});
}