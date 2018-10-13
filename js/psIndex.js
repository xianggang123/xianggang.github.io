document.addEventListener("click", (event) => {
    console.log(event.target.nextElementSibling)
});

const figureList = document.querySelector(".list");


//figureList.addEventListener("click", (event) => {
//    //    console.log(event.target.src);
//    if (event.target.tagName == "IMG") {
//        let src = event.target.src.substring(0, 35);
//        let caption = event.target.nextElementSibling;
//        if (event.target.src.slice(-3) == "jpg") {
//            event.target.src = src + "png";
//            caption.textContent = "效果图";
//        } else if (event.target.src.slice(-3) == "png") {
//            event.target.src = src + "jpg";
//            caption.textContent = "原图";
//        }
//    }
//
//});


figureList.addEventListener("click", (event) => {
    if (event.target.tagName == "IMG") {
        let src = event.target.src.split(".");
        let caption = event.target.nextElementSibling;
        if (event.target.src.slice(-3) == "jpg") {
            src[src.length - 1] = "png"
            let output = src.join(".")
            event.target.src = output
            caption.textContent = "效果图";
        } else if (event.target.src.slice(-3) == "png") {
            src[src.length - 1] = "jpg"
            let output = src.join(".")
            event.target.src = output
            caption.textContent = "原图";
        }
    }

});