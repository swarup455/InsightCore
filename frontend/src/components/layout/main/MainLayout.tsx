import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    
    return (
        <div className="min-h-screen bg-black text-white flex">
            <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            <div className="flex-1 flex flex-col min-w-0">
                <Navbar
                    pathname={location.pathname}
                    onMenuClick={() => setMobileOpen(true)}
                    userName="Alex Chen"
                    aiStatus="ready"
                />
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}