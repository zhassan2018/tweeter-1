$(document).ready(function(){
	$('textarea').keyup(function(){
		var charInput = $(this).val();
		var charRemaining = 140 - charInput.length;
		
		$(this).closest('form').children('.counter').text(charRemaining);


		if (charRemaining<0){
			$(this).closest('form').children('.counter').css("color","red")
		}
		else{
			$(this).closest('form').children('.counter').css("color","black")
		}


		


	})
})

