import { Button } from 'react-bootstrap';
import { Provider, useDispatch } from 'react-redux';
import './App.css';
import './styles/styles.scss';
import { getNewsAsync } from './actions/news';
import store from './store/store';
import { AppContainer } from './containers/AppContainer';


function App() {

  return (
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  );
}

export default App;
