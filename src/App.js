import "./styles.css";
import Badge from "./components/badge/index";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Badge label="Unread" value={4} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
