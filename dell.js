const { dell } = require("./dell.led");
if(document.getElementById('button').clicked == true)
{
    dell.led.changeColor(dell.led.colors.BLUE);
}