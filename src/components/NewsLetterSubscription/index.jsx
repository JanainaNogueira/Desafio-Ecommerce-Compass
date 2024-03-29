import classes from "./index.module.css";

const NewsLetterSubscription = () => {
  return (
    <div className={classes.subscription}>
      <div className={classes.formContainer}>
        <p className={classes.paragraph}>
          Você pode cancelar a inscrição a qualquer momento
        </p>
        <div className={classes.subForm}>
          <button className={classes.subButton}>Inscrever</button>
          <input
            className={classes.subInput}
            type="text"
            name=""
            placeholder="Digite o e-mail"
          />
        </div>
      </div>
      <div className={classes.newsDescription}>
        <div className={classes.newsTexts}>
          <h2 className={classes.newsHeader}>Assine a newsletter</h2>
          <p className={classes.newsParagraph}>
            Cadastre-se agora e ganhe 10% de desconto na sua próxima compra!
          </p>
        </div>
        <div>
          <button className={classes.newsButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M26.866 28.2772H5.13433C3.83377 28.2755 2.58697 27.7581 1.66742 26.8383C0.747866 25.9186 0.230639 24.6717 0.229187 23.3712V9.62853C0.230639 8.32805 0.747896 7.08125 1.66747 6.16168C2.58705 5.2421 3.83385 4.72484 5.13433 4.72339H26.866C28.1666 4.72484 29.4134 5.24207 30.3332 6.16162C31.2529 7.08117 31.7703 8.32797 31.772 9.62853V23.3712C31.7706 24.6719 31.2532 25.9189 30.3335 26.8387C29.4137 27.7584 28.1667 28.2758 26.866 28.2772ZM5.13433 7.0091C4.43984 7.00983 3.774 7.28604 3.28292 7.77712C2.79184 8.2682 2.51563 8.93404 2.5149 9.62853V23.3712C2.51539 24.0658 2.79149 24.7319 3.28259 25.2232C3.7737 25.7144 4.43968 25.9908 5.13433 25.9915H26.866C27.5607 25.9908 28.2268 25.7145 28.718 25.2232C29.2093 24.732 29.4856 24.0659 29.4863 23.3712V9.62853C29.4854 8.93396 29.209 8.26812 28.7177 7.77706C28.2265 7.28601 27.5606 7.00983 26.866 7.0091H5.13433Z"
                fill="#62D0B6"
              />
              <path
                d="M15.9863 19.5763C15.0274 19.5858 14.0933 19.2717 13.3349 18.6849L1.11272 8.94501C0.875689 8.75599 0.723455 8.48056 0.689506 8.1793C0.655556 7.87804 0.742672 7.57564 0.931688 7.33861C1.1207 7.10158 1.39614 6.94935 1.6974 6.9154C1.99865 6.88145 2.30106 6.96856 2.53809 7.15758L14.7566 16.8975C15.1175 17.1535 15.5494 17.2905 15.9919 17.2893C16.4344 17.2882 16.8656 17.1489 17.2252 16.8911L29.2928 7.16215C29.5286 6.97192 29.8304 6.88316 30.1316 6.9154C30.4329 6.94763 30.709 7.09822 30.8992 7.33404C31.0895 7.56985 31.1782 7.87158 31.146 8.17283C31.1137 8.47409 30.9632 8.75021 30.7273 8.94044L18.6633 18.6693C17.8997 19.2665 16.9557 19.5863 15.9863 19.5763Z"
                fill="#62D0B6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsLetterSubscription;
