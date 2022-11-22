import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Main/Form/Form";
import EntriesSection from "./components/Main/EntriesSection/EntriesSection";

function App() {
  return (
    <>
      <Header />
      <Form />
      <EntriesSection />
      <Footer />
    </>
  );
}

export default App;
