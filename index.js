const marvel={
    render: ()=>{
const url="https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=214a8dcb217ef641258ffba22b792bb6&hash=ac38fdede15de5e7e8e6c122f53e8c3b";
const container= document.querySelector("#marvel-row");
let contentHTML="";
fetch(url)
    .then(response=> response.json())
    .then((json) =>{
    for(const hero of json.data.results){
        let urlHero= hero.urls[0].url;
        contentHTML+=`
        <div class="col-md-4 mt-2 mb-4">
        <a href="${urlHero}" target="_blank">
        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.id}" class="img-thumbnail">

        </a>
        <h3 class="title">${hero.title}</h3>
        <p class="parrafo">${hero.id}</p>
    </div>
    `;
    }
    container.innerHTML=contentHTML;
});
    }
}
marvel.render();