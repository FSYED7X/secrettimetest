import { Box, Grid } from "@material-ui/core";
import Page from "../../../components/Page";
import { useStore } from "../../../store";
import Screen0 from "../../../components/Auth/Register/Screen0";
import Screen1 from "../../../components/Auth/Register/Screen1";
import Screen2 from "../../../components/Auth/Register/Screen2";
import Screen3 from "../../../components/Auth/Register/Screen3";
import Screen4 from "../../../components/Auth/Register/Screen4";

export default function Register() {
  const { screen } = useStore();
  
  return (
    <Page title="Register | Secret Time">
      <Box
        container
        component={Grid}
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={10}
      >
        <Grid item lg={screen === 3 ? 4 : 3} md={7} xs={11}>
          {
            {
              0: <Screen0 />,
              1: <Screen1 />,
              2: <Screen2 />,
              3: <Screen3 />,
              4: <Screen4 />,
            }[screen]
          }
        </Grid>
      </Box>
    </Page>
  );
}
