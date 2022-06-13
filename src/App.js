import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';

function App() {
  return (
    <div className="App" >
      <AppHeader />
      <AppMenu />
      <AppFooter />
    </div>
  );
}
export default App;