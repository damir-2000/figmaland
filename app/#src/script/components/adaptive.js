let colLeft = document.querySelector('.subscribe__col-left');
let colRight = document.querySelector('.subscribe__col-right');
let colTitle = document.querySelector('.subscribe__col-title');

const mediaNotebook = window.matchMedia('(max-width: 991.98px)');

mediaNotebook.addListener(media);

function media(e) {
    if (e.matches) {
        colLeft.prepend(colTitle);
    }
    else{
        colRight.prepend(colTitle);
    }
    
}
media(mediaNotebook);

