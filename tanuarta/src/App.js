import logo from './logo.svg';
import './App.scss';
import Home from './Pages/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (<>
    <Home />
    <Helmet>
      <script data-goatcounter="https://tanuarta.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
    </Helmet>
  </>);
}

export default App;
