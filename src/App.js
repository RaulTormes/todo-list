import "@fortawesome/fontawesome-free/css/all.css";
import { Form } from "./Components/Form";
import { List } from "./Components/List";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div
      className="flex  h-screen justify-center  items-center overflow-hidden"
      id="App"
    >
      <div className="flex flex-col rounded-lg items-center w-[35%] min-h-[80%] h-[80%] max-h-[80%] shadow-indigo-800 shadow-2xl ">
        <Header />
        <main className="flex flex-col h-[80%] gap-2 w-full items-center ">
          <Form />
          <List />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
