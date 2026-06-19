import SearchHero from "./SearchHero";
import type { NavCategory } from "../../../types/category.types";
import { Outlet, useSearchParams } from "react-router-dom";
import CategoryBar from "./CategoryBar";
import { useLocation } from "react-router-dom";

export default function HomeLayout() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = (searchParams.get("category") ?? "All") as NavCategory | "All";
    const location = useLocation();
    const isHomePage = location.pathname === "/dashboard/home";

    const handleCategoryChange = (category: NavCategory | "All") => {
        setSearchParams(category === "All" ? {} : { category });
    };

    return (
        <div className="flex-1 flex flex-col min-w-0">
            {isHomePage && <SearchHero />}
            {isHomePage && (
                <CategoryBar
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />
            )}
            <main className="bg-black flex-1 overflow-auto z-15">
                <Outlet />
            </main>
        </div>
    );
}