
//Fetch All Post Data
const allPostFun = async (query="") =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${query}`);
    const data = await res.json();
    const allPost = data.posts;
    displayAllPostFun(allPost);
}

allPostFun();


//Fetch Latest Posts Data 
const latestPostFun = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latestPosts = await res.json();
    // console.log(latestPosts);
    displayLatestPostsFun(latestPosts);//Pass Latest Post Data as a parameter to Display function
}
latestPostFun();
