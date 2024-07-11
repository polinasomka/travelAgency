let hotels = document.querySelectorAll('.hotel')
let addresses = ['<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.3160426958575!2d9.2283599!3d45.984918699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478422cc02aefbef%3A0xdf6f075b79ed8c54!2sGrand%20Hotel%20Tremezzo!5e0!3m2!1sru!2sua!4v1719951164982!5m2!1sru!2sua" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.9178294615417!2d-110.77439349999999!3d43.504049699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53531ae98a404b5d%3A0x2e9fb0d02593dbcc!2sAmangani!5e0!3m2!1sru!2sua!4v1719951277170!5m2!1sru!2sua" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.801318227554!2d127.10252419999998!3d37.512603899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca50ac1c8bccb%3A0xbeb4a183daa6684f!2sSIGNIEL%20SEOUL!5e0!3m2!1sru!2sua!4v1719951316447!5m2!1sru!2sua" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.315685281136!2d151.2093354!3d-33.8557543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae5d85cd8021%3A0x8bd10336683856bb!2sPark%20Hyatt%20Sydney!5e0!3m2!1sru!2sua!4v1719951370249!5m2!1sru!2sua" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>']
let hotelsArray = []

function createArray (){
    hotels.forEach(e => {
        hotelsArray.push(e.querySelector('[itemprop="name"]').innerText);
    });
    console.log(hotelsArray);
}


let adressArray = []

function createAdressArray() {
    hotelsArray.forEach((hotel, index) => {
        adressArray.push({ name: hotel, address: addresses[index] });
    });
    console.log(adressArray)
}

createArray()
createAdressArray()

hotels.forEach((hotel, index) => {
    hotel.addEventListener('click', () => {
        showMap(index);
    });
});

function showMap(index) {
    let mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = adressArray[index].address;
    mapContainer.style.display="block"
}

let mapContainer = document.getElementById('map-container');
function hideMap(){
    mapContainer.style.display="none"
}

mapContainer.addEventListener('click', ()=>{
    hideMap()
})