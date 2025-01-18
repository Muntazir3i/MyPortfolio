import { createContext, useContext } from "react";

export let ThemeSwitch = createContext();

export let ThemeProvider = ThemeSwitch.Provider;

export default function useTheme(){
    return useContext(ThemeSwitch)
}