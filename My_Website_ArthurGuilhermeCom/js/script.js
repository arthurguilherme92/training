/* Side Navigation */
function arrowBtn() {

    let container = document.querySelector(".container");

    if(!container.classList.contains("hidden")) {
        container.classList.add("hidden");
    } else {
        container.classList.remove("hidden");
    };

};
/* End of Side Navigation */
/* Gallery */
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for(let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        console.log(dataFilter);
        for(let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}
/* End of Gallery */
/* To Change Language */
/*function changeLanguage() {

    let mainContainer = document.querySelector("#mainContainer");

    if(mainContainer.classList.contains("change")) {
        mainContainer.classList.remove("change");
    } else {
        mainContainer.classList.add("change");
    }

}*/
/* End of To Chande Language */