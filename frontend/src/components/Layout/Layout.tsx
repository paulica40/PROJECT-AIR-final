import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router';
// @ts-ignore
import Hammer from 'rc-hammerjs';
import Header from '../Header';

import Sidebar from '../Sidebar';
import { openSidebar, closeSidebar, toggleSidebar } from 'store/actions/navigationActions';
import s from './Layout.module.scss';
import BreadcrumbHistory from '../BreadcrumbHistory';

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';

import ParticipantiFormPage from 'pages/CRUD/Participanti/form/ParticipantiFormPage';
import ParticipantiTablePage from 'pages/CRUD/Participanti/table/ParticipantiTablePage';
import ParticipantiViewPage from 'pages/CRUD/Participanti/page/ParticipantiViewPage';

import IndicatoriFormPage from 'pages/CRUD/Indicatori/form/IndicatoriFormPage';
import IndicatoriTablePage from 'pages/CRUD/Indicatori/table/IndicatoriTablePage';
import IndicatoriViewPage from 'pages/CRUD/Indicatori/page/IndicatoriViewPage';

import CursuriFormPage from 'pages/CRUD/Cursuri/form/CursuriFormPage';
import CursuriTablePage from 'pages/CRUD/Cursuri/table/CursuriTablePage';
import CursuriViewPage from 'pages/CRUD/Cursuri/page/CursuriViewPage';

import ChangePasswordFormPage from 'pages/CRUD/ChangePassword/ChangePasswordFormPage';
import Dashboard from '../../pages/dashboard';
import { SidebarTypes } from 'store/reducers/layoutReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Layout = () => {
  const sidebarOpened = useTypedSelector((store) => store.navigation.sidebarOpened);
  const sidebarStatic = useTypedSelector((store) => store.navigation.sidebarStatic);
  const dashboardTheme = useTypedSelector((store) => store.layout.dashboardTheme);
  const sidebarType = useTypedSelector((store) => store.layout.sidebarType);

  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768 && sidebarStatic) {
        dispatch(toggleSidebar(false));
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, sidebarStatic]);

  const handleSwipe = (e: any) => {
    if ('ontouchstart' in window) {
      if (e.direction === 4) {
        dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && sidebarOpened) {
        dispatch(closeSidebar());
        return;
      }
    }
  };

  return (
    <div
      className={[
        s.root,
        sidebarStatic ? `${s.sidebarStatic}` : '',
        !sidebarOpened ? s.sidebarClose : '',
        'sing-dashboard',
        `dashboard-${sidebarType === SidebarTypes.TRANSPARENT ? 'light' : dashboardTheme}`,
      ].join(' ')}
    >
      <Sidebar />
      <div className={s.wrap}>
        <Header openUsersList={false} />
        
        <Hammer onSwipe={handleSwipe}>
          <main className={s.content}>
            <BreadcrumbHistory url={location.pathname} />
            <Switch>
              <Route path={'/app/dashboard'} exact component={Dashboard} />
              <Route path={'/app/profile'} exact component={UsersFormPage} />
              <Route path={'/app/password'} exact component={ChangePasswordFormPage} />

              <Route path={'/admin/users'} exact component={UsersTablePage} />
              <Route path={'/admin/users/new'} exact component={UsersFormPage} />
              <Route path={'/admin/users/:id/edit'} exact component={UsersFormPage} />
              <Route path={'/admin/users/:id'} exact component={UsersViewPage} />

              <Route path={'/admin/participanti'} exact component={ParticipantiTablePage} />
              <Route path={'/admin/participanti/new'} exact component={ParticipantiFormPage} />
              <Route path={'/admin/participanti/:id/edit'} exact component={ParticipantiFormPage} />
              <Route path={'/admin/participanti/:id'} exact component={ParticipantiViewPage} />

              <Route path={'/admin/indicatori'} exact component={IndicatoriTablePage} />
              <Route path={'/admin/indicatori/new'} exact component={IndicatoriFormPage} />
              <Route path={'/admin/indicatori/:id/edit'} exact component={IndicatoriFormPage} />
              <Route path={'/admin/indicatori/:id'} exact component={IndicatoriViewPage} />

              <Route path={'/admin/cursuri'} exact component={CursuriTablePage} />
              <Route path={'/admin/cursuri/new'} exact component={CursuriFormPage} />
              <Route path={'/admin/cursuri/:id/edit'} exact component={CursuriFormPage} />
              <Route path={'/admin/cursuri/:id'} exact component={CursuriViewPage} />
            </Switch>
            <footer className={s.contentFooter}>
              Project_AIR - Made by
              <a href="http://cciabn.ro" rel="nofollow noopener noreferrer" target="_blank">
                NP
              </a>
            </footer>
          </main>
        </Hammer>
      </div>
    </div>
  );
};

export default Layout;
