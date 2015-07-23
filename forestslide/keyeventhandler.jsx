class KeyEventHandler {
  constructor(dir) {
    this.counter = 1;
    this.dir = dir;
  }

  keyDownHandler(event) {
    var key = event.keyCode;
    var left = 37;
    var right = 39;
    var max = maxPage; // maxPage on global(define app.jsx

    if (key == left) {
      if (1 < this.counter) {
        this.counter--;
      }

      if (this.counter == 0) {
        return;
      }

      $.ajax(
        {"url": this.dir + "/page" + this.counter + ".md"}
      ).success(
        this.movePage.bind(this)
      );
    }
    else if (key == right) {
      if (this.counter < max) {
        this.counter++;
      }

      // read md file
      $.ajax(
        {"url": this.dir + "/page" + this.counter + ".md"}
      ).success(
        this.movePage.bind(this)
      )
    }
  }

  movePage(data) {
    React.render(
      <div>
        <div style={hogeStyle.container}>
          <SlideView src={data} maxPage={this.max} currentPage={this.counter} />
        </div>
        <TimerView />
      </div>
      , document.getElementById("slideview")
    );
  }
}

