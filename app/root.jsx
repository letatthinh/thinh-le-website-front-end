import Body from '@components/body.jsx'
import store from '@redux/store.js'
import {Provider} from 'react-redux'
import {
  Links,
  Meta,
  Outlet
} from 'react-router'
import './app.css'

export function Layout({children}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <Provider store={store}>
        <Body>
          {children}
        </Body>
      </Provider>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

// When other route module APIs throw, the route module ErrorBoundary will render
// instead of the route component.
export function ErrorBoundary({error}) {
  // TODO: create wrong routing page
  return (
    <>{error}</>
  )
}
