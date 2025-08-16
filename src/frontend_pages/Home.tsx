import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <main>
            <section
                className="
          relative h-[70vh]
          bg-[url('/images/cobalt_superalloy_bar_heating.jpg')]
          bg-cover bg-center
          md:bg-fixed
        "
            >
                {/* 黑色疊層，讓字更清楚 */}
                <div className="absolute inset-0 bg-black/40" />
                {/* 置中文字 */}
                <div className="relative h-full flex items-center justify-center flex-col gap-10">
                    <h3 className="text-white text-4xl md:text-6xl font-bold">
                        φ35㎜鈷基超合金棒材
                    </h3>
                    <NavLink to='/contact' className='rounded p-3 text-xl bg-gray-900 text-[#FFFFFF] hover:bg-gray-600'>立即詢價</NavLink>
                </div>
            </section>

            {/* 後續內容 */}
            <section className="container mx-auto py-24 space-y-6">
                <p>內容內容內容...</p>
                <p>再多一些內容來測試捲動效果。</p>
            </section>
        </main>
    )
}