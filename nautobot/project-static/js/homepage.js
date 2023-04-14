window.onload = function () {
    // Get a list of all cookies
    var cookies = document.cookie.split(';');
    // Loop through each cookie found
    for(var i = 1; i <= cookies.length; i++) {
        // We only care about cookies with '_homepage_collapse' in the name
        if (cookies[i - 1].includes("_homepage_collapse")) {
            // Remove '_hompage_collapse' string from Cookie name
            var cookie_name = cookies[i - 1].replace("_homepage_collapse", "")
            // Split on '=' sign and get the name of the Div only. Trim whitespace
            var name_value = cookie_name.split("=")[0].trim()
            // Split on '=' sign and get value (True/False) only. Trim whitespace
            var cookie_value = cookie_name.split("=")[1].trim()
            // Find the corresponding button element on the homepage
            var button = document.getElementById(name_value + "_btn");
            // Find the corresponding content panel element on the homepage
            var panel = document.getElementById(name_value + "_content");

            // If the cookie is set to hide the panel, do so here
            if (cookie_value == "True") {
                // Add 'collapsed' class attribute to Button
                // button.classList.add("collapsed");
                // Remove 'in' class attribute from Panel (this defaults the panel to display)
                panel.classList.remove("in");
                hidePanel(button);
                console.log(cookies[i - 1]);
            }
            else {
                // Remove 'collapsed' class attribute to Button
                // button.classList.remove("collapsed");
                // Add 'in' class attribute from Panel (this defaults the panel to display)
                panel.classList.add("in");
                showPanel(button);
            }
        }
    }
};

// TODO: Fix button not initially toggling the FIRST time I click it, but works every other time
 
// Toggle homepage Div panel on button click
function toggleHomepagePanel(item) {
    // Get the dynamic page button element using the ID of the button that was clicked
    var button = document.getElementById($(item).attr("id"));
    // Panel name with "_btn" stripped, so we can save it generically in the cookie later,
    //  then reference it for both _btn and _content
    var panel_name = button.id.replace("_btn", "");
    // var panel = document.getElementById(panel_name + "_content");

    // This is actually the state when the button is clicked, so we take the inverse of it
    // Eg: If collapsed is True, that means it WAS collapsed, and the user clicked it to expand it
    if ($(button).hasClass("collapsed")) {
        // Set the cookie to False
        console.log("True");
        document.cookie = `${panel_name}_homepage_collapse=False; path=/`;
        hidePanel(button);
    }
    else {
        console.log("False");
        // Set the cookie to True
        document.cookie = `${panel_name}_homepage_collapse=True; path=/`;
        showPanel(button);
    }
}

function hidePanel(button) {
    button.classList.remove("btn-danger");
    button.classList.remove("glyphicon-minus");
    button.classList.add("btn-success");
    button.classList.add("glyphicon-plus");
}

function showPanel(button) {
    button.classList.remove("btn-success");
    button.classList.remove("glyphicon-plus");
    button.classList.add("btn-danger");
    button.classList.add("glyphicon-minus");
}