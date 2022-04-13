import Header from "./components/Header";

import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                                path="/register"
                                element={<RegisterPage />}
                            />
                        </Routes>
                    </div>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
