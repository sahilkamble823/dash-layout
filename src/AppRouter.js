import AuthGuard from "./components/AuthGuard";
import React, { Suspense, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import AuthContext from "./context/Auth";

import { createBrowserHistory } from "history";

import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      {/* <Suspense fallback={<PageLoading />}> */}
      {/* <SessionTimeoutHandler/> */}
        <RenderRoutes data={routes} />
      {/* </Suspense> */}
    </Router>
  );
}

// function SessionTimeoutHandler() {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     toast.info("Session Expired! Please Login.");
//     localStorage.clear();
//     navigate('/');
//   };

//   useIdleTimeout(handleLogout, 30 * 60 * 1000);

//   return null;
// }

function RenderRoutes({ data }) {
  return (
    <AuthContext>
      <Routes>
        {data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component />
                    )}
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </AuthContext>
  );
}