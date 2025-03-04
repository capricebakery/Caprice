import Banner from "./components/Banner/Banner.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div>
      <Header/>
      <main><Banner/></main>
      <Footer/>
    </div>
  );
}

