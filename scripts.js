// Smooth scrolling



$('a[href*="#top"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("hello");
    // Ensure the default tab is selected and displayed
    document.getElementById("default-restab").click();

    var btnContainer = document.getElementById("myResNotesBtnContainer");
    var btns = btnContainer.getElementsByClassName("notes-btn");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function (e) {


            var current = document.getElementsByClassName("notes-btn-active");
            // Remove the anupam class from the currently active button
            if (current.length > 0) {
                current[0].classList.remove("notes-btn-active");
            }


            // Add the anupam class to the clicked button

        });
    }
});

function filterSelection(c) {

    var x, i, btname;
    btname = c;
    x = document.getElementsByClassName("notes-column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "res-show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "res-show");
    }



    var btnContainer = document.getElementById("myResNotesBtnContainer");
    var btns = btnContainer.getElementsByClassName("notes-btn");

    var current = document.getElementsByClassName("notes-btn-active");
    // Remove the anupam class from the currently active button
    if (current.length > 0) {
        current[0].classList.remove("notes-btn-active");
    }

    for (var i = 0; i < btns.length; i++) {

        if (btname == btns[i].id)
            btns[i].classList.add("notes-btn-active");

    }

}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
