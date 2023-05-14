import { LogBox} from 'react-native'
import * as React from 'react'
import Route from './utils/routes/Route';
import { Provider, useSelector } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './utils/redux/store';
import Loading from './components/Loading/Loading';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const MainApp: React.FC = () => {
  const{isLoading} = useSelector((state) => state.globalReducer);
    return(
      <>
        <Route />
        {isLoading && <Loading />}
      </>
    )
}

const App: React.FC = () => {
  return(
    <Provider store={store}>
      <PaperProvider>
        <MainApp />
      </PaperProvider>
    </Provider>

  )
}

export default App