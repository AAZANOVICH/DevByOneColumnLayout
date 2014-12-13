var nodesInitialized = false;

$.fn.exists = function () {
    return this.length !== 0;
}

function modifyItemNodeImpl(jqNode) {
   jqNode.css( "width", "100%");
    var imageItem = jqNode.find(".item-img");
    if(imageItem.exists()) {
         var itemTitle = jqNode.find("h3");
        itemTitle.remove();
        jqNode.find(".item-img").before(itemTitle);
    }
}

var blog = $(".wrapper-block-tabs-body");

function modifyItemNodes() {
   blog.find(".item-node").each(function(){
      modifyItemNodeImpl($(this));
  });
}

function fireResize() {
  var resizeEvent = document.createEvent('Event');
  resizeEvent.initEvent("resize", true, true);
  window.dispatchEvent(resizeEvent);
}

blog.find(".lists-item-node").toggleClass("lists-item-node");

modifyItemNodes();
nodesInitialized = true;


$(".tab").bind("click", function() {
   fireResize();
});


blog.arrive('.item-node', function(){
    if(nodesInitialized) {
      modifyItemNodeImpl($(this));
    }
});

fireResize();







