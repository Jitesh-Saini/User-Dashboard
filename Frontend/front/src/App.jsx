import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Users from "./pages/Users";
import Blogs from "./pages/Blogs";
import Tags from "./pages/Tags";
import Categories from "./pages/Categories";
import CreateUser from "./pages/CreateUser";
import CreateBlog from "./pages/CreateBlog";

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    blogs: 0,
    tags: 0,
    categories: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5002/api/stats").then((res) => {
      setStats(res.data);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Data Management</h1>
      <p className="subtitle">Manage your application content and users</p>

      <div className="card-grid">
        <Card
          title="Users"
          color="#3b82f6"
          icon="👥"
          onClick={() => navigate("/users")}
        />
        <Card
          title="Blogs"
          color="#a855f7"
          icon="✍️"
          onClick={() => navigate("/blogs")}
        />
        <Card
          title="Tags"
          color="#ec4899"
          icon="🏷️"
          onClick={() => navigate("/tags")}
        />
        <Card
          title="Categories"
          color="#f59e0b"
          icon="📁"
          onClick={() => navigate("/categories")}
        />
      </div>

      <div className="quick-stats">
        <h2>Quick Stats</h2>
        <div className="stat-grid">
          <Stat label="Total Users" value={stats.users} />
          <Stat label="Total Blogs" value={stats.blogs} />
          <Stat label="Total Tags" value={stats.tags} />
          <Stat label="Total Categories" value={stats.categories} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, color, icon, onClick }) => (
  <div
    className="card"
    style={{ backgroundColor: color, cursor: "pointer" }}
    onClick={onClick}
  >
    <div className="card-icon">{icon}</div>
    <div className="card-title">{title}</div>
    <div className="card-subtitle">Manage all {title.toLowerCase()}</div>
    <div className="arrow">→</div>
  </div>
);

const Stat = ({ label, value }) => (
  <div className="stat-box">
    <p className="stat-label">{label}</p>
    <p className="stat-value">{value}</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/create_blog" element={<CreateBlog />} />
      </Routes>
    </Router>
  );
};

export default App;



// import React, { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
// } from "react-router-dom";
// import Users from "./pages/Users";
// import Blogs from "./pages/Blogs";
// import Tags from "./pages/Tags";
// import Categories from "./pages/Categories";
// import CreateUser from "./pages/CreateUser";
// import CreateBlog from "./pages/CreateBlog";

// const Dashboard = ({ isDarkMode, toggleTheme }) => {
//   const [stats, setStats] = useState({
//     users: 0,
//     blogs: 0,
//     tags: 0,
//     categories: 0,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:5002/api/stats").then((res) => {
//       setStats(res.data);
//     });
//   }, []);

//   return (
//     <div className={`dashboard-container ${isDarkMode ? "dark" : ""}`}>
//       <div className="header">
//         <h1>Data Management</h1>
//         <div className="toggle-container">
//           <label className="switch">
//             <input
//               type="checkbox"
//               checked={isDarkMode}
//               onChange={toggleTheme}
//             />
//             <span className="slider round"></span>
//           </label>
//         </div>
//       </div>
//       <p className="subtitle">Manage your application content and users</p>

//       <div className="card-grid">
//         <Card
//           title="Users"
//           color="#3b82f6"
//           icon="👥"
//           onClick={() => navigate("/users")}
//         />
//         <Card
//           title="Blogs"
//           color="#a855f7"
//           icon="✍️"
//           onClick={() => navigate("/blogs")}
//         />
//         <Card
//           title="Tags"
//           color="#ec4899"
//           icon="🏷️"
//           onClick={() => navigate("/tags")}
//         />
//         <Card
//           title="Categories"
//           color="#f59e0b"
//           icon="📁"
//           onClick={() => navigate("/categories")}
//         />
//       </div>

//       <div className="quick-stats">
//         <h2>Quick Stats</h2>
//         <div className="stat-grid">
//           <Stat label="Total Users" value={stats.users} />
//           <Stat label="Total Blogs" value={stats.blogs} />
//           <Stat label="Total Tags" value={stats.tags} />
//           <Stat label="Total Categories" value={stats.categories} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ title, color, icon, onClick }) => (
//   <div
//     className="card"
//     style={{ backgroundColor: color, cursor: "pointer" }}
//     onClick={onClick}
//   >
//     <div className="card-icon">{icon}</div>
//     <div className="card-title">{title}</div>
//     <div className="card-subtitle">Manage all {title.toLowerCase()}</div>
//     <div className="arrow">→</div>
//   </div>
// );

// const Stat = ({ label, value }) => (
//   <div className="stat-box">
//     <p className="stat-label">{label}</p>
//     <p className="stat-value">{value}</p>
//   </div>
// );

// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     document.body.className = isDarkMode ? "" : "dark";
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
//         />
//         <Route path="/users" element={<Users />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/tags" element={<Tags />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/create" element={<CreateUser />} />
//         <Route path="/create_blog" element={<CreateBlog />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

