import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../App";
import * as React from "react";

function Next(props) {
  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      {theme.palette.mode} mode
      <Button variant="contained" onClick={colorMode.toggleColorMode}>
        Next
      </Button>
    </>
  );
}

export default Next;