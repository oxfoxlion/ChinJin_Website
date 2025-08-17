import Button from "../ui/Button";

type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  imageSrc?: string;     // 可選
  to?: string;           // 詳文導向（用 NavLink）
  className?: string;
};

export default function BlogCard({
  title,
  date,
  excerpt,
  imageSrc,
  to = "/blog",
  className = "",
}: BlogCardProps) {
  return (
    <div className={`border rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col ${className}`}>
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      ) : (
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-t-lg">
          <span className="text-gray-500">文章圖片</span>
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-1">{excerpt}</p>

        <div className="mt-4">
          <Button as="link" to={to} size="sm" className="px-4 py-2">
            閱讀更多
          </Button>
        </div>
      </div>
    </div>
  );
}
