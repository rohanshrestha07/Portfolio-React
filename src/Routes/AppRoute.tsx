import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";


export default function AppRoute() {
    return (
    <>
        <GuestLayout>
            <Routes>
                <Route path="/" index={true} element={<HomePage></HomePage>}></Route>
                <Route path="/services" index={true} element={<ServicePage></ServicePage>}></Route>
            </Routes>
        </GuestLayout>
    </>
    )
}
