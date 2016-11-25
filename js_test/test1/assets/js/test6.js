
$(function(){

  var $container;
  var $box;
  var xLine;
  var yLine;
  var scale;
  var items;



  function init(){
    $("body").append("<div class='container'></div>");
    $container = $(".container");
    scale = 100;
    xLine = 5;
    yLine = 5;
    items = xLine * yLine;

  }

   function createElements(){
    for(var i=0; i<yLine; i++){
      for(var n=0; n<xLine; n++){
       $container.append("div class='box box"+i+"_"+n+"'></div>");
       var $box =$(".box"+i+"_"+n)
       $box.css({
         "width": scale,
         "height": scale,
         "top": i * scale,
         "left": n * scale,
         "background-color":"#ccc",
         "position":"absolute",
         "border":"solid 1px #000",
         "text-align": "center",
         "font-size": "12px",
         "line-height": scale+"px"
        });
    createElements();
    }
  }
}

init();
})
