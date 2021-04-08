import { useContext} from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';

 
const BookList = () => {
    const{isLightTheme,light,dark}=useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext);
    return ( 
        <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
                <ul>
                    {books.map(e=>{
                        return(
                            <li key={e.id} style={{background:theme.ui}}>{e.title}</li>
                        )
                    })};
                   
                </ul>
            </div>
    );
}
 
export default BookList;

