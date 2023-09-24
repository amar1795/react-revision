import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionLists from './components/TransactionLists';
import AddTransactionList from './components/AddTransactionList';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionLists/>
      <AddTransactionList/>
    </GlobalProvider>
  );
}

export default App;
