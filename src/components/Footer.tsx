import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 公司資訊（左側） */}
        <div className="order-1">
          <h3 className="mb-3">
            <NavLink to="/" className="text-2xl font-bold">
              群晉材料科技
            </NavLink>
          </h3>
          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li>
              <a
                href="https://maps.app.goo.gl/4HvjmQum9yF5EWZS9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-brand-yellow)]"
              >
                燕巢區深水里大成路16號 Kaohsiung, Taiwan 824
              </a>
            </li>
            <li>
              <a href="tel:+886-7-6153558" className="hover:text-[var(--color-brand-yellow)]">
                電話：07-615-3558
              </a>
            </li>
            <li>
              <a
                href="mailto:pwensen@hotmail.com"
                className="hover:text-[var(--color-brand-yellow)]"
              >
                Email：pwensen@hotmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* 導覽 & 社群（右側） */}
        <div className="order-2 md:text-right">
          <h3 className="mb-3 text-xl font-semibold">快速導覽</h3>
          <ul className="flex flex-col gap-3 text-sm md:text-base md:items-end">
            <li>
              <NavLink
                to="/products"
                className="hover:text-[var(--color-brand-yellow)]"
              >
                產品列表
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-[var(--color-brand-yellow)]"
              >
                聯絡我們
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100057208159898"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 rounded bg-blue-700 hover:bg-blue-500 transition"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 底部版權 */}
      <div className="border-t border-zinc-700 mt-10 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} 群晉材料科技股份有限公司. All rights reserved.
      </div>
    </footer>
  );
}
