import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserPanel from "./Components/UserPanel";
import AdminPanel from "./Components/AdminPanel";
import AuthContext from "./Context/AuthContext";
import useAuth from "./Hooks/useAuth";
import EditorPanel from "./Components/EditorPanel";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";
import Home from "./Components/Home";
import Layout from "./Components/Layout";

const ALLOWED_ROLES = {
  user: "user",
  admin: "admin",
  editor: "editor",
};

const App = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* layout is patent component after layout every other components will be there */}
          {/* inside Layout we will declare one self closing route */}
          <Route path="login" element={<Login />} />
          {/* this is public route because everyone can login */}
          {/* <Route path="admin" element={<AdminPanel/>}/> ====>1
        <Route path="editor" element={<EditorPanel/>}/>
        <Route path="user" element={<UserPanel/>}/> */}
          {/* <Route element={<RequireAuth />}>
            {/* we are protecting these panel by requiredauth . we will pass adminpanel by requiredauthonly */}
          {/* <Route path="admin" element={<AdminPanel />} />
            <Route path="editor" element={<EditorPanel />} />
            <Route path="user" element={<UserPanel />} />
          </Route> */}{" "}
          */}
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="admin" element={<AdminPanel />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["editor"]} />}>
            <Route path="editor" element={<EditorPanel />} />
          </Route>
          <Route
            element={<RequireAuth allowedRoles={["user", "admin", "editor"]} />}
          >
            <Route path="user" element={<UserPanel />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
