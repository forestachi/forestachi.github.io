class SlideView extends React.Component {
  constructor() {
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.src);
  }

  componentWillUnmount() {
  }

  render() {
    return <div dangerouslySetInnerHTML={{__html: marked(this.props.src)}}></div>
  }
}

