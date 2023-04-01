const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes)


checkBoxes()

function checkBoxes(){
    const triggerButton = (window.innerHeight / 6 ) * 2

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop<triggerButton){
            box.classList.add("show");
            
        }else{
            box.classList.remove("show");
        }
    })
}