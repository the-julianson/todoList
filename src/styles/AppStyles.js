import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  header: {
    textAlign: "center",
    "& h1": {
      color: "#2c3e50",
      margin: "5vh 0 0 0",
      fontSize: "4rem",
      fontWeight: "300",
      "& span": {
        fontWeight: "700"
      }
    },
    "& h2": {
      color: "#2c3e50",
      fontSize: "1.15rem",
      fontWeight: "300"
    }
  }
});
