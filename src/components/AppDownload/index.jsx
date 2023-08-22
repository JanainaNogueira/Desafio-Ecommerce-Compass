import GooglePlayLogo from "../../_assets/img/gplay.png";
import AppStoreLogo from "../../_assets/img/apple.png";
import classes from "./index.module.css";

const AppDownload = () => {
  return (
    <div className={classes.download}>
      <h2>Baixe nosso App</h2>
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
