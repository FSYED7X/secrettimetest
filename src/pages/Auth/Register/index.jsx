import { Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

export default function Register() {
  const [screen, setScreen] = useState(0);
  return (
    <div>
      <Box
        container
        component={Grid}
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={10}
      >
        <Grid item lg={screen === 2 ? 4 : 3} md={7} xs={11}>
          {
            {
              0: <Screen1 setScreen={setScreen} />,
              1: <Screen2 setScreen={setScreen} />,
              2: <Screen3 setScreen={setScreen} />,
              3: <Screen4 setScreen={setScreen} />,
            }[screen]
          }
        </Grid>
      </Box>
    </div>
  );
}
