function renderBooks() {
    let currentBookList = getItemFromLocalStorage();
    if (currentBookList == null){
      currentBookList = books
    } else {
      books = currentBookList
    }
    localStorage.setItem("books", JSON.stringify(books));
  
    for (let i = 0; i < books.length; i++) {
      let showComments = renderComments(i); 
      let imgHeartSrc = setHeartImg(i); 
  
      cardsContentCtn.innerHTML += `
          <div class="card_ctn">
          <section class="title_ctn section_ctn">
              <h2 id="title">${books[i].name}</h2>
          </section>
          <section class="img_ctn section_ctn">
            <img src="./assets/icon/book.png" alt="Icon geöffnetes Buch">
          </section>
          <section class="data_ctn section_ctn">
              <div class="price_likes_ctn">
                  <span id="price">${parseFloat(books[i].price).toFixed(2)} €</span>
                  <div class="likes">
                      <span id="count${i}">${books[i].likes}</span>
                      <img onclick="likeDislike(event)" id="heart_likes${i}" src=${imgHeartSrc} alt="Herz für Likes">
                  </div>
              </div>
              <div class="data_info_ctn">
                  <div class="data_line">
                      <span class="data_title">Author</span>
                      <span id="author" class="data_text">${books[i].author}</span>
                  </div>
                  <div class="data_line">
                      <span class="data_title">Erscheinungsjahr</span>
                      <span id="year" class="data_text">${books[i].publishedYear}</span>
                  </div>
                  <div class="data_line">
                      <span class="data_title">Genre</span>
                      <span id="genre" class="data_text">${books[i].genre}</span>
                  </div>
              </div>
          </section>
          <section class="comments_ctn section_ctn">
              <p>Kommentare:</p>
              <div id="comments_received_ctn${i}" class="comments_received_ctn">
                ${showComments}
              </div>
          </section>
          <section class="write_comment_ctn">
              <input id="comment_input${i}" type="text" placeholder="Kommentar hinterlassen">
              <button><img onclick="saveComment(${i})" id="send_button_img${i}" src="./assets/icon/send-data.png" alt="senden Icon mit Briefumschlag und Papierflieger"></button>
          </section>
      </div>` 
    } 
  }
  
  function renderComments(i) {
    books = getItemFromLocalStorage();
    let collection = document.createElement("div");
    collection.classList.add("comment_line_ctn");
    for (let x = 0; x < books[i].comments.length; x++) {
      collection.innerHTML += `  <div id="comment_line" class="comment_line">
                              <span id="username" class="comment_user">${books[i].comments[x].name}</span>
                              <span class="comment_text">${books[i].comments[x].comment}</span>
                          </div>`                          
    }
    if (books[i].comments.length == 0) {
      collection.innerHTML += `  <div id="comment_line" class="comment_line">
                              Hinterlasse den ersten Kommentar.
                          </div>` 
    }
    return collection.innerHTML
  }