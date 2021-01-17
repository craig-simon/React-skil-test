import React, { FC, ReactElement } from "react";

import { Bonus as BonusType } from "sharedTypes";

import "./Bonus.styles.scss";
import copy from "assets/images/copy.svg";
import { useTranslation } from "react-i18next";

type PropTypes = {
  bonus: BonusType;
  activateBonusHandler: (title: string) => void;
};

const Bonus: FC<PropTypes> = React.memo(
  ({ bonus, activateBonusHandler }): ReactElement => {
    const { title, description, link, promocode, activated } = bonus;
    const inputEl = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const { t } = useTranslation();

    const copyToClipboard = (e: React.MouseEvent) => {
      inputEl.current.select();
      document.execCommand("copy");
    };

    return (
      <div className="bonus">
        <div className="bonus__info">
          <a href={link} className="bonus__title">
            {title}
          </a>
          <p className="bonus__description">{description}</p>
        </div>
        <div className="bonus__promocode">
          <span className="bonus__promocode-title">{t("Promocode")}</span>
          <div className="bonus__promocode-actions">
            <div className="bonus__promocode-wrapper">
              <input
                type="text"
                className="bonus__promocode-input"
                value={promocode}
                readOnly
                ref={inputEl}
              />
              <span onClick={copyToClipboard} className="bonus__promocode-copy">
                <img src={copy} alt="copy" />
              </span>
            </div>

            <button
              className="bonus__promocode-button"
              onClick={() => activateBonusHandler(title)}
              disabled={activated}
            >
              {activated ? t("Bonus activated") : t("Activate bonus")}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Bonus;
