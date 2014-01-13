$(document).ready(function(){
	

	var uploadedFiles = [];
	var sizeWhenLastUpdated = 0;
	var reader = new FileReader();

	//Denna metod vidarebefodrar klicket på knappen till input=file
	$('#addFile').click(function(){
		$(':file').click();
	});


	//Denna metod specifierar vad som ska hända när man lagt till en fil.
	$(':file').change(function(event){
		var input = event.target;

	    reader.onload = function(event){
	      var reader = event.target;

	      var text = reader.result;
	      $("#fileContent").html("<p>" + text + "</p>");
	    };
	    for(var i = 0; i < input.files.length; i++){
	    	uploadedFiles.push(input.files[i]);
	    	updateFileList();
	    }
	    reader.readAsText(uploadedFiles[uploadedFiles.length-1]);
	});

	function updateFileList()
	{
		if(uploadedFiles.length > sizeWhenLastUpdated){
			var number = "" + uploadedFiles.length-1;
			$('#fileList > ul').append("<li><a href='' data-number='" + number + "' class='fileLink'>Text "+ ++sizeWhenLastUpdated +"</a></li>");
			$('.fileLink').bind("click", onClick);
		}
	}

	function onClick(evt){
		var numberToLoad = $(this).attr('data-number');
		reader.readAsText(uploadedFiles[numberToLoad]);
		evt.preventDefault();
	}

});