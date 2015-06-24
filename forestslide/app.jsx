var keyevent = (function() {
  this.counter = 1;
  var exports = {};
  exports.keydown = function(event) {
    var key = event.keyCode;
    var left = 37;
    var right = 39;

    if (key == left) {
      if (1 < counter) {
        counter--;
      }

      if (counter == 0) {
        return;
      }

      $.ajax(
        {"url": "md/page" + counter + ".md"}
      ).success(
        function(data) {
          console.log(data);
          React.render(React.createElement(SlideView, {"src": data}), document.getElementById("slideview"));
        }
      );
    }
    else if (key == right) {
      //console.log(event.keyCode);
      var max = 11; // todo parameter or auto check

      if (counter < max) {
        counter++;
      }

      // read md file
      $.ajax(
        {"url": "md/page" + counter + ".md"}
      ).success(
        function(data) {
          console.log(data);
          React.render(React.createElement(SlideView, {"src": data}), document.getElementById("slideview"));
        }
      );
   }

    console.log("key:" + event.keyCode + ", counter:" + counter);
  };

  return exports;
})();

$(window).keydown(keyevent.keydown);

new PageLoader().load(1).done(
  function(data) {
    SlideView.defaultProps = {src: data};
    React.render(
      <SlideView />,
      document.getElementById('slideview')
    );
  }
);

React.render(<TimerView />, document.getElementById('timerview'));

