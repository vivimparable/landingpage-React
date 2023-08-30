import  {BrowserRouter} from 'react-router-dom';
import RoutesMain from './routes/RoutesMain';
import Navegador from './sections/Navegador';
import Provider  from '../src/context/dataProvider';
function App() {
  return (
    <div >
      <Provider>
        <BrowserRouter>
            <Navegador/>
            <RoutesMain/>
        
        </BrowserRouter>
        </Provider>
      
    </div>
  );
}

export default App;
