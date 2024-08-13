import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import SkillPage from "../pages/SkillPage";
import ProjectPage from "../pages/ProjectPage";
import ExperiencePage from "../pages/ExperiencePage";
import ContactPage from "../pages/ContactPage";


export default function AppRoute() {
    return (
    <>
        <GuestLayout>
            <Routes>
                <Route path="/" index={true} element={<HomePage></HomePage>}></Route>
                <Route path="/services" element={<ServicePage></ServicePage>}></Route>
                <Route path="/skills"  element={<SkillPage></SkillPage>}></Route>
                <Route path="/projects" element={<ProjectPage></ProjectPage>}></Route>
                <Route path="/experience" element={<ExperiencePage></ExperiencePage>}></Route>
                <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
            </Routes>
        </GuestLayout>
    </>
    )
}
