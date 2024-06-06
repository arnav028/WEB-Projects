const Access_Key = 'HIJZCAmYBghJq8J_HWFpqiIHA87MDvouSdKnJ6j89NQ';  // Ensure you place your actual access key here

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const showData = document.querySelector(".showData");

/* async await waha use hota hai jaha hume api se data na mil jaye */
const getData = async (searchValue) => {
    let fetchResponse = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&per_page=28&page=1&client_id=${Access_Key}`);
    let jsonData = await fetchResponse.json();
    
    console.log(jsonData.results);

    jsonData.results.forEach(function(data){
        console.log(data);

        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML = `
            <img src="${data.urls.small}" alt="${data.alt_description}">
        `;
    });
}

searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    showData.innerHTML = ''; // Clear previous search results
    getData(searchValue);
});
