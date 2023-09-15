import { Outlet } from "react-router-dom"
import Statistics from "./Statistics"

function ManageStoreLayout() {
    return <>
        <Statistics />
        <Outlet />
    </>
}

export default ManageStoreLayout