import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About } from "pages";
import { Header } from "components";
import AppRoutes from "constants/routes";
import AppContext from "contexts/GlobalContext";

const Router = () => {
  const { globalState } = useContext(AppContext);

  return (
    <BrowserRouter>
      {!globalState.isMobile && <Header />}
      <Routes>
        <Route path={AppRoutes.HOME} element={<Home />} />
        <Route path={AppRoutes.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
