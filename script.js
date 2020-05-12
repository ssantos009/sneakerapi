let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://api.thesneakerdatabase.com/v1/sneakers?limit=100`);
  console.log(response)
  let data = await response.json()
  console.log(data)
   useApiData(data) 
}



//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
  document.querySelector("#content").innerHTML = `
<div class="card-group">
  <div class="card">
    <img src="${data.results[0].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[0].colorway}</h5>
    <p class="card-text">${data.results[0].brand}</p>
      <p class="card-text">${data.results[0].releaseDate}</p>
      <p class="card-text">${data.results[0].gender}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[9].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[9].colorway}</h5>
    <p class="card-text">${data.results[9].brand}</p>
      <p class="card-text">${data.results[9].releaseDate}</p>
      <p class="card-text">${data.results[9].gender}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[31].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[31].colorway}</h5>
    <p class="card-text">${data.results[31].brand}</p>
      <p class="card-text">${data.results[31].releaseDate}</p>
      <p class="card-text">${data.results[31].gender}</p>
    </div>
  </div>
</div>

<div class="card-group">
  <div class="card">
    <img src="${data.results[32].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[32].colorway}</h5>
    <p class="card-text">${data.results[32].brand}</p>
      <p class="card-text">${data.results[32].releaseDate}</p>
      <p class="card-text">${data.results[32].gender}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[40].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[40].colorway}</h5>
    <p class="card-text">${data.results[40].brand}</p>
      <p class="card-text">${data.results[40].releaseDate}</p>
      <p class="card-text">${data.results[40].gender}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[43].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[43].colorway}</h5>
    <p class="card-text">${data.results[43].brand}</p>
      <p class="card-text">${data.results[43].releaseDate}</p>
      <p class="card-text">${data.results[43].gender}</p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src="${data.results[46].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[46].colorway}</h5>
    <p class="card-text">${data.results[46].brand}</p>
      <p class="card-text">${data.results[46].releaseDate}</p>
      <p class="card-text">${data.results[46].gender}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[50].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[50].colorway}</h5>
    <p class="card-text">${data.results[50].brand}</p>
      <p class="card-text">${data.results[50].releaseDate}</p>
      <p class="card-text">${data.results[50].gender}</p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[54].media.imageUrl}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${data.results[54].colorway}</h5>
    <p class="card-text">${data.results[54].brand}</p>
      <p class="card-text">${data.results[54].releaseDate}</p>
      <p class="card-text">${data.results[54].gender}</p>
    </div>
  </div>
</div>
` 
}

