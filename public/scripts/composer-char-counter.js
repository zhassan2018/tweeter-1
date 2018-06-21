$(document).ready(function(){
	$('textarea').keydown(function(){
		var charInput = $(this).val();
		var charRemaining = 140 - charInput.length;
		
		$(this).closest('form').children('.counter').text(charRemaining)
		


	})
})

