import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hello from "./Component/Hello";

function App() {
  return (
    <div>
      <Header />
      <Hello name="John" />
      <Hello name="Jack" />
      <Hello name="Joe" />
      <Footer />
    </div>
  );
}

export default App;
