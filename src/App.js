import { useState } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Router>
                    <Header />
                    <div className="container mx-auto">
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
                    </div>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
