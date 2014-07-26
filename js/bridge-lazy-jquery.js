var LazyJQueryBridge = function(jq) {
  return {
    'get': function(n) {
      return jq.eq(n);
    },
    'length': jq.length
  };
};

$(document).ready(function() {
  var ll = List.Lazy(LazyJQueryBridge($("li")));
  ll.filter(function(jq) {
    return jq.text().indexOf("Alice") > -1;
  }).each(function(jq) {
    jq.addClass('faded');
  });
});
