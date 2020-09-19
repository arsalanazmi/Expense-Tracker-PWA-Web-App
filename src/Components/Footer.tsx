import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
    anchorTag: {
        color:'black',
        '&:hover': {
            color: '#dbdddd',
          },
    }
}))

export const Footer = () => {
    const classes = useStyles();
  return (
    <div className="footer">
      <h6>Copyright &copy; 2020<br/> Follow on: {" "}
          <a
            className={classes.anchorTag}
            href="https://github.com/arsalanazmi/Expense-Tracker-PWA-Web-App.git"
            >
            Github {" "}
            <GitHubIcon />
          </a> <br/>Powered By: Arsalan Raza Azmi</h6>
    </div>
  );
};