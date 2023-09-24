import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionLists from './components/TransactionLists';
import AddTransactionList from './components/AddTransactionList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionLists/>
      <AddTransactionList/>
    </div>
  );
}

export default App;
