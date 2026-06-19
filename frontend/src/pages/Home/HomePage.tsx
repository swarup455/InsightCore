import SectionHeader from "../../components/discover/SectionHeader";
import FeaturedArticleCard from "../../components/discover/FeaturedArticleCard";
import WideArticleCard from "../../components/discover/WideArticleCard";
import SquareArticleCard from "../../components/discover/SquareArticleCard";
import {
    getFeaturedArticle,
    getNewsSectionArticles,
    getResearchSectionArticles,
    getDevelopersSectionArticles,
    MOCK_ARTICLES,
} from "../../data/mockData";

export default function DiscoverPage() {
    const featured = getFeaturedArticle();
    const newsArticles = getNewsSectionArticles();
    const researchArticles = getResearchSectionArticles();
    const devArticles = getDevelopersSectionArticles();
    const squareArticles = MOCK_ARTICLES.filter((a) =>
        ["Developers", "Community", "Entertainment"].includes(a.category)
    ).slice(0, 4);

    return (
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">
            {/* Featured Intelligence */}
            <section className="mb-10">
                <SectionHeader title="Featured Intelligence" action="View all" />
                <FeaturedArticleCard article={featured} />
            </section>

            {/* News + Square grid */}
            <section className="mb-10">
                <SectionHeader title="News" count={newsArticles.length} action="More news" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2 flex flex-col gap-3">
                        {newsArticles.slice(0, 3).map((article) => (
                            <WideArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                        {squareArticles.slice(0, 2).map((article) => (
                            <SquareArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Research */}
            <section className="mb-10">
                <SectionHeader title="Research" count={researchArticles.length} action="Browse papers" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {researchArticles.map((article) => (
                        <div
                            key={article.id}
                            className="flex flex-col gap-3"
                        >
                            <WideArticleCard article={article} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Developers */}
            <section className="mb-10">
                <SectionHeader title="Developers" count={devArticles.length} action="Explore GitHub" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {devArticles.map((article) => (
                        <WideArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>

            {/* Trending — square grid */}
            <section>
                <SectionHeader title="Trending Now" action="See all trends" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {MOCK_ARTICLES.slice(4, 8).map((article) => (
                        <SquareArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>
        </div>
    );
}