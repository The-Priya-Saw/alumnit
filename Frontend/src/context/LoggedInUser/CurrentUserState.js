import { useState } from "react"
import CurrentUserContext from "./CurrentUserContext"

const CurrentUserState = (props) => {

    const [state, setState] = useState(undefined);
    return <CurrentUserContext.Provider value={{state, setState}}>
        {props.children}
    </CurrentUserContext.Provider>
}

export default CurrentUserState;