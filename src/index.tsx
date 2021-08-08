import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './themes'

/* styles */
import './index.css'
import './styles/main.css'

/* Redux*/
import store from './flux/store'

/* Components */
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={'loanding...'}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
