import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
import AddProject from "./pages/Dashboard/AddProject";
import AllProject from "./pages/Dashboard/AllProject";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Project from "./pages/Project";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AllProject />} />
            <Route path="add-project" element={<AddProject />} />
          </Route>
          <Route path="/landing" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
