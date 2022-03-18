import ReactDOM from "react-dom";
import React from "react";

function change_page(page) {
    ReactDOM.render(
        page,
        document.getElementById('App')
    )
}
export default change_page;