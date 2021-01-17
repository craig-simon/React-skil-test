import React, { FC, ReactElement } from "react";
import ContentLoader from "react-content-loader";

const BonusLoader: FC = (): ReactElement => (
  <ContentLoader
    speed={2}
    width={500}
    height={146}
    viewBox="0 0 500 146"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="24" rx="0" ry="0" width="500" height="122" />
  </ContentLoader>
);

export default BonusLoader;
