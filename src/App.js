import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";


export const App = () => {
    const history = createBrowserHistory();
    return(
        <Router history={history}>
            <HomeScreen />
        </Router>

    )
}