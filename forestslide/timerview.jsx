class TimerView extends React.Component {
  constructor() {
    this.state = {beginDate: null, date: null};
  }

  componentDidMount() {
    //console.log("TimerView componentDidMount");
    this.setState({beginDate: new Date()});
    this.timer = setInterval(this.tick.bind(this), 100);
 }

  componentWillUnmount() {
    //console.log("TimerView componentDidWillMount");
    clearInterval(this.timer);
  }

  startOnClick(e) {
    //console.log("TimerView startOnClick");
    //this.setState({beginDate: new Date()});
    //this.timer = setInterval(this.tick.bind(this), 100);
  }

  stopOnClick(e) {
    //console.log("TimerView stopOnClick");
    clearInterval(this.timer);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;

    var begin = "";

    if (this.state.beginDate) {
      begin = this.state.beginDate.getTime();
    }

    var current = "";
    
    if (this.state.date) {
      current = this.state.date.getTime();
    }

    var diff = "";
    
    if (this.state.beginDate && this.state.date) {
      var currentSec = Math.floor((this.state.date.getTime() - this.state.beginDate.getTime()) / sec);
      var currentMin = Math.floor(currentSec / 60);
      currentSec = currentSec - (currentMin * 60);
      diff = currentMin + "m" + currentSec + "s";
    }

    var bodyWidthWithPx = $("#slideview").css("width");
    var bodyWidth = parseInt(bodyWidthWithPx.replace("px", ""));

    // set icon.x

    var iconWidth = 50;
    var limitSec = 300;
    var paddingLeft = 5;
    var paddingRight = 5;
    var oneStep = (bodyWidth - iconWidth - paddingLeft - paddingRight) / limitSec;

    if (isNaN(oneStep) || oneStep <= 0) {
      oneStep = 1;
    }

    var newX = Math.floor(((currentMin * 60) + currentSec) * oneStep);

    if (bodyWidth - iconWidth < newX) {
      newX = bodyWidth - iconWidth;
    }
    //console.log("oneStep:" + oneStep + ", bodyWidth:" + bodyWidth + ", newX:" + newX);
    var iconStyle = {
      container: {
        left: newX,
        position: "relative"
      }
    };

    var timerStyle = {
      container: {
        borderStyle: "dotted",
        borderWidth: 1
      }
    };
/*
           <div>
            <button disabled type="button" onClick={this.startOnClick.bind(this)}>start</button>
            <button type="button" onClick={this.stopOnClick.bind(this)}>stop</button>
          </div>
 */
    return (
        <div style={timerStyle.container}>
         <p>progression:{diff}</p>
          <div>
            <img src="./forestslide/hoge.gif" style={iconStyle.container} />
          </div>
        </div>
    );
  }
}

