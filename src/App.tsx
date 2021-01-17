import Header from "./Header";
import Home from "./Home";
import Products from "./Products";

function App() {
  const { pathname } = window.location;
  const Page = pathname === "/Home" ? Home : Products;

  return (
    <section>
      <Header></Header>
      <Page></Page>
    </section>
  );
}

export default App;
