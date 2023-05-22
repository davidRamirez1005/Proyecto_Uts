// HEADER APARECER

setTimeout(() => 
    document.querySelector("header").style.transform = "translate(0px)", 500)

// EFECTO OPACITY

setTimeout(() => {
    document.querySelectorAll(".efectOpacity").forEach((el) => {

        el.style.opacity = "1"
    })
}, 1000)