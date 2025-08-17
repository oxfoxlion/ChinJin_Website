import Button from "../components/ui/Button";
import ProductCard from "../components/cards/ProductCard";
import BlogCard from "../components/cards/BlogCard";

import Antioxidant from "../assets/anti_oxidation.png";
import HighTemperatureResistance from "../assets/heat_resistant.png";
import CorrosionResistance from "../assets/anti_corrosion.png";
import HighStrength from "../assets/high_strength.png";
import Award from "../assets/Award-winning record.jpg";

export default function Home() {
    const products = [
        { name: "鈷基超合金銲條", desc: "Stellite 1、4、6、12 號，耐高溫、耐磨損、防腐蝕。" },
        { name: "棒材", desc: "尺寸 1mm ~ 40mm，適用於熱電偶保護套管，可客製化。" },
        { name: "鎳基合金輸送網帶", desc: "耐高溫與耐磨性佳，適用於工業輸送與熱處理。" },
    ];

    const blogPosts = [
        { title: "群晉材料科技官網全新上線", date: "2025-08-01", desc: "全新改版網站正式上線，提供更完整的產品與最新消息。" },
        { title: "新產品上市：鎳基合金輸送網帶", date: "2025-07-15", desc: "推出全新網帶，耐高溫與耐磨，適合工業應用。" },
        { title: "參展資訊：台北國際金屬工業展", date: "2025-06-20", desc: "將展示最新鎳基與鈷基合金產品，歡迎參觀。" },
    ];

    return (
        <main>
            {/* Hero */}
            <section
                className="
          relative h-[70vh]
          bg-[url('/images/cobalt_superalloy_bar_heating.jpg')]
          bg-cover bg-center md:bg-fixed
        "
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative h-full flex items-center justify-center flex-col gap-6 text-center px-6">
                    <h2 className="text-white text-4xl md:text-6xl font-extrabold">
                        φ35㎜鈷基超合金棒材
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
                        專注於鎳基與鈷基合金製造，提供高品質特殊金屬材料<br />協助客戶突破嚴苛環境挑戰
                    </p>
                    <Button as="link" to="/contact" size="lg">立即詢價</Button>
                </div>
            </section>

            {/* 產品特色 */}
            <section className="container">
                <h2 className="text-3xl font-bold text-center mb-12">產品特色</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <img src={HighTemperatureResistance} alt="耐高溫" className="mx-auto h-32" />
                        <h3 className="text-xl font-semibold mt-4">耐高溫</h3>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <img src={Antioxidant} alt="抗氧化" className="mx-auto h-32" />
                        <h3 className="text-xl font-semibold mt-4">抗氧化</h3>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <img src={CorrosionResistance} alt="抗腐蝕" className="mx-auto h-32" />
                        <h3 className="text-xl font-semibold mt-4">抗腐蝕</h3>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                        <img src={HighStrength} alt="高強度" className="mx-auto h-32" />
                        <h3 className="text-xl font-semibold mt-4">高強度</h3>
                    </div>
                </div>
            </section>

            {/* 主要產品 */}
            <section className="py-16 bg-[var(--color-brand-light)]">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">主要產品</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((p, i) => (
                            <ProductCard
                                key={i}
                                title={p.name}
                                description={p.desc}
                                onClickHref="/products"
                                actionText="查看產品"
                            />
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button as="link" to="/products">查看全部產品</Button>
                    </div>
                </div>
            </section>

            {/* 產業應用 */}
            <section className="py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">產業應用</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: "bolt", title: "能源產業", text: "燃氣渦輪、發電機零件，耐高溫與耐磨損需求。" },
                            { icon: "science", title: "石化產業", text: "耐腐蝕合金材料，用於管線與化學設備。" },
                            { icon: "flight", title: "航太工業", text: "引擎零件、耐熱元件，滿足極端環境。" },
                            { icon: "factory", title: "工業設備", text: "輸送網帶、熱處理用零件，提升生產效率。" },
                        ].map((it, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                                <span className="material-symbols-outlined text-5xl text-[var(--color-brand-yellow)]">
                                    {it.icon}
                                </span>
                                <h3 className="text-xl font-semibold mt-4">{it.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{it.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 公司簡介 */}
            <section className="container flex flex-col lg:flex-row items-center gap-10 py-16">
                <div className="w-full lg:w-1/2">
                    <img src={Award} alt="獲獎紀錄" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">關於我們</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        成立於 2016 年，群晉材料科技專注於台灣自製的鎳基與鈷基合金產品。
                        憑藉精密連續鑄造技術，我們能生產帶材、棒材與耗材，滿足不同產業的高標準需求，
                        並以彈性生產與快速交貨協助客戶。
                    </p>
                    <Button as="link" to="/about">了解更多</Button>
                </div>
            </section>

            {/* 最新消息 */}
            <section className="bg-[var(--color-brand-light)] py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">最新消息</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.map((post, idx) => (
                            <BlogCard
                                key={idx}
                                title={post.title}
                                date={post.date}
                                excerpt={post.desc}
                                to="/blog"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 聯絡 CTA */}
            <section className=" bg-[var(--color-brand-dark)]">
                <div className="container border-b border-zinc-700 py-16  text-white text-center">
                    <h2 className="text-3xl font-bold mb-4">立即聯繫我們</h2>
                    <p className="text-gray-300 mb-6">
                        想了解更多？歡迎與我們聯繫，共同探索特殊金屬材料的應用可能。
                    </p>
                    <Button as="link" to="/contact">聯絡我們</Button>
                </div>

            </section>
        </main>
    );
}
