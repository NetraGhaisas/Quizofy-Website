
function myTimer() {
	document.getElementById("time").innerHTML = "Timer: "+(min+" m "+sec+" s ");
	sec++;
	if(sec==60){
		min++;
		sec=0;
		}
    //var d = new Date();
    //var time = d.toLocaleTimeString();
    //document.getElementById("time").innerHTML = "Timer: "+(time-start);
}