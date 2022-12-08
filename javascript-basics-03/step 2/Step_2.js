// function ShowAndHide() {
//     var x = document.getElementById("show");
//     var y = document.getElementById("hide");
//     var parag = document.getElementById("texte");

//     if (x.onclick) {
//         parag.style.display = 'block';
//     } else if(y.onclick){
//         parag.style.display = 'none';
//     }
// }

// ShowAndHide();

// x.onclick
var link = document.querySelectorAll('a')
var text = document.getElementById('texte')

link.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.target.id == 'hide') {
            text.style = 'display: none;'
        } else {
            text.style = 'display: block;'
        }
    })
})
