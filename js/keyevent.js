var keyevent = (function() {
  this.counter = 0;
  var exports = {};
  exports.keydown = function(event) {
    var key = event.keyCode;
    var left = 37;
    var right = 39;

    if (key == left) {
      if (0 < counter) {
        counter--;
      }

      if (counter == 0) {
        React.render(React.createElement(hellomd3, {"src": "#now loading..."}), document.getElementById("slideview"));
        return;
      }

      $.ajax(
        {"url": "md/page" + counter + ".md"}
      ).success(
        function(data) {
          console.log(data);
          React.render(React.createElement(hellomd3, {"src": data}), document.getElementById("slideview"));
        }
      );
    }
    else if (key == right) {
      //console.log(event.keyCode);
      var max = 10;

      if (counter < max) {
        counter++;
      }

      // read md file
      $.ajax(
        {"url": "md/page" + counter + ".md"}
      ).success(
        function(data) {
          console.log(data);
          React.render(React.createElement(hellomd3, {"src": data}), document.getElementById("slideview"));
        }
      );
   }

    console.log("key:" + event.keyCode + ", counter:" + counter);
  };

  return exports;
})();

$(window).keydown(keyevent.keydown);

