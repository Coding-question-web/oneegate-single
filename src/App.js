import { BrowserRouter as Router, Route } from "react-router-dom";
import "typeface-dm-sans";
import HomePage from "./pages/home";

export default function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={HomePage} exact />
      </main>
    </Router>
  );
}
