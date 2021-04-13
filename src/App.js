import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "New Television",
      amount: 32000,
      date: new Date(2021, 1, 27),
    },
    {
      id: 2,
      title: "Mutual Funds",
      amount: 5000,
      date: new Date(2021, 2, 8),
    },
    {
      id: 3,
      title: "Property Tax",
      amount: 2470,
      date: new Date(2021, 4, 19),
    },
    {
      id: 4,
      title: "House Rent",
      amount: 6500,
      date: new Date(2020, 12, 14),
    },
  ];
  return (
    <Card className="App">
      <header className="App-header">
        <h3>Expense Tracker</h3>
        <Expenses items={expenses} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Card>
  );
};

export default App;
