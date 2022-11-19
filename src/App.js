import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Main/Form/Form";
import Tabs from "./components/Main/Tabs/Tabs";
import Entries from "./components/Main/Entries/Entries";
import star from "./images/star.svg";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Tabs />
      <Entries />
      <img src={star} alt="empty star"></img>
      <Entries />
      <Footer />
    </>
  );
}

export default App;
