const ARTICLE = document.querySelector("#article");

ARTICLE.style.height = "400px";
ARTICLE.style.width = "400px";
ARTICLE.style.backgroundColor = "red";
ARTICLE.innerHTML = "Hei på deg";

const BTN = document.querySelector("#btn");

// Ved klikk på knappen fjernes alt innholdet på siden
BTN.onclick = () => {
    document.body.innerHTML = "";
}


// const ARTICLES = document.getElementsByClassName("article");
// console.log(ARTICLES);

// const ARTICLE_ONE = ARTICLES[0];
// console.log(ARTICLE_ONE);

// ARTICLE_ONE.style.borderRadius = "50%";
// ARTICLE_ONE.style.backgroundColor = "gold";