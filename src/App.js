import { Fragment } from "react";
import "./App.css";
import NavigationBar from "./layouts/header/NavigationBar";
import Shop from "./pages/Shop";

function App() {
    return (
        <Fragment>
            <NavigationBar/>
            <Shop/>
        </Fragment>
    );
}

export default App;
