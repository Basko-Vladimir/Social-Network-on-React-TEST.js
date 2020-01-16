import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {Provider} from "./StoreContext";

let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}/>
        </BrowserRouter>, document.getElementById('root')
    )
};

rerender();

store.subscribe(() => {
    rerender();
});

