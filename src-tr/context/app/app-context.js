// @ts-nocheck
import { createContext, useContext, useEffect, useReducer } from "react"
import { useTranslation } from "react-i18next"

const appReducer = (state , action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CHANGE_LANGUAGE':{
            return {
                ...state ,
                language : action.payload
            }
        }
            
    }
}

const initialState = {
    language : localStorage.getItem('language') || 'fa'
}

const appContext = createContext()

const AppProvider = ({children}) => {
    const [state , dispatch] = useReducer(appReducer , initialState)

    const changeLanguage = (lang) => {
        dispatch({type: 'CHANGE_LANGUAGE' , payload: lang})
    }

    const {i18n} = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(state.language)
        localStorage.setItem('language' , state.language)
        document.dir = state.language === 'fa' ? 'rtl' : 'ltr'
    } , [i18n, state.language])

    return <appContext.Provider value={{...state , changeLanguage}}>
        {children}
    </appContext.Provider>
}

const useAppContext = () => {
    return useContext(appContext)
}

export {useAppContext , AppProvider}