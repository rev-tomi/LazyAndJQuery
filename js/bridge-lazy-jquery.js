var bridge = function(jq) {
  return {
    'get': function(n) {
      (n && n > 0 && n < jq.length()) ? jq.eq(n) : undefined;
    },
    'length': function() {
      return jq.length();
    }
  };
};
