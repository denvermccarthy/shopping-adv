import Header from './components/Layout/Header';
import { ListProvider } from './context/ListContext';
import ListView from './views/List/ListView';

export default function App() {
  return (
    <>
      <ListProvider>
        <Header />
        <ListView />
      </ListProvider>
    </>
  );
}
