import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../apps/Main";

import Dashboard from "../domains/dashbBoard/DashBoard";

import Customer from "../domains/customer/Customer";
import CustomerList from "../domains/customer/views/CustomerList";
import OneCustomer from "../domains/customer/views/OneCustomer";

import Purchases from "../domains/purchases/Purchases";
import SupplierList from "../domains/purchases/views/SupplierList";
import OneSupplier from "../domains/purchases/views/OneSupplier";
import PurchsesOrder from "../domains/purchases/views/PurchasesOrder";

import Organizing from "../domains/organizing/Organizing";
import Metting from "../domains/organizing/views/Metting";
import Conference from "../domains/organizing/views/Conference";
import Vehicle from "../domains/organizing/views/Vehicle";

import RequestsAndTasks from "../domains/requestAndTasks/RequestsAndTasks";
import RequestList from "../domains/requestAndTasks/views/RequestList";
import TasksList from "../domains/requestAndTasks/views/TasksList";

import Interaction from "../domains/interaction/Interaction";
import IntercationsList from "../domains/interaction/view/IntercationsList";
import SendEmail from "../domains/interaction/view/SendEmail";
import ViewEmail from "../domains/interaction/view/ViewEmail";
import ViewSms from "../domains/interaction/view/ViewSms";

import Reminders from "../domains/reminders/Reminders";

import Reports from "../domains/reports/Reports";

import Settings from "../domains/settings/Settings";
import Template from "../domains/settings/views/Template";
import AdminSettings from "../domains/settings/views/AdminSettings";
import UserRole from "../domains/settings/views/UserRole";
import Users from "../domains/settings/views/Users";

import Archive from "../domains/archive/Archive";
import Folders from "../domains/archive/views/Folders";
import FolderSetting from "../domains/archive/views/FolderSetting";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customer />}>
            <Route index element={<CustomerList />} />
            <Route path="oneCustomer" element={<OneCustomer />} />
          </Route>
          <Route path="purchases" element={<Purchases />}>
            <Route index element={<SupplierList />} />
            <Route path="oneSupplier" element={<OneSupplier />} />
            <Route path="order" element={<PurchsesOrder />} />
          </Route>
          <Route path="organizing" element={<Organizing />}>
            <Route index element={<Metting />} />
            <Route path="conference" element={<Conference />} />
            <Route path="vehicle" element={<Vehicle />} />
          </Route>
          <Route path="requestAndTasks" element={<RequestsAndTasks />}>
            <Route index element={<RequestList />} />
            <Route path="tasks" element={<TasksList />} />
          </Route>
          <Route path="archive" element={<Archive />}>
            <Route index element={<Folders />} />
            <Route path="folderSetting" element={<FolderSetting />} />
          </Route>
          <Route path="interaction" element={<Interaction />}>
            <Route index element={<IntercationsList />} />
            <Route path="sendEmail" element={<SendEmail />} />
            <Route path="viewSms" element={<ViewSms />} />
            <Route path="viewEmail" element={<ViewEmail />} />
          </Route>
          <Route path="reminders" element={<Reminders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Template />} />
            <Route path="admin" element={<AdminSettings />}>
              <Route index element={<UserRole />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
