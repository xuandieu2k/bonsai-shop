import { FC } from "react";
import HeaderAdmin from "./header-admin";
import SidebarAdmin from "./sidebar-admin";
import Dashboard from "./dasboard";

interface MainContentaAdminProps {
    tab: number;
}
const MainContentAdmin: FC<MainContentaAdminProps> = (tab) => {
    const renderContent = () => {
        switch (tab) {
            default: return (
                <Dashboard />
            );
        }
    };

    return (
        <>
            <HeaderAdmin />
            <SidebarAdmin />
            {renderContent()}
        </>
    );
}

export default MainContentAdmin;