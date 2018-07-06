/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 /*Code for hovering*/



/*Code for rendering tweets*/



/*Code for createTweetElement */

$(document).ready(function(){

	loadTweets();	



 function createTweetElement (tweetObj){
 	 var $article = $('<article>').addClass('singleTweet');
 	 var $header = $('<header>');

 	var avatars = tweetObj.user.avatars.small;
 	var $avatars = $(`<img src = ${avatars}>`).addClass('pic');


 	var user_name = tweetObj.user.name;
 	var $user_name = $(`<h2>${user_name}</h2>`);

 	var handle = tweetObj.user.handle;
 	var $handle = $(`<h4>${handle}</h4>`);


 	var text = tweetObj.content.text;
 	var $middle = $(`<p>${text}</p>`).addClass('tweetText');


 	var $footer = $('<footer>');

 	var date = tweetObj.created_at;
 	var $date = $(`<time> ${date}</time>`)



 	var $icons = $('<div>').addClass('icons');

 	var $icon1 = $(`<i></i>`).addClass('far fa-flag');
 	var $icon2 = $(`<i></i>`).addClass('fas fa-retweet');
 	var $icon3 = $(`<i></i>`).addClass('fas fa-heart');

 	$($article).append($header).append($middle).append($footer);

 	$($header).append($avatars).append($user_name).append($handle);

 	$($icons).append($icon1).append($icon2).append($icon3);

 	$($footer).append($date).append($icons);



 	
return $article;

 }


 
  	$('.MakeTweet').on('click',function(event){
  		event.preventDefault();


  		var tweetUser = $(this).parent('form').children('textarea').val();

  		if (tweetUser === null || tweetUser === ''){
  		
  			$error = $('<h1>This is not a valid tweet!</h1>').addClass('error');
  			$(this).parent('form').append($error);	
  			$('error').fadeIn();
  			setTimeout(function(){$('.error').remove()}, 2000)

  
  		}

  		else if (parseInt(tweetUser.length) > 140){
  		
  			$error = $('<h1>Character limit exceeded!</h1>').addClass('error');
  			$(this).parent('form').append($error);	
  			$('error').fadeIn();
  			setTimeout(function(){$('.error').remove()}, 2000)

  
  		}



  		else{
	

  			
  		var str = $("[name='text']").serialize();

  		
  			$.ajax({
  				url: '/tweets',
  				method: 'POST',
  				data: str,
  				success: function(){
  					
  					loadTweets()}
  				
  			})

  			$('.counter').text(140);
        $('textarea').val("");

  		} 



  	})




  	function loadTweets(){
  		$.ajax({
  			url: '/tweets',
  			method: 'GET',
  			success: function(tweets){	
  				renderTweets(tweets);
  			}
  		})
  	}

  	function renderTweets(tweets){
  		$('#tweet-container').empty()
  		for (var tweet = 0; tweet < tweets.length; tweet++){
  			$tweet_ToAdd = createTweetElement(tweets[tweet]);
  			$('#tweet-container').prepend($tweet_ToAdd);

  		}
  		$('.singleTweet').on('mouseenter',function(){

  			$(this).find('i').css('opacity',1.0);
  			$(this).css('opacity', 1.0);
  		
  		})

  		$('.singleTweet').on('mouseleave',function(){
  			$(this).find('i').css('opacity',0.0);
  			$(this).css('opacity', 0.6);
  			
  		})
  	}


    $('#Composition').on('click',function() {
              $(".new-tweet").slideToggle('fast')
              $('textarea').focus()
            })
  




})





