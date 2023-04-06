import { changeTheme } from '../redux/theme/themeAction';
import { useSelector, useDispatch } from "react-redux";
const Settings = () => {
    const state = useSelector(state => state.theme)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeTheme( state.theme === 'light' ? 'dark' : 'light'))
    }

    return (
        <div>
            <button onClick={handleClick} style={{color: "red",background:"white",outline: "auto"}}>Toggle Theme</button>
        </div>
    );
};

export default Settings;
