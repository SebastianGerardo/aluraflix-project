import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MainLayout } from "./layouts/MainLayout";

export const App = () => (
  <Routes>
    <Route path="/" Component={MainLayout}>
      <Route index Component={Home} />
      <Route path="/new-video" />
    </Route>
  </Routes>
);
