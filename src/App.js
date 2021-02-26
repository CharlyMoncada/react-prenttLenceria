import "./App.css";
import "./sass/main.scss";
import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { PreguntasFrecuentes } from "./components/PreguntasFrecuentes/PreguntasFrecuentes";
import { Envios } from "./components/Envios/Envios";
import { Contacto } from "./components/Contacto/Contacto";
import { CartProvider } from "./contexts/CartContext";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemsListContainer from "./containers/ItemListContainer";
import HomeContainer from "./containers/HomeContainer";
import CartContainer from "./containers/CartContainer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />} />
          <Route exact path="/catalogo" component={ItemsListContainer} />
          <Route exact path="/envios" component={Envios} />
          <Route exact path="/contacto" component={Contacto} />
          <Route
            exact
            path="/preguntasFrecuentes"
            component={PreguntasFrecuentes}
          />
          <Route exact path="/item/:itemId" component={ItemDetailContainer} />
          <Route exact path="/carrito" component={CartContainer} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
