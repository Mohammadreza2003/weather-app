import React, { useContext, useState } from "react";
import "./Settings.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { themeContext } from "../App";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/settings/settingActions";

function Settings() {
  const themee = useSelector((state) => state.counter.theme);
  const counterDispatch = useDispatch();
  const theme = useContext(themeContext);
  console.log(theme);
  const [currentDarkMode, setCurrentDarkMode] = useState(
    counterDispatch(changeTheme("dark"))
  );
  const handleChange = (event) => {
    setCurrentDarkMode(event.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      className={" contean" + (themee === "dark" ? " contean-darkmode" : " ")}
    >
      <div
        className={
          "back-to-home " + (themee === "dark" ? "  borderDarkMode" : " ")
        }
      >
        <Link className={"Lik"} to="/">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={"back " + (themee === "dark" ? " backDarkMode" : " ")}
          />
          <p className={"Home " + (themee === "dark" ? " textDarkMode" : " ")}>
            Home
          </p>
        </Link>
        <h1 className={"h1 " + (themee === "dark" ? " h1-DarkMode" : " ")}>
          Setting
        </h1>
      </div>
      <br />
      <div
        className={
          "backgroundForm " + (themee === "dark" ? " backgroundFormDark" : " ")
        }
      >
        <p
          className={
            "Theme " + (themee === "dark" ? " textDarkModeTheme" : " ")
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
                  "changeTheme " + (themee === "dark" ? " textDark" : " ")
                }
              >
                Light
              </spam>
            </MenuItem>
            <br />
            <MenuItem value={"dark"}>
              <spam
                className={
                  "changeTheme " + (themee === "dark" ? " textDark" : " ")
                }
              >
                Dark
              </spam>
            </MenuItem>
          </Select>
        </FormControl>

        <button
          className={"but " + (themee === "dark" ? " butDark" : " ")}
          onClick={() => {
            // theme.setdarkMode(currentDarkMode);
            counterDispatch(changeTheme("dark"));
          }}
        >
          Save
        </button>
      </div>
    </Box>
  );
}
export default Settings;
