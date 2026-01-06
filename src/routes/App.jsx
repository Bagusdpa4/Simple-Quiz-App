import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { DetailQuotation } from "../pages/DetailQuotation";
// import { Quotation } from "../pages/Quotation";
import { Login } from "../pages/Login";
// import TokenProtected from "../assets/components/protected/TokenProtected";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
          path="/quotation"
          element={
            <TokenProtected>
              <Quotation />
            </TokenProtected>
          }
        />
        <Route
          path="/quotation/view/:id"
          element={
            <TokenProtected>
              <DetailQuotation />
            </TokenProtected>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};
