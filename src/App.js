import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Header from "./layouts/Header";

import { UserProvider } from "./context/UserContext";

import "./App.css";
import { getItemFromLocalStorage } from "./functions";

const TodoPage = lazy(() => import("./pages/TodoPage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    const navigate = useNavigate();

    const loggedInUser = getItemFromLocalStorage("loggedInUser");

    useEffect(() => {
        if (loggedInUser === null) {
            navigate("/login");
        }
    }, [loggedInUser]);

    return (
        <Provider store={store}>
            <UserProvider>
                <div>
                    <Header />
                    <div className="container mx-auto">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<TodoPage />} />
                                <Route path="/users" element={<UsersPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route
                                    path="/profile/:id"
                                    element={<ProfilePage />}
                                />
                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />
                                <Route
                                    path="/settings/*"
                                    element={<SettingsPage />}
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </UserProvider>
        </Provider>
    );
}

export default App;
