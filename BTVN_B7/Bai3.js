function Post(title,body,author,views,comments, isLive){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive; 
}

function Author(author, body){
    this.author = author;
    this.body = body;
}

const comments = [];
comments.push(new Author('anh Huân đzzz', 'lewlew'), new Author('anh Huân đzzz', 'lewlew'));

const post =  new Post('ahihi','anh Hoàng đzzz', 'abc', 100, comments, true);
console.log(post);