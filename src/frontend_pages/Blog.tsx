import BlogCard from "../components/cards/BlogCard";

export default function Blog() {
  const blogPosts = [
    {
      title: "群晉材料科技官網全新上線",
      date: "2025-08-01",
      desc: "我們全新改版的官方網站正式上線，提供更完善的產品資訊與最新消息，協助客戶快速找到所需的金屬材料解決方案。",
    },
    {
      title: "新產品上市：鎳基合金輸送網帶",
      date: "2025-07-15",
      desc: "我們推出全新鎳基合金輸送網帶，具備耐高溫與耐磨特性，適合熱處理與工業輸送應用。",
    },
    {
      title: "參展資訊：台北國際金屬工業展",
      date: "2025-06-20",
      desc: "群晉材料將參加台北國際金屬工業展，現場展示最新的鎳基與鈷基合金產品，歡迎蒞臨參觀。",
    },
  ];

  return (
    <main className="container">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">最新消息</h1>
        <p className="text-gray-600">關注我們的最新產品、活動與公司動態。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <BlogCard
            key={i}
            title={post.title}
            date={post.date}
            excerpt={post.desc}
            to="/blog" // 之後換成 /blog/:id
          />
        ))}
      </div>
    </main>
  );
}
