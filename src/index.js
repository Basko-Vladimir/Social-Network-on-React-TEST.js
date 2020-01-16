import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

let rerender = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>, document.getElementById('root')
    )
};

rerender(store.getState());

store.subscribe(() => {
    rerender(store.getState());
});

