import cn from "classnames/bind";
import React from "react";
import { Link } from "react-router-dom";

import { TImage } from "@/shared/model/types";

import { ReactComponent as Icon } from "../../assets/arrow_icon.svg";
import { Image } from "../Image";

import styles from "./Card.module.scss";

const cx = cn.bind(styles);

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  to: string;
  title: string;
  year: string;
  image: TImage;
  theme?: string;
  onClick?: () => void;
}

const Card: React.FC<ICard> = ({
  to,
  title,
  year,
  image,
  theme = "light",
  onClick,
}) => {
  return (
    <Link className={cx("card", `card--${theme}`)} onClick={onClick} to={to}>
      <div className={cx("card__image-wrapper", "_ibg")}>
        <Image className={cx("card__image")} image={image} alt={title} />
      </div>
      <div className={cx("card__content")}>
        <div className={cx("card__info", "info-card", `info-card--${theme}`)}>
          <div
            className={cx("info-card__content", `info-card__content--${theme}`)}
          >
            <div
              className={cx("info-card__title", `info-card__title--${theme}`)}
            >
              {title}
            </div>
            <div className={cx("info-card__year", `info-card__year--${theme}`)}>
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
