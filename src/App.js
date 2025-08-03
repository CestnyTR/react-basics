import React from 'react'
import AppRouter from "./router/AppRouter"
import PrivateRouter from "./router/PrivateRouter"
const App = () => {
    return (
        <div className='appWrapper'>
            <AppRouter />
            <PrivateRouter />
        </div>
    )
}

export default App