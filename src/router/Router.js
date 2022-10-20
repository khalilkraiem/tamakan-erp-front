import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../apps/Main";

import Dashboard from "../pages/DashBoard";
import Customer from "../pages/Customer";
import Purchases from "../pages/Purchases"
import Organizing from "../pages/Organizing"
import RequestsAndTasks from "../pages/RequestsAndTasks"
import Interaction from "../pages/Interaction"
import Remainders from "../pages/Remainders"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import Archive from "../pages/Archive";


function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />}>
          <Route index element={<Dashboard />} />    
          <Route path="customer" element={<Customer />} >
            
          </Route>
          <Route path="purchases" element={<Purchases />} />
          <Route path="archive" element={<Archive />} />
          <Route path="organizing" element={<Organizing />} />
          <Route path="requestAndTasks" element={<RequestsAndTasks />} />
          <Route path="interaction" element={<Interaction />} />
          <Route path="remainders" element={<Remainders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}


export default Router;