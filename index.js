let moviesList = document.querySelector(".moviesList");
let filmsSelect = document.querySelector("#filmsSelect");



let renderFilms = (movies) => {
    let res = "";
    
  for (i of movies) {
      res += `
        <div class="card" style="width: 16rem;">
        <img src="${i.bigThumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${i.title}</h5>
        <p class="card-text">${i.summary}</p>
        <a href="https://www.youtube.com/watch?v=${i.youtubeId}" target="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `;
    }
    moviesList.innerHTML = res;
};
renderFilms(movies);

let uniqCat = [];

let uniqCategoryFunc= (arr)=>{
    for(film of arr){
        for(category of film.categories){
           if(!uniqCat.includes(category)) {
            uniqCat.push(category)
           }
        }
    }

    return uniqCat
}


function renderCategory(categories,el){
    let optRes = ''

    for(category of categories){
        optRes +=`
        <option value="${category}">${category}</option>
        `
    }
    console.log(optRes);
    el.innerHTML += optRes
}

renderCategory(uniqCategoryFunc(movies), filmsSelect)

// console.log(res);

//Create element
// let film  = document.createElement("div")
// let img  = document.createElement("img")
// let title  = document.createElement("h4")
// let desc  = document.createElement("p")

// img.src = i.bigThumbnail
// title.textContent = i.title
// desc.textContent = i.summary

// film.classList.add("w-25")

// film.appendChild(img)
// film.appendChild(title)
// film.appendChild(desc)
// moviesList.appendChild(film)

//   console.log(i);

