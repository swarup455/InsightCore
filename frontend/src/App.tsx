import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFoundPage from "./pages/landing/NotFound";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ArticlePage from "./pages/dashboard/ArticlePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;