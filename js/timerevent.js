var timerEvent = React.createClass({
  getInitialState() {
    return {beginDate: new Date(), date: new Date()};
  },
  componentDidMount() {
    this.timer = setInterval(this.tick, 100);
  },
  componentWillUnmount() {
    clearInterval(this.timer);
  },
  tick() {
    this.setState({date: new Date()});
  },
  render() {
    var diff = this.state.date.getTime() - this.state.beginDate.getTime();
    
    return (
      React.createElement('div', null, 
        React.createElement('p', null, "begin:" + this.state.beginDate),
        React.createElement('p', null, "current:" + this.state.date)
      )
    );
  }
});

React.render(React.createElement(timerEvent, null), document.getElementById('timerview'));

