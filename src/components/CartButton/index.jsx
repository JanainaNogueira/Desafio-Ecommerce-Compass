import classes from "./index.module.css";
import { useState } from "react";

const CartButton = () => {
  const [isOnCart, setIsOnCart] = useState(false);

  const handleCartClick = () => {
    setIsOnCart(!isOnCart);
    console.log(isOnCart);
  };

  return (
    <button
      onClick={handleCartClick}
      className={isOnCart ? classes.cartButtonActive : classes.cartButton}
    >
      <p>Carrinho</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M2.54229 3.5637C2.53235 3.45368 2.54543 3.3428 2.58071 3.23812C2.61599 3.13344 2.67269 3.03726 2.74719 2.9557C2.82169 2.87414 2.91237 2.809 3.01344 2.76442C3.11451 2.71984 3.22376 2.6968 3.33422 2.69678H12.976C13.0951 2.69683 13.2127 2.72362 13.32 2.77518C13.4274 2.82673 13.5218 2.90173 13.5962 2.99465C13.6707 3.08757 13.7234 3.19602 13.7504 3.31202C13.7773 3.42801 13.7779 3.54858 13.7521 3.66482L12.9374 7.33702C12.7972 7.96809 12.446 8.53247 11.9418 8.93696C11.4375 9.34144 10.8104 9.56182 10.1639 9.5617H5.67934C4.97022 9.56174 4.28673 9.29655 3.76321 8.81823C3.2397 8.33992 2.91402 7.68309 2.8502 6.97685L2.54229 3.5637ZM3.7069 3.83298L3.98186 6.87459C4.02017 7.29853 4.21573 7.69279 4.53008 7.9798C4.84443 8.26682 5.25481 8.42581 5.68048 8.4255H10.1651C10.5528 8.42541 10.929 8.29307 11.2314 8.05035C11.5338 7.80763 11.7444 7.46903 11.8285 7.09047L12.5522 3.83298H3.7069Z"
          fill={isOnCart ? "white" : "black"}
        />
        <path
          d="M0.192703 0.790024C0.192703 0.639355 0.252556 0.494856 0.359096 0.388317C0.465636 0.281777 0.610134 0.221924 0.760804 0.221924H2.7537C2.89266 0.222065 3.02675 0.273134 3.1306 0.365468C3.23445 0.457802 3.30086 0.584997 3.31726 0.722988L3.77401 4.58721C3.79164 4.73697 3.74905 4.88761 3.65561 5.00597C3.56218 5.12434 3.42555 5.20074 3.27578 5.21837C3.12602 5.236 2.97538 5.19341 2.85702 5.09997C2.73865 5.00654 2.66225 4.86991 2.64462 4.72014L2.24809 1.35699H0.760804C0.610134 1.35699 0.465636 1.29714 0.359096 1.1906C0.252556 1.08406 0.192703 0.940694 0.192703 0.790024ZM5.30561 12.5304C5.45628 12.5304 5.60078 12.4705 5.70732 12.364C5.81386 12.2575 5.87371 12.113 5.87371 11.9623C5.87371 11.8116 5.81386 11.6671 5.70732 11.5606C5.60078 11.454 5.45628 11.3942 5.30561 11.3942C5.15494 11.3942 5.01044 11.454 4.9039 11.5606C4.79736 11.6671 4.73751 11.8116 4.73751 11.9623C4.73751 12.113 4.79736 12.2575 4.9039 12.364C5.01044 12.4705 5.15494 12.5304 5.30561 12.5304ZM5.30561 13.6666C5.52942 13.6666 5.75104 13.6225 5.95782 13.5369C6.16459 13.4512 6.35247 13.3257 6.51073 13.1674C6.66899 13.0092 6.79453 12.8213 6.88018 12.6145C6.96583 12.4077 7.00991 12.1861 7.00991 11.9623C7.00991 11.7385 6.96583 11.5169 6.88018 11.3101C6.79453 11.1033 6.66899 10.9154 6.51073 10.7572C6.35247 10.5989 6.16459 10.4734 5.95782 10.3877C5.75104 10.3021 5.52942 10.258 5.30561 10.258C4.8536 10.258 4.4201 10.4375 4.10048 10.7572C3.78087 11.0768 3.60131 11.5103 3.60131 11.9623C3.60131 12.4143 3.78087 12.8478 4.10048 13.1674C4.4201 13.487 4.8536 13.6666 5.30561 13.6666ZM10.489 12.5304C10.6396 12.5304 10.7841 12.4705 10.8907 12.364C10.9972 12.2575 11.0571 12.113 11.0571 11.9623C11.0571 11.8116 10.9972 11.6671 10.8907 11.5606C10.7841 11.454 10.6396 11.3942 10.489 11.3942C10.3383 11.3942 10.1938 11.454 10.0872 11.5606C9.98071 11.6671 9.92086 11.8116 9.92086 11.9623C9.92086 12.113 9.98071 12.2575 10.0872 12.364C10.1938 12.4705 10.3383 12.5304 10.489 12.5304ZM10.489 13.6666C10.7128 13.6666 10.9344 13.6225 11.1412 13.5369C11.3479 13.4512 11.5358 13.3257 11.6941 13.1674C11.8523 13.0092 11.9779 12.8213 12.0635 12.6145C12.1492 12.4077 12.1933 12.1861 12.1933 11.9623C12.1933 11.7385 12.1492 11.5169 12.0635 11.3101C11.9779 11.1033 11.8523 10.9154 11.6941 10.7572C11.5358 10.5989 11.3479 10.4734 11.1412 10.3877C10.9344 10.3021 10.7128 10.258 10.489 10.258C10.0369 10.258 9.60345 10.4375 9.28383 10.7572C8.96422 11.0768 8.78466 11.5103 8.78466 11.9623C8.78466 12.4143 8.96422 12.8478 9.28383 13.1674C9.60345 13.487 10.0369 13.6666 10.489 13.6666Z"
          fill={isOnCart ? "white" : "black"}
        />
      </svg>
    </button>
  );
};

export default CartButton;

//fill={isOnCart ? 'white' : 'black'}
