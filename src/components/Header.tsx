import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-[#000000] py-[1rem]">
            <div className="container flex justify-between items-center">
                <div className="flex justify-start gap-5 items-center w-1/2">
                    <h1 className="w-3/6"><NavLink to='/' className='text-2xl font-bold text-[#FFFFFF]'>群晉材料科技</NavLink></h1>
                    <div className="rounded bg-[#FFFFFF] w-full flex p-1" >
                        <input type="text" className="outline-none focus:ring-0 flex-1" />
                        <span className="material-symbols-outlined">search</span>
                    </div>
                </div>

                <ul className="flex gap-5 items-center text-[#FFFFFF]">
                    <li><NavLink to='products' className='font-medium'>產品列表</NavLink></li>
                    <li><NavLink to='blog' className='font-medium'>部落格</NavLink></li>
                    <li><NavLink to='about' className='font-medium'>關於我們</NavLink></li>
                    <li><NavLink to='contact' className='font-medium'>聯絡我們</NavLink></li>
                    <li ><NavLink to='contact' className="rounded p-2 bg-sky-600 text-[#FFFFFF]">立即詢價</NavLink></li>
                </ul>
            </div>
        </header>

    )
}