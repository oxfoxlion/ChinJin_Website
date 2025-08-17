import ProductCard from "../components/cards/ProductCard";
import Button from "../components/ui/Button";

export default function Products() {
  const productList = [
    {
      name: "鈷基超合金銲條",
      desc: "Stellite 1、4、6、12 號，應用於硬面焊接，具備耐高溫、耐磨損、防腐蝕。",
    },
    {
      name: "棒材",
      desc: "尺寸 1mm ~ 40mm，適用於熱電偶保護套管，並可提供 3.2 ~ 35mm 的客製化尺寸。",
    },
    {
      name: "鎳基合金扣件",
      desc: "高耐蝕性與強度，適用於嚴苛環境的緊固應用。",
    },
    {
      name: "鎳基合金輸送網帶",
      desc: "具備耐高溫與耐磨性，廣泛應用於熱處理與工業輸送。",
    },
    {
      name: "鎳基合金發熱體",
      desc: "穩定耐用，適合高溫加熱系統。",
    },
    {
      name: "不銹鋼材料",
      desc: "多用途不銹鋼產品，應用於機械、能源、建材等產業。",
    },
  ];

  return (
    <main className="container">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">產品列表</h1>
        <p className="text-gray-600">以下為我們的主要產品類別與簡介，歡迎聯繫了解更多規格。</p>
      </header>

      {/* 產品清單 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((p, i) => (
          <ProductCard key={i} title={p.name} description={p.desc} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button as="link" to="/contact">需要客製規格？聯絡我們</Button>
      </div>
    </main>
  );
}
