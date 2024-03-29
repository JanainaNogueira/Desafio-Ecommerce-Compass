import GooglePlayLogo from "../../assets/img/gplay.png";
import AppStoreLogo from "../../assets/img/apple.png";
import classes from "./index.module.css";

const AppDownload = () => {
  return (
    <div className={classes.download}>
      <h2 className={classes.downloadTitle}>Baixe nosso App</h2>
      <div className={classes.apps}>
        <img
          src={GooglePlayLogo}
          alt="googleplaylogo"
          className={classes.appIcon}
        />
        <img
          src={AppStoreLogo}
          alt="appstorelogo"
          className={classes.appIcon}
        />
      </div>
    </div>
  );
};

export default AppDownload;
