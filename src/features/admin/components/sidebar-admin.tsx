import { FC, useState } from "react";

const SidebarAdmin: FC<{}> = () => {
  const [isTreeviewOpen, setIsTreeviewOpen] = useState<{ [key: string]: boolean }>({
    uiElements: false,
    forms: false,
    tables: false,
    pages: false,
  });

  const toggleTreeview = (key: string) => {
    setIsTreeviewOpen(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <div className="app-sidebar__overlay" onClick={() => {/* Handle sidebar overlay click */}}></div>
      <aside className="app-sidebar">
        <div className="app-sidebar__user">
          <img className="app-sidebar__user-avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Image" />
          <div>
            <p className="app-sidebar__user-name">John Doe</p>
            <p className="app-sidebar__user-designation">Frontend Developer</p>
          </div>
        </div>
        <ul className="app-menu">
          <li>
            <a className="app-menu__item active" href="dashboard.html">
              <i className="app-menu__icon bi bi-speedometer"></i>
              <span className="app-menu__label">Dashboard</span>
            </a>
          </li>
          <li className={`treeview ${isTreeviewOpen.uiElements ? 'open' : ''}`}>
            <a
              className="app-menu__item"
              href="#"
              onClick={() => toggleTreeview('uiElements')}
            >
              <i className="app-menu__icon bi bi-laptop"></i>
              <span className="app-menu__label">UI Elements</span>
              <i className="treeview-indicator bi bi-chevron-right"></i>
            </a>
            {isTreeviewOpen.uiElements && (
              <ul className="treeview-menu">
                <li>
                  <a className="treeview-item" href="bootstrap-components.html">
                    <i className="icon bi bi-circle-fill"></i> Bootstrap Elements
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="https://icons.getbootstrap.com/" target="_blank" rel="noopener">
                    <i className="icon bi bi-circle-fill"></i> Font Icons
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="ui-cards.html">
                    <i className="icon bi bi-circle-fill"></i> Cards
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="widgets.html">
                    <i className="icon bi bi-circle-fill"></i> Widgets
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={`treeview ${isTreeviewOpen.forms ? 'open' : ''}`}>
            <a
              className="app-menu__item"
              href="#"
              onClick={() => toggleTreeview('forms')}
            >
              <i className="app-menu__icon bi bi-ui-checks"></i>
              <span className="app-menu__label">Forms</span>
              <i className="treeview-indicator bi bi-chevron-right"></i>
            </a>
            {isTreeviewOpen.forms && (
              <ul className="treeview-menu">
                <li>
                  <a className="treeview-item" href="form-components.html">
                    <i className="icon bi bi-circle-fill"></i> Form Components
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="form-samples.html">
                    <i className="icon bi bi-circle-fill"></i> Form Samples
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={`treeview ${isTreeviewOpen.tables ? 'open' : ''}`}>
            <a
              className="app-menu__item"
              href="#"
              onClick={() => toggleTreeview('tables')}
            >
              <i className="app-menu__icon bi bi-table"></i>
              <span className="app-menu__label">Tables</span>
              <i className="treeview-indicator bi bi-chevron-right"></i>
            </a>
            {isTreeviewOpen.tables && (
              <ul className="treeview-menu">
                <li>
                  <a className="treeview-item" href="table-basic.html">
                    <i className="icon bi bi-circle-fill"></i> Basic Tables
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="table-data-table.html">
                    <i className="icon bi bi-circle-fill"></i> Data Tables
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className={`treeview ${isTreeviewOpen.pages ? 'open' : ''}`}>
            <a
              className="app-menu__item"
              href="#"
              onClick={() => toggleTreeview('pages')}
            >
              <i className="app-menu__icon bi bi-file-earmark"></i>
              <span className="app-menu__label">Pages</span>
              <i className="treeview-indicator bi bi-chevron-right"></i>
            </a>
            {isTreeviewOpen.pages && (
              <ul className="treeview-menu">
                <li>
                  <a className="treeview-item" href="blank-page.html">
                    <i className="icon bi bi-circle-fill"></i> Blank Page
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="page-login.html">
                    <i className="icon bi bi-circle-fill"></i> Login Page
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="page-lockscreen.html">
                    <i className="icon bi bi-circle-fill"></i> Lockscreen Page
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="page-user.html">
                    <i className="icon bi bi-circle-fill"></i> User Page
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="page-invoice.html">
                    <i className="icon bi bi-circle-fill"></i> Invoice Page
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="page-mailbox.html">
                    <i className="icon bi bi-circle-fill"></i> Mailbox
                  </a>
                </li>
                <li>
                  <a className="treeview-item" href="page-error.html">
                    <i className="icon bi bi-circle-fill"></i> Error Page
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a className="app-menu__item" href="docs.html">
              <i className="app-menu__icon bi bi-code-square"></i>
              <span className="app-menu__label">Docs</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SidebarAdmin;