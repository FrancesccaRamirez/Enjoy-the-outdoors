"use strict"
//variable for populating initial drop downs
const selectByLocation = document.getElementById('search-by-location')
const selectByPark = document.getElementById('search-by-park-type');
//variable to populate filtered values after users click the location/park type
const searchbypark = document.getElementById('parkselect');
const parksDisplay = document.getElementById('locationselect');


function firstsearchFunction(){
//    Getting the option value from the option selected in the selecByLocation element
   const selectedOption = selectByLocation.value
   //alert(selectedOption);
// Loop over national parks array
//filter national parks array based on location(selected optional)
//filter array objects

    function filteredByLocation(park) {
        return selectedOption === park.State;
    }
    // park.LocationName.includes('typeOfPArk') 
    const filteredParks = nationalParksArray.filter(filteredByLocation);

    let str = '';
    for (const park of filteredParks) {
    //   str += `<div>${park.LocationName}</div>`;

//bootstrap cards to display all of nationalParkData
    str += `
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${park.LocationName}</h5>
    <p class="card-text">Phone: ${park.Phone}</p>
    <p class="card-text">Address: ${park.Address}</p>
    <p class="card-text">City: ${park.City}</p>
    <p class="card-text">ZipCode: ${park.ZipCode}</p>
    <p class="card-text">Fax: ${park.Fax}</p>
    <p class="card-text">Latitude: ${park.Latitude}</p>
    <p class="card-text">Longitude: ${park.Longitude}</p>
   
   
    

    <a href="#" class="btn btn-primary">More</a>
  </div>
</div>
    <br>
    `
    }
    console.log(str)
    parksDisplay.innerHTML = str;
    

    // Compare option value with park state
  // if(selectedOption === 'California'){ // This is going to run only if the conditon is true
 //   console.log('Yeah, this is California')
   }


//new function to display filtered values after user clicks the park type
function secondsearchFunction(){
     const selectedParkValue = selectByPark.value
     //alert(selectedParkValue);

     function filteredByParkType(park) {
      return park.LocationName.includes(selectedParkValue);
    }

    const parksfiltered = nationalParksArray.filter(filteredByParkType);
    console.log(parksfiltered)
     

     let str = '';
     for (const park of parksfiltered) {

      str += `
      <div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title">${park.LocationName}</h5>
      <p class="card-text">Phone: ${park.Phone}</p>
      <p class="card-text">Address: ${park.Address}</p>
      <p class="card-text">City: ${park.City}</p>
      <p class="card-text">ZipCode: ${park.ZipCode}</p>
      <p class="card-text">Fax: ${park.Fax}</p>
      <p class="card-text">Latitude: ${park.Latitude}</p>
      <p class="card-text">Longitude: ${park.Longitude}</p>
     
      
  
      <a href="#" class="btn btn-primary">More</a>
    </div>
  </div>
      <br>
      `
      }
      console.log(str)
      parksDisplay.innerHTML = str;
    }    

window.onload = () => {
    // Populating our select by location select html element
    initDropdownLocation();
    DropdownLocation();
    }
  

function initDropdownLocation(){
    // Creating a default option
    const defaultOption = new Option('Search Park By Location ... ', 'default')
    // Adding default option as first element
    selectByLocation.insertAdjacentElement('beforeend', defaultOption) 

    // Loop over the array of locations
    for (const location of locationsArray){
        // Create an option element
       const locationOption = new Option(location, location) // ('string/text', 'value')
    
       // Add to the select element in html 
       selectByLocation.insertAdjacentElement('beforeend', locationOption) // (position, )
    }
} 

/* This function is what makes the drop down menu initially appear.Need to change this again for Park Type Search filter*/
//This is the new function I added
function DropdownLocation(){
  const NewOption = new Option('Search by Park Type... ', 'default')
  selectByPark.insertAdjacentElement('beforeend', NewOption) 

  for (const park of parkTypesArray){
     const locationOption = new Option(park, park) // ('string/text', 'value')
     selectByPark.insertAdjacentElement('beforeend', locationOption) // (position, )
  }
} 


