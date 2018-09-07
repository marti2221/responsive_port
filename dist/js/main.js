// select DOM items 
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".menu-nav-item");

// set state of menu
let showMenu = false; 

menuBtn.addEventListener("click", toggleMenu);



function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add("close"); 
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding .classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
        
        // set state
        showMenu = true; 
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        
        // set state
        showMenu = false; 
    }
}






function initMap() {
	/*
	let styledMapType = new google.maps.styledMapTypes([
		{elementType: "geometry", stylers: [{color: "rgb(20,22,55)"}]},
		{elementType: "labels.text.fill", stylers: [{color: "rgb(47, 102, 218)"}]},
		{elementType: "labels.text.stroke", stylers: [{color: "rgb(255,80,80)"}]},
		{
			featureType: "administrative",
			elementType: "geometry.stroke",
			stylers: [{color: "grey"}]
		},
		{
			featureType: "administrative.land_parcel",
			elementType: "geometry.stroke",
			stylers: [{color: "rgb(20,22,55)"}]
		},
		{
			featureType: "administrative.land_parcel",
			elementType: "geometry.text.fill",
			stylers: [{color: "rgb(47,102,218)"}]
		},
		{
			featureType: "landscape.natural",
			elementType: "geometry",
			stylers: [{color: "darkgrey"}]
		},
		{
			featureType: "poi",
			elementType: "geometry",
			stylers: [{color: "darkgrey"}]
		},
		{
			featureType: "poi",
			elementType: "labels.text.fill",
			stylers: [{color: "rgb(20,22,55)"}]
		},
		{
			featureType: "poi.park",
			elementType: "geometry.fill",
			stylers: [{color: "grey"}]
		},
		{
			featureType: "poi.park",
			elementType: "labels.text.fill",
			stylers: [{color: "rgb(47,102,218)"}]
		}
	], {})
	*/
    let mapDiv = document.getElementById("map");
    let map = new google.maps.Map(mapDiv, {
        center: {
            lat: 43.416041,
            lng: -83.978485
        },
        zoom: 10
    });
}