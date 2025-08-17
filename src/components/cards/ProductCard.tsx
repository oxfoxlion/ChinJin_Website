type ProductCardProps = {
  title: string;
  description?: string;
  imageSrc?: string;     // 如果有實圖可傳入
  onClickHref?: string;  // 需要按鈕導向時
  className?: string;
  actionText?: string;
};

export default function ProductCard({
  title,
  description,
  imageSrc,
  onClickHref,
  className = "",
  actionText = "了解更多",
}: ProductCardProps) {
  return (
    <div className={`border rounded-lg shadow hover:shadow-lg transition bg-white ${className}`}>
      {/* 圖片：若無 imageSrc 則顯示灰底示意 */}
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      ) : (
        <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-t-lg">
          <span className="text-gray-500">產品圖片</span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 text-sm mb-4">{description}</p>}

        {onClickHref && (
          <a
            href={onClickHref}
            className="inline-flex items-center text-[var(--color-brand-blue)] hover:underline"
          >
            {actionText}
          </a>
        )}
      </div>
    </div>
  );
}
