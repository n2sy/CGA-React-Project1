import { createContext, useState } from "react";


const LoginContext = createContext(
    {
        isLogged : false,
        signin : () => {},
        signout : () => {}
    }
)

export function LogniContextProvider(props) {
    const [isLogged, setIsLogged] = useState(false);

    function seConnecter(login, mdp) {
        if(login == "nidhal@g.com" && mdp == "azerty") {
            setIsLogged(true);
            return true;
        }
        else {
            setIsLogged(false);
            return false;
        }
    }

    function seDeconnecter() {
        setIsLogged(false);
    }

    const context =  {
        isLogged : isLogged,
        signin : seConnecter,
        signout : seDeconnecter
    }

    return <LoginContext.Provider value={context}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContext;