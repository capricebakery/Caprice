import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AppRoutes from "./routes.jsx"



export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <AppRoutes/>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

