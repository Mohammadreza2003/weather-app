import React, { useContext, useState } from 'react';
import "./Settings.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { themeContext } from "../App";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
function Settings() {
  const theme = useContext(themeContext)
  const [currentDarkMode, setCurrentDarkMode] = useState(theme.darkMode);
  const handleChange = (event) => {
    setCurrentDarkMode(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }} className={(" contean") + (theme.darkMode === "dark" ? " contean-darkmode" : " ")}>
      <div className={("back-to-home ") + (theme.darkMode === "dark" ? "  borderDarkMode" : " ")}>
        <Link className={"Lik"} to="/">
          <FontAwesomeIcon icon={faChevronLeft} className={"back " + (theme.darkMode === "dark" ? " backDarkMode" : " ")} />
          <p className={("Home ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>Home</p>
        </Link>
        <h1 className={("h1 ") + (theme.darkMode === "dark" ? " h1-DarkMode" : " ")}>Setting</h1>
      </div>
      <br />
      <div className={"backgroundForm " + (theme.darkMode === "dark" ? " backgroundFormDark" : " ")}>
        <p className={("Theme ") + (theme.darkMode === "dark" ? " textDarkModeTheme" : " ")}>Theme:</p>
        <FormControl className={"form"}>
          <InputLabel className={"label"} id="demo-simple-select-label">Light</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentDarkMode}
            label="Light"
            onChange={handleChange}
          >
            <MenuItem value={"light"}><spam className={"changeTheme " +  (theme.darkMode === "dark" ? " textDark" : " ")}>Light</spam></MenuItem>
            <br />
            <MenuItem value={"dark"}><spam className={"changeTheme " +  (theme.darkMode === "dark" ? " textDark" : " ")}>Dark</spam></MenuItem>
          </Select>
        </FormControl>
        {currentDarkMode !== theme.darkMode && (
          <button className={"but " + (theme.darkMode === "dark" ? " butDark" : " ")} onClick={() => { theme.setdarkMode(currentDarkMode) }}>Save</button>
        )}
      </div>
    </Box>
  );
}
export default Settings;
