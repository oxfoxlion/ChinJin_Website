import { Outlet } from "react-router-dom"

import Header from "../components/Header"

export default function Frontend(){
    return (
        <>
        <Header></Header>
        <Outlet>
        </Outlet>
        </>
        
    )
}