var theme = "light";
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";


window.onload = function() {
    const buttons = Array.from(document.getElementsByClassName("bio-text"));
    console.log(buttons);
    const container = document.getElementsByClassName("theme-container")[0];
    var elem = document.getElementById("themeIcon");
    const sidebar = document.getElementById("sidebar");
    const main_body = document.getElementById("maincenter");
    const body = document.body;
    container.addEventListener("click", changeTheme);

    function changeTheme() {
        if (elem.src === moon) {
            SetLight(main_body, sidebar, buttons, elem);
        }
        else {
            SetDark(main_body, sidebar, buttons, elem);
        }
    }
}

function SetDark(main_body, sidebar, container, elem) 
{
    main_body.classList.toggle("dark-mode");
    sidebar.classList.toggle("dark-mode-sidebar");
    container.forEach(button => {
        button.classList.toggle("dark-mode-text");
    });
    elem.src = moon;
}
function SetLight(main_body, sidebar, container, elem) 
{
    main_body.classList.toggle("dark-mode");
    sidebar.classList.toggle("dark-mode-sidebar");
    container.forEach(button => {
        button.classList.toggle("dark-mode-text");
    });
    elem.src = sun;
}