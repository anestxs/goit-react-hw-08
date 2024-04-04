import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";
import RestrictedRoot from "../RestrictedRoot/RestrictedRoot";
import PrivateRoot from "../PrivateRoute/PrivateRoute";
import { TailSpin } from "react-loader-spinner";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      ) : (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#3f51b5"
                ariaLabel="tail-spin-loading"
                radius="1"
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoot component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoot component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoot component={<ContactsPage />} />}
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
