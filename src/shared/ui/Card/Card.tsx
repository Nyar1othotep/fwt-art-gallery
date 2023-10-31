import React from "react";

import cn from "classnames/bind";
import { Link } from "react-router-dom";

import { ReactComponent as Icon } from "../../assets/arrow_icon.svg";
import styles from "./Card.module.scss";

const cx = cn.bind(styles);

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  year: string;
  image: string;
  theme?: string;
  onClick?: () => void;
}

const Card: React.FC<ICard> = ({
  title,
  year,
  image,
  theme = "light",
  onClick,
}) => {
  return (
    <Link className={cx("card", [`card--${theme}`])} onClick={onClick} to="/">
      <div className={cx("card__image")}>
        <img src={image} alt={title} />
      </div>
      <div className={cx("card__content")}>
        <div className={cx("card__info info-card")}>
          <div className={cx("info-card__title")}>{title}</div>
          <div className={cx("info-card__year")}>{year}</div>
        </div>
        <div className={cx("card__button")}>
          <Icon />
        </div>
      </div>
    </Link>
  );
};

export default Card;
