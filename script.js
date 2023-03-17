let API_URL = "https://restcountries.com/v3.1/all";
let container2 = document.querySelector(".container2");
let input = document.querySelector("input")

fetch(API_URL)
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.length; i++) {
    
       container2.innerHTML += `<div class="country">
        <div class="row">
            <div class="countryIMG">
                <img src="${data[i].flags.png}">
            </div>
            <div class="info">
                <h4>${data[i].name.common}</h4>
                <p><b>Population:${data[i].population}</b></p>
                <p><b>Capital:${data[i].capital}</b></p>
                <p><b>Region: ${data[i].region}</b></p>
            </div>
        </div>
    </div>`     
    }
});


input.addEventListener("keyup",function(){
    fetch(API_URL)
    .then((response)=>response.json())
    .then(data => {
        list.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
           if (data[i].name.toLowerCase().includes(input.value.toLowerCase())) {
            list.innerHTML += `<a href="detail.html?id=${data[i].id}" target="_blank"><li>${data[i].name}</li></a>`;
           }
        }
    })
});

