import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../../../helper/ToastHelper";
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const token = CookieStorage.get(CookiesKeys.AuthToken);
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!token) {
      if (!hasShownToast.current) {
        showErrorToast("Unauthenticated");
        hasShownToast.current = true;
      }
      navigate("/");
    }
  }, [token, navigate]);

  return children;
}

TokenProtected.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TokenProtected;
