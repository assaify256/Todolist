import styles from "./App.module.css";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/footer.jsx";


function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
