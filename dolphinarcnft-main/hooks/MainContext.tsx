import { useState, createContext } from 'react'
const MainContext = createContext<any>('')

enum viewState {
    standard,
    details,
}

const MainContextProvider = ({ children }) => {
    const [view, setView] = useState(viewState.standard)
    const value = {
        view,
        setView,
    }
    return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContextProvider
