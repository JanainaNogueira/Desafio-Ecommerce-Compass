import AppDownload from "../AppDownload";
import NewsLetterSubscription from "../NewsLetterSubscription";
import classes from "./index.module.css";

const TopFooter = () => {
  return (
    <div className={classes.topfooter}>
      <AppDownload></AppDownload>
      <NewsLetterSubscription></NewsLetterSubscription>
    </div>
  );
};
export default TopFooter;
