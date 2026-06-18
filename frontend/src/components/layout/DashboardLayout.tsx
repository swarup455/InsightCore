import Sidebar from "./Sidebar";
import SearchHero from "./SearchHero";
import type { NavCategory } from "../../types/category.types";
import { Outlet, useSearchParams } from "react-router-dom";
import CategoryBar from "./CategoryBar";
import { useLocation } from "react-router-dom";

export default function DashboardLayout() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = (searchParams.get("category") ?? "All") as NavCategory | "All";
    const location = useLocation();
    const isDashboard = location.pathname === "/dashboard";

    const handleCategoryChange = (category: NavCategory | "All") => {
        setSearchParams(category === "All" ? {} : { category });
    };

    return (
        <div className="min-h-screen bg-black text-white flex">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                {isDashboard &&
                    <SearchHero />
                }
                {isDashboard &&
                    <CategoryBar
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                    />}
                <main className="bg-black flex-1 overflow-auto z-15">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}