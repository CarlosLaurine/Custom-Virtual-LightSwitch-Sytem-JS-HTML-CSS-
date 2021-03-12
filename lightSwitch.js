/**
 * JS - Flex Fuel Calculator
 * @author Carlos Pinho
 * 
 */

/*ON/OFF Functions*/
function on(){
	/*Using DOM Model Concept + getElementById to change the main image's ssrc */
	document.getElementById("lamp").src = "Imgs/lamp-on.png";
}
function off(){

	/*Using DOM Model Concept + getElementById to change the main image's ssrc */
	document.getElementById("lamp").src = "Imgs/lamp-off.png";
}


/*Blink Function*/
function blink(){

/*Declaring variable "counter" to define the number of blinks; and variable
 "pace" to define , in MILLISECONDS, the Rhythm between the blink()
  Function Repetition Cycle
 */
	var counter = 0;
	var pace=0;

	while( counter < 10) {
		/*pace incrementation*/
		pace += 100;
		/*synchronization Event setTimeout implementation in order to perform the src change
		  operation after a specific gap set (pace)
		*/
		setTimeout("document.getElementById('lamp').src = 'Imgs/lamp-on.png';", pace);
        pace += 100;

        /*OBS: it is important to note that single quotes must be used between the
         double quotes, otherwise the console will interpret this as the first
         double quote's closing, and the method will not run properly*/
		setTimeout("document.getElementById('lamp').src = 'Imgs/lamp-off.png';", pace);
		/*counter incrementation*/
		counter++;		
	}


}