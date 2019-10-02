const libraryList = [
  { name: 'Origin' ,
    authors:'Dan Brown',
    pages: '300' ,
    publishyear: '2018' ,
    rent: 'Yes',
    status: 'Available',
  }, 
  { name: '12 rules for life',
    authors:'Jordan Peterson',
    pages: '300',
    publishyear: '2018',
    rent: 'Yes',
    status: 'Not available',
  } 
];

document.addEventListener('DOMContentLoaded', () => {
  const listElm = document.querySelector('.library');
  for (const item of libraryList) {
    const html = (
      `<div class="library__item">
        <span>${item.name}</span>
        <span>${item.authors}</span>
        <span>${item.pages}</span>
        <span>${item.publishyear}</span>
        <span>${item.rent}</span>
        <span>${item.status}</span>
       </div>`
    );
    listElm.innerHTML += html;
  }
  const addbook = () =>{
    const book = {
      name:        document.getElementById('#name').value,
      authors:     document.getElementById('#author').value,
      pages:       document.getElementById('#pages').value,
      publishyear: document.getElementById('#publishyear').value,
      rent:        document.getElementById('#rent').value,
      status:      document.getElementById('#status').value
    }
    jQuery.extend(libraryList, book);
    for (const item of libraryList) {
      const html = (
        `<div class="library__item">
          <span>${item.name}</span>
          <span>${item.authors}</span>
          <span>${item.pages}</span>
          <span>${item.publishyear}</span>
          <span>${item.rent}</span>
          <span>${item.status}</span>
         </div>`
      );
      listElm.innerHTML += html;
    }
  }
    const myBtn = document.querySelector("#button");
    myBtn.addEventListener('click',addbook);
});