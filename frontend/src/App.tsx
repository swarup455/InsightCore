import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFoundPage from "./pages/landing/NotFound";

import MainLayout from "./components/layout/main/MainLayout";
import HomeLayout from "./components/layout/Home/HomeLayout";

import HomePage from "./pages/Home/HomePage";
import ArticlePage from "./pages/Home/ArticlePage";
import InsightPage from "./pages/Insights/InsightPage";
import InsightHistoryPage from "./pages/Insights/InsightHistoryPage";
import InsightDetailsPage from "./pages/Insights/InsightDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Navigate to="home" replace />} />

        <Route path="home" element={<HomeLayout />} >
          <Route index element={<HomePage />} />
          <Route path="article/:id" element={<ArticlePage />} />
        </Route>

        <Route path="insight" element={<InsightPage />} />
        <Route path="insight/history" element={<InsightHistoryPage />} />
        <Route path="insight/:id" element={<InsightDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;