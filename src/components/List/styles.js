import { makeStyles } from "@material-ui/core/styles";
import { colors } from "./../../style-constants";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
    color: colors.primary3,
    backgroundColor: colors.primary1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  title: {
    textTransform: "capitalize",
    color: colors.primary3,
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
  grid: {
    gridTemplateColumns: "repeat(3,1fr)",
  },
}));
