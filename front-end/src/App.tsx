import { FooterComponent } from "./components/PermanentComponents/FooterComponent";
import { HeaderComponent } from "./components/PermanentComponents/HeaderComponent";
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
