var keyevent = (function() {
  this.counter = 1;
  var exports = {};
  exports.keydown = function(event) {
    var key = event.keyCode;
    var left = 37;
    var right = 39;
    var max = maxPage; // maxPage on global(define app.jsx

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
          React.render(
            <div>
              <div style={hogeStyle.container}>
                <SlideView src={data} maxPage={max} currentPage={counter} />
              </div>
              <TimerView />
            </div>
            , document.getElementById("slideview")
          );
        }
      );
    }
    else if (key == right) {
      if (counter < max) {
        counter++;
      }

      // read md file
      $.ajax(
        {"url": "md/page" + counter + ".md"}
      ).success(
        function(data) {
          React.render(
            <div>
              <div style={hogeStyle.container}>
                <SlideView src={data} maxPage={max} currentPage={counter} />
              </div>
              <TimerView />
            </div>
            , document.getElementById("slideview")
          );
        }
      );
   }
  };

  return exports;
})();

$(window).keydown(keyevent.keydown);

