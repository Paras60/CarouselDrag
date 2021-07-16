const $ = selector => {
    return document.querySelector(selector);
};

function next() {
    let hideText;
    if ($(".hide")) {
        hideText = $(".hide").innerText
        $(".hide").remove();
    }

    /* Step */

    if ($(".prev")) {
        $(".prev").classList.add("hide");
        $(".prev").classList.remove("prev");
    }

    $(".act").classList.add("prev");
    $(".act").classList.remove("act", "center_item");
    if ($(".start_here")) {
        $(".start_here").remove();
    }

    $(".next").classList.add("act", "center_item");
    $(".next").classList.remove("next");
    const start_here = document.createElement('p');
    start_here.classList.add("start_here")
    start_here.innerHTML = "Start Here >"
    $(".act").appendChild(start_here);

    /* New Next */

    $(".new-next").classList.remove("new-next");

    const addedEl = document.createElement('li');
    const para = document.createElement('p')
    para.classList.add("box-content");
    para.innerHTML = hideText;
    addedEl.appendChild(para)
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next", "new-next", "rel");
}

function prev() {
    let newNextText;
    newNextText = $(".new-next").innerText;
    $(".new-next").remove();


    /* Step */

    $(".next").classList.add("new-next");

    $(".act").classList.add("next");
    $(".act").classList.remove("act", "center_item");
    if ($(".start_here")) {
        $(".start_here").remove();
    }

    $(".prev").classList.add("act", "center_item");
    $(".prev").classList.remove("prev");
    const start_here = document.createElement('p');
    start_here.classList.add("start_here")
    start_here.innerHTML = "Start Here >"
    $(".act").appendChild(start_here);

    /* New Prev */

    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");

    const addedEl = document.createElement('li');
    const para = document.createElement('p')
    para.classList.add("box-content");
    para.innerHTML = newNextText;
    addedEl.appendChild(para);

    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide", "rel");
}

slide = element => {
    /* Next slide */

    if (element.classList.contains('next')) {
        next();

        /* Previous slide */

    } else if (element.classList.contains('prev')) {
        prev();
    }
}
setTimeout(() => {
    const slider = $(".list"),
        swipe = new Hammer($(".swipe"));

    slider.onclick = event => {
        slide(event.target);
    }

    swipe.on("swipeleft", (ev) => {
        next();
    });

    swipe.on("swiperight", (ev) => {
        prev();
    });
}, 1000)