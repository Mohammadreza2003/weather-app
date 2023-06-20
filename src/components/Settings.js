import React, { useState } from "react";
import "./Settings.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/settings/settingActions";

function Settings() {
  const theme = useSelector((state) => state.changeTheme.theme);
  const dispatch = useDispatch();
  const [currentDarkMode, setCurrentDarkMode] = useState(theme);
  const handleChange = (e) => {
    setCurrentDarkMode(e.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      className={" contean" + (theme === "dark" ? " contean-darkmode" : " ")}
    >
      <div
        className={
          "back-to-home " + (theme === "dark" ? "  borderDarkMode" : " ")
        }
      >
        <Link className={"Lik"} to="/">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={"back " + (theme === "dark" ? " backDarkMode" : " ")}
          />
          <p className={"Home " + (theme === "dark" ? " textDarkMode" : " ")}>
            Home
          </p>
        </Link>
        <h1 className={"h1 " + (theme === "dark" ? " h1-DarkMode" : " ")}>
          Setting
        </h1>
      </div>
      <br />
      <div
        className={
          "backgroundForm " + (theme === "dark" ? " backgroundFormDark" : " ")
        }
      >
        <p
          className={
            "Theme " + (theme === "dark" ? " textDarkModeTheme" : " ")
          }
        >
          Theme:
        </p>
        <FormControl className={"form"}>
          <InputLabel className={"label"} id="demo-simple-select-label">
            Light
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentDarkMode}
            label="Light"
            onChange={handleChange}
          >
            <MenuItem value={"light"}>
              <spam
                className={
                  "changeTheme " + (theme === "dark" ? " textDark" : " ")
                }
              >
                Light
              </spam>
            </MenuItem>
            <br />
            <MenuItem value={"dark"}>
              <spam
                className={
                  "changeTheme " + (theme === "dark" ? " textDark" : " ")
                }
              >
                Dark
              </spam>
            </MenuItem>
          </Select>
        </FormControl>

        <button
          className={"but " + (theme === "dark" ? " butDark" : " ")}
          onClick={() => {
            
            dispatch(changeTheme(currentDarkMode));
          }}
        >
          Save
        </button>
      </div>
    </Box>
  );
}
export default Settings;
