function getData(){
  return fetch("https://api.github.com/users/rahmanfadhil/followers")
  .then(data => {
    return data.json()
  })
}

getData().then(function(datas){
  const output = document.getElementById("output");
  datas.map(function(data){
    console.log(data);
    e = document.createElement('div');
    e.innerHTML = `
      <div class="card" style="margin: 10px; width: 18rem;">
        <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data.login}</h5>
          <a href="${data.html_url}" class="btn btn-primary">Github</a>
        </div>
      </div>
    `
    output.appendChild(e)
  })
})
