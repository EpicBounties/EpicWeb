// find tags by search function
document.addEventListener('DOMContentLoaded', (event) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  localStorage.setItem('tag', urlParams.get('tag'));
  let tag = localStorage.getItem("tag")
  let container = document.getElementById("news-roll");
  for(let tag of container.children ) {
    if( tag.id != "-"+urlParams.get('tag')) {
      tag.innerHTML = '';
    }
  };
  // change tag title
  document.getElementById("tag-title").innerHTML = tag;
  // delete unused
  let children = Array.prototype.slice.call(document.getElementById("news-roll").children);
  children.forEach(element => {
    if (element.id != `-${tag}`) {
      element.remove();
    }
  });

  // redirect if invalid search params
  let regex = /[^0-9a-zA-Z]+/igm
  let params = urlParams.get('tag')
  if ((regex).test(params) == true) {
    let redirect =  document.location.origin + '/' + userLang + '/' + '404'
    window.location.replace(redirect)
  }
});
