import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectInput = (props) => {
  // PROPS
  const { label = "", options = [], handleChange = () => {}, value } = props;

  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="simple-select-outlined-label"
        id="simple-select-outlined"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        label={label}
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
      >
        {options.map((option) => {
          return (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
