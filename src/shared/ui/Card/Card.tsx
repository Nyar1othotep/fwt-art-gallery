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
      <img className={cx("card__image")} src={image} alt={title} />
      <div className={cx("card__content")}>
        <div className={cx("card__info", "info-card", [`info-card--${theme}`])}>
          <div
            className={cx("info-card__content", [
              `info-card__content--${theme}`,
            ])}
          >
            <div
              className={cx("info-card__title", [`info-card__title--${theme}`])}
            >
              {title}
            </div>
            <div
              className={cx("info-card__year", [`info-card__year--${theme}`])}
            >
              {year}
            </div>
          </div>
        </div>
        <div className={cx("card__button")}>
          <Icon />
        </div>
      </div>
    </Link>
  );
};

export default Card;
