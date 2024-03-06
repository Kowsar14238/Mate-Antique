//Displaying all post dynamically
const displayAllPostFun = allPost =>{
    // console.log(allPost);

    const allPostContainer = document.getElementById('userAllPost');//1. Get container element

    // Show only the search value
    allPostContainer.innerHTML = "";

    // clear phone container cards before adding new cards
    allPostContainer.textContent = '';

    //Access every single post dynamically. 
    allPost.forEach(post =>{
        // console.log(post);

        //2. Create child element
        const allPostCard = document.createElement('div');
        allPostCard.classList = `flex flex-row bg-[#797dfc1a] px-10 py-5 rounded-2xl`;

        //3. Set inner HTML
        allPostCard.innerHTML = `
            <div class="indicator">
                <span class="indicator-item badge badge-secondary"></span> 
                <div class="grid w-32 h-32 bg-base-300 place-items-center">
                    <img src="${post.image}" class="rounded-2xl">
                </div>
            </div>

            <!-- Discussion Card Contents Start -->
            <div class="flex flex-col mx-5 ">
                <div class="flex flex-row gap-5">
                    <p>#${post.category}</p>
                    <p>Author: ${post.author.name}</p>
                </div>
                <h2 class="font-bold text-xl">${post.title}</h2>
                <p class="text-[#12132d83] py-2">${post.description}</p>
                <hr class="dotted-hr">
                <div class="flex flex-row items-center justify-between my-4">
                    <div class="flex flex-row gap-6">
                        <div class="flex flex-row justify-center items-center gap-2">
                            <i class="fa-regular fa-comment-dots"></i>
                            <span>${post.comment_count}</span>
                        </div>
                        <div class="flex flex-row justify-center items-center gap-2">
                            <i class="fa-regular fa-eye"></i>
                            <span>${post.view_count}</span>
                        </div>
                        <div class="flex flex-row justify-center items-center gap-2">
                            <i class="fa-regular fa-clock"></i>
                            <span>${post.posted_time} min</span>
                        </div>
                    </div>
                    <button onclick="addToCart('${post.title} ${post.view_count}')" id="postAddBtn" class="bg-[#10B981] py-0.5 px-2 rounded-full text-white text-center">
                      <i class="fa-solid fa-envelope-open"></i>
                    </button>
                </div>
            </div>
            <!-- Discussion Card Contents End -->
        `;
        //4. Append child
        allPostContainer.appendChild(allPostCard);
    });
}