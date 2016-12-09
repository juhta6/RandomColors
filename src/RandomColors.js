tabris.ui.set("toolbarVisible", false);
var page = new tabris.Page({
  topLevel: true
}).open();
page.on("touchend",function(){tabris.ui.set("displayMode", "fullscreen")}).on("touchstart",function(){tabris.ui.set("displayMode", "fullscreen")});

//---------------------------------------------------------------------------------------------------------------------------

var bag = 1;

var ranColR, ranColG, ranColB, ranCorn, ranTColR, ranTColG, ranTColB, ranRot, ranScal, ranBColR, ranBColG, ranBColB, ranBaColR, ranBaColG, ranBaColB, ranNum;

function colorRandomizer(){
  	ranColR = Math.floor((Math.random() * 255) + 0)
	ranColG = Math.floor((Math.random() * 255) + 0)
	ranColB = Math.floor((Math.random() * 255) + 0)
    ranCorn = Math.floor((Math.random() * 30.5) + 0)
    ranTColR = Math.floor((Math.random() * 255) + 0)
    ranTColG = Math.floor((Math.random() * 255) + 0)
    ranTColB = Math.floor((Math.random() * 255) + 0)
    ranBColR = Math.floor((Math.random() * 255) + 0)
    ranBColG = Math.floor((Math.random() * 255) + 0)
    ranBColB = Math.floor((Math.random() * 255) + 0)
    ranRot = Math.floor((Math.random() * 3)-3)
    ranScal = Math.floor((Math.random() * 1.25) - 0.9)
    ranBaColR = Math.floor((Math.random() * 255) + 0)
    ranBaColG = Math.floor((Math.random() * 255) + 0)
    ranBaColB = Math.floor((Math.random() * 255) + 0)

}

var collectionView = new tabris.CollectionView({
  id: "tab",
  left: 0, top: 0, right: 0, bottom: 0,
  items: createItems(),
  itemHeight: 61,
  columnCount: 6,
  background: "rgb(180,180,180)",
  initializeCell: function(cell) {
    var textView = new tabris.TextView({
      id: "tile",
      top: 1, bottom: 1, left: 1, right: 1,
      font: "bold 17px",
      textColor: "rgb(150,150,150)",
      alignment: "center",
      maxLines: 1,
      highlightOnTouch: true,
      background: "white"
    }).appendTo(cell);
    cell.on("change:item", function(cell, item) {
      textView.set({
        text: item
      });
    }).once("tap", function(widget){
      widget.animate({transform: {scaleX: 0.9, scaleY: 0.9}},{reverse: true, repeat: 5, duration: 500})
  }).on("animationend", function(widget){
    ranNum = Math.floor((Math.random() * 60) + 1)
      textView.set({text: ranNum})
      if (bag == 1){
      	colorRandomizer()
      	widget.animate({transform: {scaleX: ranScal, scaleY: ranScal}},{reverse: true, repeat: 5, duration: 500})
      	widget.set({background: "rgb("+ranColR+","+ranColG+","+ranColB+")", cornerRadius: ranCorn})
      	textView.set({textColor: "rgb("+ranTColR+","+ranTColG+","+ranTColB+")",background: "rgb("+ranBColR+","+ranBColG+","+ranBColB+")"})
        collectionView.set("background", "rgb("+ranBaColR+","+ranBaColG+","+ranBaColB+")")
      	bag = 2
      } else if (bag == 2){
      	colorRandomizer()
      	widget.animate({transform: {scaleX: ranScal, scaleY: ranScal, rotation: ranRot * Math.PI}},{reverse: true, repeat: 7, duration: 500})
      	widget.set({background: "rgb("+ranColR+","+ranColG+","+ranColB+")", cornerRadius: ranCorn})
      	textView.set({textColor: "rgb("+ranTColR+","+ranTColG+","+ranTColB+")",background: "rgb("+ranBColR+","+ranBColG+","+ranBColB+")"})
        collectionView.set("background", "rgb("+ranBaColR+","+ranBaColG+","+ranBaColB+")")
      	bag = 3
      } else if (bag == 3){
        colorRandomizer()
      	widget.animate({transform: {scaleX: ranScal, scaleY: ranScal}},{reverse: true, repeat: 3, duration: 500})
      	widget.set({background: "rgb("+ranColR+","+ranColG+","+ranColB+")", cornerRadius: ranCorn})
      	textView.set({textColor: "rgb("+ranTColR+","+ranTColG+","+ranTColB+")",background: "rgb("+ranBColR+","+ranBColG+","+ranBColB+")"})
        collectionView.set("background", "rgb("+ranBaColR+","+ranBaColG+","+ranBaColB+")")
      	bag = 1
      }
    })
  }
}).appendTo(page);

  
function createItems() {
  var items = [];
  for (var i = 1; i <= 60; i++) {
    items.push(i);
    }
  return items;
}
