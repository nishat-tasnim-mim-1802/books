const searchBooks = ()=>{
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.ariaValueMax;
    searchFiled.value = '';
    const url =` https://openlibrary.org/search.json?q=$%7BsearchText%7D=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.books));
}

const displaySearchResult = books =>{
    const searchResult = document.getElementById('search-result');
    books?.forEach(book =>{
        console.log(book);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.subject_key.title}</h5>
              <h4 class="card-title">${book.author_name}</h4>
              <h3 class="card-title">${book.publish_date}</h3>
              
            </div>
          </div>`;

          searchResult.appendChild(div);
    })
}