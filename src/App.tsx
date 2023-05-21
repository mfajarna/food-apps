import { LogBox} from 'react-native'
import * as React from 'react'
import Route from './utils/routes/Route';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './utils/redux/store';
import Loading from './components/Loading/Loading';
import { mystore } from './utils/redux/toolkit/MyStore';
import { DataDummyMakanan, DataDummyMinuman } from './utils/data/DataDummy';
import { addMyProducts } from './utils/redux/toolkit/MyProductSlice';
import { addMyProductDrinks } from './utils/redux/toolkit/MyProductDrinkSlice';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const MainApp: React.FC = () => {
  // const{isLoading} = useSelector((state) => state.globalReducer);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
      DataDummyMakanan.map(item => {
        dispatch(addMyProducts(item))
      })

      DataDummyMinuman.map(item => {
        dispatch(addMyProductDrinks(item));
      })
    }, [])
    return(
      <>
        <Route />
        {/* {isLoading && <Loading />} */}
      </>
    )
}

const App: React.FC = () => {
  return(
    <Provider store={mystore}>
      <PaperProvider>
        <MainApp />
      </PaperProvider>
    </Provider>

  )
}

export default App