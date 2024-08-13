import { FC } from "react";
import MainContentAdmin from "../components/main-content-admin";
import { TabContants } from "../../../base/constants/app-contants";

const AdminPage: FC<{}> = () => {
    return (
        <body className="app sidebar-mini">
            <MainContentAdmin tab={TabContants.ADMIN} />
        </body>
    );
}
export default AdminPage;