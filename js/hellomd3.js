var hellomd3 = React.createClass({
  getInitialState() {
    return {};
  },
  componentDidMount() {
    console.log(this.props.src);
  },
  componentWillUnmount() {
  },
  render() {
    return React.createElement('div', {dangerouslySetInnerHTML: {__html: marked(this.props.src)}}); //null, marked(this.props.src));
  }
});

React.render(React.createElement(hellomd3, {src: "#now loading..."}), document.getElementById('slideview'));

