function (newDoc, oldDoc, userCtx) {
  if (userCtx.roles.indexOf('_admin') == -1) {
    // admin can edit anything, only check when not admin...
    if (oldDoc) {
      throw({forbidden : "Test reports may not be altered."});
    }
  }
};
