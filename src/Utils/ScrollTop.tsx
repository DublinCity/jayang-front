import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ScrollRestoration = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [history.location.pathname]);
  return null;
};

export default ScrollRestoration;
