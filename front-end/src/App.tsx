import { FooterComponent } from "./components/HeaderComponent/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Router></Router>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
