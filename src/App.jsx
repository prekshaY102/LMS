export const serverUrl = "http://localhost:5000";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/admin/Dashboard";
import CreateCourses from "./pages/admin/CreateCourses";
import Courses from "./pages/admin/Courses";
import EditLecture from "./pages/admin/EditLectures";
import EditCourses from "./pages/admin/EditCourses";
import Card from "./Components/Card";
import Cardpage from "./Components/Cardpage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/CreateCourses" element={<CreateCourses/>} />
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/EditLectures" element={<EditLecture/>}/>
      <Route path="/EditCourses" element={<EditCourses/>}/>
      <Route path="/Card" element={<Card/>}/>
      <Route path="/Cardpage" element={<Cardpage/>}/>
    </Routes>
  );
}
