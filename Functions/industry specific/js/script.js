// Preston Cain 5/1/2014 Functions

//Industry Specific

var copyPrompt = function(measurement){
    var unit = prompt("We are calculating the pixels in the desired image.\nPlease enter the "+measurement+":");
    if(unit==""){
	var unit = prompt("You forgot to input the "+measurement+"!");
}
    return unit;
}

//prompt for pixels
var dpi = copyPrompt("dpi");
//prompt for width
var width = copyPrompt("width");
//prompt for height
var height = copyPrompt("height");

//calculate pixels
var pixels = (width*dpi) * (height*dpi);
//if over 5 megapixels show alert, if over 3 megapixels show different alert, if over 1 megapixel show third alert, and if under 1 megapixel show fourth alert
if (pixels >= 5000000){
	result = "You need at least a 5 Megapixel camera to capture this image.\nThere are "+pixels+" pixels in this image";
}else if(pixels >= 3000000){
	result = "You need at least a 3 Megapixel camera to capture this image.\nThere are "+pixels+" pixels in this image";
}else if(pixels >= 1000000){
	result = "You only need a 1 Megapixel camera to capture this image.\nThere are "+pixels+" pixels in this image";
}else{
	result = "You don't need to worry about the resolution of the camera.\nThe image is less than 1 Megapixel\nThere are "+pixels+" pixels in this image";
}
//show the appropriate alert
alert(result);
//log the alert result
console.log(result);