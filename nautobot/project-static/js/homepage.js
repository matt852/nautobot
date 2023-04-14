window.onload = function () {
    // Get a list of all cookies
    var cookies = document.cookie.split(';');
    // Loop through each cookie found
    for(var i = 1; i <= cookies.length; i++) {
        // We only care about cookies with '_homepage_collapsed' in the name
        if (cookies[i - 1].includes("_homepage_collapsed")) {
            // Remove '_hompage_collapsed' string from Cookie name
            var cookie_name = cookies[i - 1].replace("_homepage_collapsed", "")
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
                button.classList.add("collapsed");
                // Remove 'in' class attribute from Panel (this defaults the panel to display)
                panel.classList.remove("in");
            }
            else {
                // Remove 'collapsed' class attribute to Button
                button.classList.remove("collapsed");
                // Add 'in' class attribute from Panel (this defaults the panel to display)
                panel.classList.add("in");
            }
        }
    }
};

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
        document.cookie = `${panel_name}_homepage_collapsed=False; path=/`;
    }
    else {
        // Set the cookie to True
        document.cookie = `${panel_name}_homepage_collapsed=True; path=/`;
    }
}