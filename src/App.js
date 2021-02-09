import "./App.css";
import "./css/main.css";
import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { PreguntasFrecuentes } from "./components/PreguntasFrecuentes/PreguntasFrecuentes";
import { Envios } from "./components/Envios/Envios";
import { Contacto } from "./components/Contacto/Contacto";
import { Catalogo } from "./components/Catalogo/Catalogo";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/catalogo">
              <Catalogo />
            </Route>
            <Route exact path="/envios">
              <Envios />
            </Route>
            <Route exact path="/contacto">
              <Contacto />
            </Route>
            <Route exact path="/preguntasFrecuentes">
              <PreguntasFrecuentes />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetail />
            </Route>
          </Switch>
        </CartProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
