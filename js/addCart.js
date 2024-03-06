
const addToCart = (title) =>{
    // console.log(title,view);
    const cartContainer = document.getElementById('add-to-cart');

    const div = document.createElement('div');
    div.classList.add("cart-info");

    div.innerHTML =`
        <p class="font-semibold">
            ${title} 
            <i class="fa-regular fa-eye text-[#12132d82]"></i>
        </p>
    `
    cartContainer.appendChild(div);
}