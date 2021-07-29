document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);

function theDomHasLoaded(e) {
    // do something
}

function pageFullyLoaded(e) {
    
    fetch("./details.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
//go through json file and console.log the data 
    for(var i = 0; i < data.Listofallcars.length; i++) {
    // console.log(data.Listofallcars[i].Id);
    // console.log(data.Listofallcars[i].Carname);
    // console.log(data.Listofallcars[i].Price);
    // console.log(data.Listofallcars[i].Year);
    // console.log(data.Listofallcars[i].Mileage);
    // console.log(data.Listofallcars[i].Drive_type);
    // console.log(data.Listofallcars[i].Transmission);
    // console.log(data.Listofallcars[i].Fuel_type);
    // console.log(data.Listofallcars[i].Exterior);
    // console.log(data.Listofallcars[i].Interior);
    // console.log(data.Listofallcars[i].MainIMG);
    // console.log(data.Listofallcars[i].VIN);

    document.getElementById("switch-7days").addEventListener('click', function(e){
        console.log('7days-clicked', e);

    });
    const list = document.querySelector('#list_of_cars');
    list.appendChild(ons.createElement(`

    
    <ons-list-item tappable onclick="">
                <div class="left">
                  <img class="list-item__thumbnail" src="${data.Listofallcars[i].MainIMG}">
                </div>
                <span class="list-item__title"><div class="center">${data.Listofallcars[i].Carname}</span><span class="list-item__subtitle"><br>Price: $${data.Listofallcars[i].Price}</span>
                    <br>
                
                    </div>
              </ons-list-item>
           
              
              `));
};
});
}
