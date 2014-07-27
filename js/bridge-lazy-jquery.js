List.Lazy.fromJQuery = function(jq) {
  var adapter = {
    'get': function(n) {
      return jq.eq(n);
    },
    'length': jq.length
  };
  return List.Lazy(adapter);
};

$(document).ready(function() {
  var ll = List.Lazy.fromJQuery($("li"));
  ll.filter(function(jq) {
    return jq.text().indexOf("Alice") > -1;
  }).each(function(jq) {
    jq.addClass('faded');
  });
});
