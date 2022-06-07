import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';
import {Table} from 'react-bootstrap/Table';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppMenu />
      <AppFooter />
    </div>
  );
}

export default App;
