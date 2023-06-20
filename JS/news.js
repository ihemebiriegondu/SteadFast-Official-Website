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

const goToNewsFunction = (event) => {
    let headlineClicked = event.target;
    //console.log(headlineClicked)
    let headlineClickedID = headlineClicked.dataset.headlineid
    //console.log(headlineClickedID)
    let mainHeadline = document.getElementById(headlineClickedID)
    //console.log()
    mainHeadline.parentElement.children[3].children[0].click()
}