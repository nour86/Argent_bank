import { RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import AppRoutes from '../utils/routes/AppRoutes'
import store from '../Redux/store'
import router from '../utils/routes/AppRoutes'

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
