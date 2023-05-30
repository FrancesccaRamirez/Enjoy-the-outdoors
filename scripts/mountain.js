const selectByMountain = document.getElementById('search-mountains')
const MountainDisplay = document.getElementById('display')



function mountainFunction() { 
    const selectedOption = selectByMountain.value

    function findSelectedMtn(mtn) {
        return mtn.name === selectedOption;
      };
      const selectedMtn = mountainsArray.find(findSelectedMtn);
      console.log(selectedMtn.img)
      if (selectedMtn) {
        MountainDisplay.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="./images/${selectedMtn.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${selectedMtn.name}</h5>
          <p class="card-text">Discription: ${selectedMtn.desc}</p>
          <p class="card-text">Elevation: ${selectedMtn.elevation}</p>
          <p class="card-text">Coordinates: ${selectedMtn.coords.lat}, ${selectedMtn.coords.lng}</p>
          <a href="#" class="btn btn-primary">More</a>
        </div>
      </div> 
        `;
      } else {
        MountainDisplay.innerHTML = "";
      }
    }


window.onload = function(){
    initDropdownMountains()
}

function initDropdownMountains(){
    // Creating a default option
    const defaultOption = new Option('Search Mountains', 'default')
    // Adding default option as first element
    selectByMountain.add(defaultOption) 


    // Loop over the array of mountain
    for (const mountain of mountainsArray){
      
        // Create an option element
       const mountainOption = new Option(mountain.name, mountain.name) // ('string/text', 'value')
    
       // Add to the select element in html 
       selectByMountain.add(mountainOption) // (position, )
    }
} 