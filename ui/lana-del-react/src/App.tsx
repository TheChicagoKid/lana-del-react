import './App.css'
import { LanaAppRouter } from "./router/Router.tsx";
import useStartupSound from "./hooks/useStartupSound.tsx";

export const App = () => {
    useStartupSound('../lana-cola.mp3');
    return <LanaAppRouter />
}

export default App;