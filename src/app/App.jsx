import { Provider } from 'react-redux'
import AppRoutes from '../utils/routes/AppRoutes'
import store from '../Redux/store'

function App() {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    )
}

export default App
