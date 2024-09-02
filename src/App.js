import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";
import Login from "./pages/Login/Login";
import SignUpForm from "./pages/SignUp/Signup";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import TutorialPage from "./pages/TutorialPage/TutorialPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/news-page" element={<NewsPage />} />
            <Route path="/tutorial-page" element={<TutorialPage />} />
            <Route path="/about-page" element={<AboutPage />} />
          </Route>
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
