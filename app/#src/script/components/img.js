const imgs = document.getElementsByTagName('img');
for(let i = 0; i < imgs.length; i++ ) {
    imgs[i].setAttribute("ondragstart", "return false")
}