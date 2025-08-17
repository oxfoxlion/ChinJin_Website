import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[var(--color-brand-dark)]">
      <div className="container px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          <NavLink to="/">群晉材料科技</NavLink>
        </h1>

        {/* 搜尋框（lg 以上顯示） */}
        <div className="hidden lg:flex items-center bg-white rounded-lg px-3 py-2 flex-1 max-w-md ml-6 shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-brand-yellow)]">
          <span className="material-symbols-outlined text-gray-500 mr-2">
            search
          </span>
          <input
            type="text"
            placeholder="搜尋產品..."
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* 漢堡按鈕（lg 以下） */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* 導覽（lg 以上） */}
        <nav className="hidden lg:block">
          <ul className="flex gap-6 items-center text-white font-medium">
            <li><NavLink to="/products">產品列表</NavLink></li>
            <li><NavLink to="/blog">最新消息</NavLink></li>
            <li><NavLink to="/about">關於我們</NavLink></li>
            <li><NavLink to="/contact">聯絡我們</NavLink></li>
            <li>
              <Button as="link" to="/contact" size="sm">
                立即詢價
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {/* 行動版抽屜選單（lg 以下） */}
      {open && (
        <div className="lg:hidden bg-zinc-800 px-6 py-4 border-t border-zinc-700">
          {/* 搜尋框（mobile） */}
          <div className="flex items-center bg-white rounded-lg px-3 py-2 mb-4 shadow-sm focus-within:ring-2 focus-within:ring-[var(--color-brand-yellow)]">
            <span className="material-symbols-outlined text-gray-500 mr-2">
              search
            </span>
            <input
              type="text"
              placeholder="搜尋產品..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <ul className="flex flex-col gap-4 text-white font-medium">
            <li><NavLink to="/products" onClick={() => setOpen(false)}>產品列表</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setOpen(false)}>最新消息</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>關於我們</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>聯絡我們</NavLink></li>
            <li>
              <Button as="link" to="/contact" size="sm" className="inline-block" >
                立即詢價
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
