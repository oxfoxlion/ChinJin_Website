import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Frontend(){
    return (
        <>
        <Header></Header>
        <Outlet>
        </Outlet>
        <Footer></Footer>
        </>
        
    )
}