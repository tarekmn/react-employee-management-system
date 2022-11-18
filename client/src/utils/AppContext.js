/* eslint-disable react-hooks/exhaustive-deps */
import Cookie from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AppProvider = (props) => {
  const [ appState, setAppState ] = useState({ employee: null });

  const lookupUser = async () => {
    const authCheck = await fetch("/api/employee/lookup")
    const checkResult = await authCheck.json()
    if( checkResult && checkResult.result === "success" ){
      setAppState({...appState, employee: checkResult.payload})
    }
  }

  const logout = () => {
    Cookie.remove("auth-token")
    window.location.href = "/login"
  }

  useEffect(() => {
    if( !appState.employee ) lookupUser()
  }, [appState.employee])

  return (
    <AppContext.Provider value={{ appState, setAppState, logout }}>
      { props.children }
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer
export { AppContext, AppConsumer, AppProvider }