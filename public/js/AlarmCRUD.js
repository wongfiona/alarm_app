var addButton = document.getElementById('SubmitNew');

//If this is the Add page, connect addAlarm to the submit button.
if(addButton) {
	addButton.addEventListener().addEventListener("click", addAlarm);
}
//If this is the main page, connect deleteAlarm to the delete buttons.

function addAlarm(){
	var alarmName = document.getElementById('alarmfield');
	var alarmTime = document.getElementById('timefield');
	
	if(!alarmName || alarmTime){
		return 0;
	}
	
}

function refreshAlarms(){
	
}