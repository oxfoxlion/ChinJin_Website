import Button from "../components/ui/Button";

export default function About() {
  return (
    <main className="font-sans">
      {/* Hero 區塊 */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/cobalt_superalloy_bar_heating.jpg')", // 建議換成公司自家圖片
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            群晉材料科技股份有限公司
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            台灣專業鎳基、鈷基合金製造商
            <br />
            以精密連續鑄造技術提供高品質特殊金屬材料
          </p>
          <Button as="link" to="/contact" size="lg">
            聯絡我們
          </Button>
        </div>
      </section>

      <div className="container px-6 py-12">
        {/* 公司簡介 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">公司簡介</h2>
          <p className="leading-relaxed text-gray-700 mb-4">
            群晉材料科技股份有限公司（Chin Jin materials Co.,Ltd.）成立於 2016 年，專門製造特殊金屬材料。
            我們結合精密連續鑄造技術，能生產各類小型帶材、棒材與耗材，協助客戶在嚴苛應用環境中突破極限。
          </p>
          <p className="leading-relaxed text-gray-700">
            我們以「效率、品質、彈性」為核心價值，提供小量訂購、短期交貨的模式，讓企業能兼顧成本與供應鏈需求。
          </p>
        </section>

        {/* 核心技術與產品 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">核心技術與產品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 shadow bg-white hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">鈷基超合金銲條</h3>
              <p className="text-gray-600">
                Stellite 1、4、6、12 號銲條，應用於硬面焊接，具備耐高溫、耐磨、防腐蝕特性。
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow bg-white hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">棒材</h3>
              <p className="text-gray-600">
                尺寸範圍 1mm ~ 40mm，適用於熱電偶保護套管。亦提供 3.2 ~ 35mm 的客製化規格。
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow bg-white hover:shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold mb-2">其他產品</h3>
              <p className="text-gray-600">
                包括鎳基合金扣件、輸送網帶、發熱體，以及各類不銹鋼材料，滿足多元產業需求。
              </p>
            </div>
          </div>
        </section>

        {/* 公司優勢（已強化 hover） */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">公司優勢</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "小量彈性", desc: "支援小量訂購，降低庫存壓力。" },
              { title: "快速交貨", desc: "短期交貨，滿足急單需求。" },
              { title: "高效製程", desc: "連續鑄造技術具備高效率、低成本、低污染。" },
            ].map((adv, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-lg shadow bg-white text-center hover:shadow-lg hover:-translate-y-1 transition-transform"
              >
                <h4 className="text-xl font-semibold mb-2">{adv.title}</h4>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 聯絡資訊 CTA */}
        <section className="text-center bg-[var(--color-brand-light)] p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">聯絡我們</h2>
          <p className="text-gray-700 mb-6">
            想了解更多？歡迎與我們聯繫，共同探索特殊金屬材料的應用可能。
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>📍 高雄市燕巢區深水里大成路16號</li>
            <li>☎️ 07-615-3558</li>
            <li>✉️ qqa0800@gmail.com</li>
          </ul>
          <Button as="link" to="/contact">
            立即詢價
          </Button>
        </section>
      </div>
    </main>
  );
}
