var hotelButton = document.getElementById("hotel-button");
var restaurantButton = document.getElementById("restaurant-button");
var commercialButton = document.getElementById("commercial-button");
var hospitalityButton = document.getElementById("hospitality-button");

var hotelTitle = document.getElementById("hotels-title");
var restaurantTitle = document.getElementById("restaurants-title");
var commercialTitle = document.getElementById("commercial-title");
var hospitalityTitle = document.getElementById("hospitality-title");
 
hotelButton.addEventListener('click', function (){
    hotelTitle.style.display = "block";
    restaurantTitle.style.display = "none";
    commercialTitle.style.display = "none";
    hospitalityTitle.style.display = "none";
})

restaurantButton.addEventListener('click', function (){
    hotelTitle.style.display = "none";
    restaurantTitle.style.display = "block";
    commercialTitle.style.display = "none";
    hospitalityTitle.style.display = "none";
})

commercialButton.addEventListener('click', function (){
    hotelTitle.style.display = "none";
    restaurantTitle.style.display = "none";
    commercialTitle.style.display = "block";
    hospitalityTitle.style.display = "none";
})

hospitalityButton.addEventListener('click', function (){
    hotelTitle.style.display = "none";
    restaurantTitle.style.display = "none";
    commercialTitle.style.display = "none";
    hospitalityTitle.style.display = "block";
})


