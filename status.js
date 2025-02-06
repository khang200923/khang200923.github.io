statusElement = document.getElementById("status");

window.onload = function() {
    document.querySelectorAll('.cool1-btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            statusElement.innerHTML = button.getAttribute("status");
        });

        button.addEventListener('mouseleave', () => {

            statusElement.innerHTML = "";
        });
    });
}
