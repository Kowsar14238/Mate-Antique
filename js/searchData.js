//Handle search button
const handleSearch = () =>{
    // console.log('Search');
    const searchText = document.getElementById('userSearchField').value;
    // console.log(searchText);
    allPostFun(`?category=${searchText}`);
}