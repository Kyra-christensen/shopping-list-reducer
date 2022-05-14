import { ToGetProvider} from './context/ListProvider';
import Header from './components/Header';
import ShoppingList from './views/ShoppingList';

export default function App() {
  return (
    <ToGetProvider>
      <Header/>
      <ShoppingList/>
    </ToGetProvider>
  );
}
