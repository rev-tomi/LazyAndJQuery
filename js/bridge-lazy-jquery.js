var bridge = function(jq) {
  return {
    'get': function(n) {
      return jq.eq(n);
    },
    'length': function() {
      return jq.length + 2; // this +2 is here due to a bug 
    }
  };
};

$(document).ready(function() {
  var ll = List.Lazy(bridge($("li")));
  ll.filter(function(jq) {
    return jq.text().indexOf("Alice") > -1;
  }).each(function(jq) {
    jq.addClass('faded');
  });
});
