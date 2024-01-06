import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import AdminPanelAdd from "./pages/AdminPanelAdd";
import AdminPanelUpdate from "./pages/AdminPanelUpdate";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/add" element={<AdminPanelAdd />} />
          <Route path="/update/:id" element={<AdminPanelUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
