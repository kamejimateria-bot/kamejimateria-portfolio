import Navi from "./Navi";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h1>
          PORTFOLIO<small>kamejimateria-designs</small>
        </h1>
      </header>

      <Navi />

      <main className="container">{children}</main>
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
