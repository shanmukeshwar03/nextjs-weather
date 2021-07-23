import 'styles/globals.css'
import 'styles/home.css'
import 'styles/temperature.css'
import 'styles/forecast.css'
import 'styles/advice.css'
import 'styles/modal.css'
import store from 'redux/store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
