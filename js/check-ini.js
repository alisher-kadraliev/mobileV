$('#getCheckedButton').on('click', function(e){
	e.preventDefault();
	alert($('#settingsForm').serialize());
});