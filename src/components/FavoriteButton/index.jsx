import classes from "./index.module.css";
import { useState } from "react";

const FavoriteButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLikeClick}
      className={isLiked ? classes.likedButton : classes.unlikedButton}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="24"
        viewBox="0 0 18 16"
        fill="none"
      >
        <path
          d="M13.1484 0.0975342C11.6511 0.0975342 10.3385 0.765186 9.35258 2.02835C9.2211 2.19682 9.10389 2.36536 9 2.52859C8.89611 2.36532 8.7789 2.19682 8.64742 2.02835C7.66146 0.765186 6.34887 0.0975342 4.85156 0.0975342C2.02303 0.0975342 0 2.46591 0 5.30783C0 8.55743 2.66333 11.62 8.63568 15.2381C8.74765 15.3059 8.87382 15.3398 9 15.3398C9.12618 15.3398 9.25235 15.3059 9.36432 15.2381C15.3367 11.6201 18 8.55746 18 5.30787C18 2.46742 15.9786 0.0975342 13.1484 0.0975342ZM14.736 9.35414C13.4926 10.7415 11.6137 12.2023 9 13.8128C6.38631 12.2023 4.50738 10.7415 3.26401 9.35417C2.01393 7.95932 1.40625 6.63575 1.40625 5.30787C1.40625 3.26163 2.78909 1.50378 4.85156 1.50378C5.90189 1.50378 6.79746 1.96046 7.51342 2.86117C8.0859 3.58148 8.32711 4.32528 8.3288 4.33059C8.42038 4.62432 8.69235 4.8244 9.00004 4.8244C9.30772 4.8244 9.57969 4.62436 9.67127 4.33059C9.67349 4.32349 9.90745 3.60289 10.4611 2.89358C11.181 1.97136 12.0851 1.50375 13.1484 1.50375C15.2131 1.50375 16.5938 3.26328 16.5938 5.30783C16.5938 6.63572 15.9861 7.95928 14.736 9.35414Z"
          fill={isLiked ? "white" : "gray"}
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;
