var currentPage = 1;
var maxPage = 22;
var keyEventHandler = new KeyEventHandler("md");
$(window).keydown(keyEventHandler.keyDownHandler.bind(keyEventHandler));

new PageLoader().load(currentPage).done(
  function(data) {
    React.render(
        <div style={hogeStyle.container}>
        <SlideView maxPage={maxPage} src={data} />
      </div>
     , document.getElementById('slideview')
    );
  }
);

