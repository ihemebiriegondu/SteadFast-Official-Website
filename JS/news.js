const showNewsContent = (event) => {
    const button =  event.target;

    document.querySelector(".mainArticleDate").innerHTML = button.parentElement.parentElement.parentElement.children[1].innerHTML;
    document.querySelector(".mainNewsImage").src = button.parentElement.parentElement.parentElement.children[0].children[0].src;
    document.querySelector(".mainNewsTitle").textContent = button.parentElement.parentElement.children[0].textContent;
    document.querySelector(".mainNewsContent").innerHTML = button.parentElement.parentElement.children[2].innerHTML;
}

const showArticlesContent = (event) => {
    const article = event.target;

    document.querySelector(".mainArticleDate").innerHTML = article.parentElement.parentElement.children[1].innerHTML;
    document.querySelector(".mainNewsImage").src = article.parentElement.parentElement.children[2].children[0].src;
    document.querySelector(".mainNewsTitle").textContent = article.textContent;
    document.querySelector(".mainNewsContent").innerHTML = article.parentElement.parentElement.children[2].children[1].innerHTML;
}