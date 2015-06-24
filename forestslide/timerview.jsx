class TimerView extends React.Component {
  constructor() {
    this.state = {beginDate: null, date: null};
  }

  componentDidMount() {
    console.log("TimerView componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startOnClick(e) {
    console.log("TimerView startOnClick");
    this.setState({beginDate: new Date()});
    this.timer = setInterval(this.tick.bind(this), 100);
  }

  stopOnClick(e) {
    console.log("TimerView stopOnClick");
    this.tick();
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

    return (
        <div>
          <div>
            <button type="button" onClick={this.startOnClick.bind(this)}>start</button>
            <button type="button" onClick={this.stopOnClick.bind(this)}>stop</button>
          </div>
          <p>progression:{diff}</p>
        </div>
    );
  }
}

