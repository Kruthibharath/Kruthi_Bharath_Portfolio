import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../MainLayout/MainLayout";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
