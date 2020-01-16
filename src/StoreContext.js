import * as React from "react";
import App from "./App";


const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            <App/>
        </StoreContext.Provider>
    )
};

export default StoreContext;