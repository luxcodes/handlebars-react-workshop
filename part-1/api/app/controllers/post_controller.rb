# Set up your routes here!

get '/', '/posts' do 
	posts = Array.new.concat(Post.all)
	request.xhr? ? (posts.to_json) : (handlebars :'/posts/index', locals: {posts: posts})
end

get '/posts/new' do
	request.xhr? ? (handlebars :'/posts/new') : (handlebars :'/posts/new')
end

post '/posts' do
	post = Post.new(params[:post])
	if post.save
		if request.xhr? 
			handlebars :'/posts/_post', {layout: false, locals: {post: post}} 
		else
			redirect '/'
		end
	else
		error = ["Oh no something went wrong"]
		handlebars :'/posts/new', locals: {error: error}
	end
end