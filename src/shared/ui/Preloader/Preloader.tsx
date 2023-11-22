// import cn from "classnames/bind";
import React from "react";

// import styles from "./Preloader.module.scss";

// const cx = cn.bind(styles);

const Preloader: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
  >
    <circle
      r="22"
      cx="25"
      cy="25"
      fill="none"
      stroke="currentColor"
      opacity="0.8"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="200"
      strokeDashoffset="199"
    >
      <animateTransform
        to="360 25 25"
        dur="2s"
        type="rotate"
        from="0 25 25"
        repeatCount="indefinite"
        attributeName="transform"
      />
      <animate
        attributeName="stroke-dashoffset"
        values="199;130;199"
        keyTimes="0;0.5;1"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      r="22"
      cx="25"
      cy="25"
      fill="none"
      stroke="currentColor"
      opacity="0.35"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="200"
      strokeDashoffset="199"
    >
      <animateTransform
        to="360 25 25"
        dur="2s"
        type="rotate"
        from="0 25 25"
        repeatCount="indefinite"
        attributeName="transform"
      />
      <animate
        attributeName="stroke-dashoffset"
        values="199;155;199"
        keyTimes="0;0.6;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.1"
      />
    </circle>
    <circle
      r="22"
      cx="25"
      cy="25"
      fill="none"
      stroke="currentColor"
      opacity="0.35"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="200"
      strokeDashoffset="199"
    >
      <animateTransform
        to="360 25 25"
        dur="2s"
        type="rotate"
        from="0 25 25"
        repeatCount="indefinite"
        attributeName="transform"
      />
      <animate
        attributeName="stroke-dashoffset"
        values="199;175;199"
        keyTimes="0;0.7;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.2"
      />
    </circle>
    <circle
      r="22"
      cx="25"
      cy="25"
      fill="none"
      stroke="currentColor"
      opacity="0.35"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="200"
      strokeDashoffset="199"
    >
      <animateTransform
        to="360 25 25"
        dur="2s"
        type="rotate"
        from="0 25 25"
        repeatCount="indefinite"
        attributeName="transform"
      />
      <animate
        attributeName="stroke-dashoffset"
        values="199;190;199"
        keyTimes="0;0.8;1"
        dur="2s"
        repeatCount="indefinite"
        begin="0.3"
      />
    </circle>
  </svg>
);

export default Preloader;
