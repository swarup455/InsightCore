import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFoundPage from "./pages/landing/NotFound";

import MainLayout from "./components/layout/main/MainLayout";
import HomeLayout from "./components/layout/discover/DiscoverLayout";

import HomePage from "./pages/home/HomePage";
import ArticlePage from "./pages/home/ArticlePage";
import AnalyzePage from "./pages/analyze/AnalyzePage";
import AnalyzeHistoryPage from "./pages/analyze/AnalyzeHistoryPage";
import AnalyzeDetailsPage from "./pages/analyze/AnalyzeDetailsPage";
import OverviewPage from "./pages/overview/OverviewPage";
import ProfilePage from "./pages/profile/ProfilePage";
import UpgradePage from "./pages/upgrade/UpgradePage";
import NotificationPage from "./pages/notification/NotificationPage";
import SettingsPage from "./pages/settings/SettingsPage";
import MonitorPage from "./pages/monitor/MonitorPage";
import MonitorDetailsPage from "./pages/monitor/MonitorDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Navigate to="monitor" replace />} />

        {/* Monitor */}
        <Route path="monitor" element={<MonitorPage />} />
        <Route path="monitor/:topicId" element={<MonitorDetailsPage />} />

        {/* Discover */}
        <Route path="discover" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="article/:id" element={<ArticlePage />} />
        </Route>

        {/* Analyze */}
        <Route path="analyze" element={<AnalyzePage />} />
        <Route path="analyze/history" element={<AnalyzeHistoryPage />} />
        <Route path="analyze/:id" element={<AnalyzeDetailsPage />} />

        {/* Overview */}
        <Route path="overview" element={<OverviewPage />} />

        {/* Notifications */}
        <Route path="notifications" element={<NotificationPage />} />

        {/* Upgrade */}
        <Route path="upgrade" element={<UpgradePage />} />

        {/* Profile */}
        <Route path="profile" element={<ProfilePage />} />

        {/* Settings */}
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;