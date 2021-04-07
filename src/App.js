import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <HomePage/>
            <GlobalStyle/>
        </BrowserRouter>
    );
}

export default App;
