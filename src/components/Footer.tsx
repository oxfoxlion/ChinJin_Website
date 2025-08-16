import { NavLink } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="bg-[#000000] py-[1rem]">
            <div className="container flex justify-between">
                <div className="text-[#FFFFFF]">
                    <h3 className="mb-3 "><NavLink to='/' className="text-2xl font-bold">群晉材料科技</NavLink></h3>
                    <ul className="flex flex-col gap-2">
                        <li><a href="https://maps.app.goo.gl/4HvjmQum9yF5EWZS9">燕巢區深水里大成路16號 Kaohsiung, Taiwan 824</a></li>
                        <li><a href="tel:+886-7-6153558">電話：07-615-3558</a></li>
                        <li><a href="mailto:pwensen@hotmail.com">Email：pwensen@hotmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-5 text-[#FFFFFF]">
                        <li><NavLink to='products'>產品列表</NavLink></li>
                        <li><NavLink to='contact'>聯絡我們</NavLink></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100057208159898" className="p-2 rounded bg-blue-400">Facebook</a></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}