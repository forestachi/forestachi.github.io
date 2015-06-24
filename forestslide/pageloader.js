class PageLoader {
  constructor() {
  }

  load(pagenumber) {
    var def = $.Deferred();
    $.ajax({"error": def.reject, "success": def.resolve, "url": "md/page" + pagenumber + ".md"});
    return def.promise();
  }
}

