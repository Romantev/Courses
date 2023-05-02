function newArticle() {
  const inputWord = String(document.querySelector("#search-input").value);
  const article = document.querySelector("article");

  let newArticle = document.querySelector("article").innerText;
  newArticle = newArticle.replaceAll(inputWord,"<span>" + inputWord + "</span>");

  article.innerHTML = newArticle;
}
