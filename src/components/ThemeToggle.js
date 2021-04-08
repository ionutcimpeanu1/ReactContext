import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';


const ThemeToggle = () => {
    const { themeToggle } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={themeToggle}>Toggle this theme</button>
        </div>
    );
}
 
export default ThemeToggle;

