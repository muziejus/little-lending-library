//= require jquery
//= require bootstrap
//= require leaflet


function recenter(lat, lon){
  map.panTo([lat, lon]);
};

function makeMarker(coordinate) {
  return L.circleMarker(coordinate, {
    color: color
  });
};

function addToMap(layer){
  if(map.hasLayer(layer)) {
    alert("has layer!");
    $(this).removeClass('selected');
    map.removeLayer(layer);
  } else {
    console.log(layer);
    map.addLayer(layer);
    $(this).addClass('selected');
  }
};

function resetColor(className){
  $(className).css('color', '#337AB7');
};

function getRandomColor() {
  var color = '#';
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 170);
    var hex = num.toString(16);
    if(hex.length === 1){
      hex = "0" + hex;
    }
    color += hex;
  }
  return color;
}

$('.layer-button').click(function(event){
  alert("button clicked");
  // event.preventDefault();
  // if(map.hasLayer(layername)) {
  //   $(this).removeClass('selected');
  //   map.removeLayer(layername);
  // } else {
  //   map.addLayer(layername)
  //   $(this).addClass('selected');
  // }
});
