// Preston Cain 4/10/2014 Expressions

//Industry Specific
var dpi = prompt("We are calculating the pixels in an image.\nPlease enter the dpi:")
var width = prompt("Please enter the width:")
var height = prompt("Please enter the height:")
var pixels = (width*dpi) * (height*dpi)
result = "The pixels in your image is "+pixels
alert(result)
console.log(result)