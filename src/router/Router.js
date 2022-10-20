import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../apps/Main";

import Dashboard from "../domains/dashbBoard/DashBoard";
import Customer from "../domains/customer/Customer";
import CustomerList from "../domains/customer/views/CustomerList";
import OneCustomer from "../domains/customer/views/OneCustomer";
import Purchases from "../domains/purchases/Purchases"
import SupplierList from "../domains/purchases/views/SupplierList";
import OneSupplier from "../domains/purchases/views/OneSupplier";
import Organizing from "../domains/organizing/Organizing"
import RequestsAndTasks from "../domains/requestAndTasks/RequestsAndTasks"
import Interaction from "../domains/interaction/Interaction"
import Remainders from "../domains/remainders/Remainders"
import Reports from "../domains/reports/Reports"
import Settings from "../domains/settings/Settings"
import Archive from "../domains/archive/Archive";
import PurchsesOrder from "../domains/purchases/views/PurchsesOrder";


function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customer />} >
            <Route index element={<CustomerList />} />
            <Route path="oneCustomer" element={<OneCustomer />} />
          </Route>
          <Route path="purchases" element={<Purchases />} >
            <Route index element={<SupplierList />} />
            <Route path="oneSupplier" element={<OneSupplier />} />
            <Route path='order' element={<PurchsesOrder/>} />
          </Route>
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