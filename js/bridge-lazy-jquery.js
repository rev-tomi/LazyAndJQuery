var bridge = function(jq) {
  return {
    'get': function(n) {
      console.log('getting ' + n);
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
    console.log('trying "' + jq.text() + "'");
    return jq.text().indexOf("Alice") > -1;
  }).each(function(jq) {
    console.log(jq.text() + ' contains alice');
    jq.addClass('faded');
  });
});
