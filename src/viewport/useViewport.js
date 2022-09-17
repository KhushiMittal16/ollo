import React from "react";
import { ViewportContext } from "./index";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isMobile = 600 > width;
  const isTablet = 850 > width;
  const isMidrange = 1000 > width;

  return { width, height, isMobile, isTablet, isMidrange };
};

export default useViewport;
