//Displaying latest posts dynamically
const displayLatestPostsFun = latestPosts =>{
    // console.log(latestPosts);

    /*
        1. Get container element
        2. Create child element
        3. Set inner HTML
        4. Append child
    */
   const latestPostContainer = document.getElementById('userLatestPost');

   latestPosts.forEach(latestPost =>{
    // console.log(latestPost);

    const latestPostCard = document.createElement('div');
    latestPostCard.classList = 'grid grid-flow-col gap-3 my-16';

    latestPostCard.innerHTML = `
        <!-- Latest Post Card Start -->
        <div class="card w-96 bg-base-100 shadow-xl border border-[#12132d2e]">
        <div class="p-5 ">
            <img src="${latestPost.cover_image}" alt="" class="rounded-2xl">
        </div>
        <div class="card-body p-5">
            <div class="flex flex-row gap-2">
                <span class="material-symbols-outlined">calendar_today</span>
                <p>${latestPost.author.posted_date}</p>
            </div>
            <h2 class="card-title">${latestPost.title}</h2>
            <p>${latestPost.description}</p>
            
            <!-- User Details Start -->
            <div class="flex items-center gap-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src="${latestPost.profile_image}" alt=""/>
                    </div>
                </div>
                <div>
                    <div class="font-bold">${latestPost.author.name}</div>
                    <div class="text-sm opacity-50">${latestPost.author.designation}</div>
                </div>
            </div>
            <!-- User Details End -->
        </div>
        </div>
        <!-- Latest Post Card End -->
    `;
    latestPostContainer.appendChild(latestPostCard);
   })
}
