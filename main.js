let showTime = performance.now();
const copiedModal = document.querySelector("#copied-modal");
const HIDE_DELAY = 1000;

document.body.addEventListener("click", e => {
    if(e.target.classList.contains("copyable")) {
        navigator.clipboard.writeText(e.target.textContent);

        showTime = performance.now();
        copiedModal.classList.add("show");

        e.stopPropagation();
    }
})

document.body.addEventListener("mousemove", e => {
    if(copiedModal.classList.contains("show")) {
        if(performance.now() - showTime > HIDE_DELAY) {
            copiedModal.classList.remove("show");
        }
    }
});