class SlideView extends React.Component {
  constructor() {
    this.state = {};
  }

  componentDidMount() {
    //console.log(this.props.src);
  }

  componentWillUnmount() {
  }

  render() {
    var bodyWidthWithPx = $("#slideview").css("width");
    var bodyWidth = parseInt(bodyWidthWithPx.replace("px", ""));
    var iconWidth = 50;
    var paddingLeft = 5;
    var paddingRight = 5;
    var oneStep = (bodyWidth - paddingLeft - paddingRight) / this.props.maxPage;
    var newX = 1;

    if (1 < this.props.currentPage) {
      newX = (this.props.currentPage - 1) * oneStep; // todo with padding-left and padding-right
    }

    var pageIconStyle = {
      container: {
        left: newX,
        position: "relative"
      }
    };

    var mainStyle = {
      container: {
          height: 460
      }
    };

    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: marked(this.props.src)}} style={mainStyle.container} />
            <hr />
            <div>
                <img src="./forestslide/hoge.gif" style={pageIconStyle.container} />
            </div>
        </div>
    );
  }
}

SlideView.defaultProps = {currentPage: 1, maxPage: 10};

