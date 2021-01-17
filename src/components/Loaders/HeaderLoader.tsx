import React, { FC, ReactElement } from "react";
import ContentLoader from "react-content-loader";

const HeaderLoader: FC = (): ReactElement => (
  <ContentLoader
    speed={2}
    width={110}
    height={40}
    viewBox="0 0 110 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="90" height="14" />
    <rect x="0" y="20" rx="0" ry="0" width="90" height="20" />
  </ContentLoader>
);

export default HeaderLoader;
