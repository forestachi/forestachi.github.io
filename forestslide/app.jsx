var currentPage = 1;
var maxPage = 11;

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

