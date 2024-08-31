let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]

let cardsContentCtn = document.getElementById("cards_content_ctn");
let count = document.getElementById("count");
let heartRedSrc = "./assets/icon/heart-red.png";
let heartEmptySrc = "./assets/icon/heart-empty.png";

function setHeartImg(i) {
  if (books[i].liked == true) {
    return "./assets/icon/heart-red.png"
  } else if (books[i].liked == false) {
    return "./assets/icon/heart-empty.png"
  }
}

function saveComment(i) {
  let newComment = document.getElementById(`comment_input${i}`).value;
  let currentUser = "anonym";
  books = getItemFromLocalStorage();
  books[i].comments.push({'name': `${currentUser}`, 'comment': `${newComment}`});
  localStorage.setItem("books", JSON.stringify(books));
  let newComments = renderComments(i);
  document.getElementById(`comments_received_ctn${i}`).innerHTML = newComments;
  document.getElementById(`comment_input${i}`).value = "";
}

function getItemFromLocalStorage() {
    let newBookList = JSON.parse(localStorage.getItem("books"));
    return newBookList
}

function likeDislike(e) {
  let newHeartSrc = checkCurrentSrc(event);
  document.getElementById(e.srcElement.id).src = newHeartSrc;
  let idNumber = e.srcElement.id.substring(11);
  let newCount = checkCurrentCount(idNumber, newHeartSrc)
  let likedTrueFalseNew = checkTrueFalse(idNumber);
  let countId = `count${idNumber}`
  document.getElementById(`${countId}`).innerHTML = newCount;
  books[idNumber].likes = newCount;
  localStorage.setItem("books", JSON.stringify(books));
}

function checkCurrentSrc(e) {
  let currentSrc = e.srcElement.currentSrc;
  if (currentSrc.includes("red")) {
    return heartEmptySrc
  } else if (currentSrc.includes("empty")) {
    return heartRedSrc
  }
}

function checkCurrentCount(idNumber, newHeartSrc) {
  let currentCount = books[idNumber].likes;
  if (newHeartSrc.includes("red")) {
    let newCountToSet = currentCount + 1;
    return newCountToSet
  } else if (newHeartSrc.includes("empty")) {
    let newCountToSet = currentCount - 1;
    return newCountToSet
  }
}

function checkTrueFalse(idNumber) {
  if (books[idNumber].liked == true) {
    books[idNumber].liked = false;
    return false
  } else if (books[idNumber].liked == false) {
    books[idNumber].liked = true;
    return true
  }
}




