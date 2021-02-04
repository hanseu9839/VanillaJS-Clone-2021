const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    console.log(currentClass);
}
function init() {

    title.addEventListener("click", handleClick)
}
init();
