import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ClearIcon } from "assets/Images";
import appStyles from "./SelectInput.module.scss";

const useStyles = makeStyles(() => ({
  capitalize: {
    textTransform: "capitalize",
  },
}));

const SelectInput = (props) => {
  // PROPS
  const {
    label = "",
    options = [],
    handleChange = () => {},
    value,
    startAdornment = React.Fragment,
    handleClear = () => {},
  } = props;

  const [selectedOption, setSelectedOption] = useState({});

  const classes = useStyles();

  return (
    <FormControl variant="outlined">
      <Select
        labelId="simple-select-outlined-label"
        id="simple-select-outlined"
        value={value}
        onChange={(e) => {
          const selectedValue = e.target.value;
          setSelectedOption(options.find((option) => option.id === selectedValue));
          handleChange(selectedValue);
        }}
        displayEmpty
        renderValue={(val) => {
          return !val ? (
            <span className={appStyles.label}>{label}</span>
          ) : (
            selectedOption?.displayName
          );
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        startAdornment={<div className={appStyles.startAdornment}>{startAdornment}</div>}
        endAdornment={
          <div
            role="button"
            onClick={handleClear}
            onKeyDown={() => {}}
            tabIndex="0"
            className={appStyles.clearIconCnt}
          >
            <ClearIcon />
          </div>
        }
        className={classes.capitalize}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.displayName}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
