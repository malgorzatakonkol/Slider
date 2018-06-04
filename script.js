document.addEventListener("DOMContentLoaded", function () {
    var prevButton = document.getElementById("prevPicture");
    var nextButton = document.getElementById("nextPicture");
    var elementList = document.querySelectorAll(".slider li");

    var imageIndex = 0;


    elementList[imageIndex].classList.add("visible");




    //function that increases the index of the photo
    function advance(index) {
        if (index >= elementList.length-1) {
            return 0;
        } else {
            return index + 1;
        }

    }

    //function that reduces the index of the photo
    function reverse(index){
        if (index <= 0) {
            return elementList.length-1;
        } else {
            return index - 1;
        }
    }


    function addClikNext () {
        var newIdx = advance(imageIndex);
        elementList[imageIndex].classList.remove("visible");
        elementList[newIdx].classList.add("visible");
        imageIndex = newIdx;

    }

    nextButton.addEventListener("click",addClikNext);

    function addClickPrev() {
        var newIndex = reverse(imageIndex);
        elementList[imageIndex].classList.remove("visible");
        elementList[newIndex].classList.add("visible");
        imageIndex = newIndex;
    }

    prevButton.addEventListener("click", addClickPrev);



});