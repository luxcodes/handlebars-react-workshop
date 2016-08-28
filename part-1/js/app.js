$(document).ready(function() {
	(function() {
		getPosts();
		getNewPost();
		newPost();
	})();
});


function getPosts() {
	$.ajax({
		url: 'http://localhost:9393/',
		dataType: 'json',
		crossDomain: false
	}).done(function(res){
    var script = $('#post').html();
    var template = Handlebars.compile(script);
    var context = { "posts" : res };
    var compiled = template(context);
    $('.posts').append(compiled);
  });
}

function getNewPost() {
	$('.posts a').click(function(e) {
		e.preventDefault();
		
		$.get('http://localhost:9393/posts/new').done(function(res) {
			$('.posts').hide();
			$('.new-post-form').show();
			$('.new-post-form').html(res);
		})
	})
}

function newPost() {
	$('.new-post-form').on('submit', '#post-form', function(e) {
		e.preventDefault();
		
		var data = $(this).serialize();

		$.ajax({
			url: 'http://localhost:9393/posts',
			type: 'post',
			data: data,
			crossDomain: false
		}).done(function(res) {
			$('.new-post-form').hide();
			$('.posts').append(res);
			$('.posts').show();
		})
	})
}