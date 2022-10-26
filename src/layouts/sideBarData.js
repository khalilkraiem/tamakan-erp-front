import dashboard from "../assets/images/dashboard.svg";
import customer from "../assets/images/customer.svg";
import purchases from "../assets/images/purchases.svg";
import organizing from "../assets/images/organizing.svg";
import requestAndTasks from "../assets/images/requestsAndTasks.svg";
import archive from "../assets/images/archive.png";
import reminders from "../assets/images/remainders.png";
import report from "../assets/images/report.png";
import settings from "../assets/images/settings.svg";
import interaction from "../assets/images/interaction.png";
var sideBareData = [
  {
    name: "DashBoard",
    path: "/",
    image: dashboard,
  },
  {
    name: "Customer",
    path: "/customer",
    image: customer,
  },
  {
    name: "Purchases",
    path: "/purchases",
    image: purchases,
    children: [
      { name: "Supplier", path: "/purchases" },
      { name: "Puchases order", path: "/purchases/order" },
    ],
  },
  {
    name: "Organizing",
    path: "/organizing",
    image: organizing,
    children: [
      { name: "Metting", path: "/organizing" },
      { name: "Conference", path: "/organizing/conference" },
      { name: "Vehicle", path: "/organizing/vehicle" },
    ],
  },
  {
    name: "Request And Tasks",
    path: "/requestAndTasks",
    image: requestAndTasks,
    children: [
      { name: "Requests", path: "/requestAndTasks" },
      { name: "Tasks", path: "/requestAndTasks/tasks" },
    ],
  },
  {
    name: "Archive",
    path: "/archive",
    image: archive,
    children: [
      { name: "Folders", path: "/archive" },
      { name: "Folder setting", path: "/archive/folderSetting" },
    ],
  },
  {
    name: "Interaction",
    path: "/interaction",
    image: interaction,
  },
  {
    name: "Reminders",
    path: "/reminders",
    image: reminders,
  },
  {
    name: "Reports",
    path: "/reports",
    image: report,
  },
  {
    name: "Settings",
    path: "/settings",
    image: settings,
    children: [
      {
        name: "Template",
        path: "/settings",
      },
      {
        name: "Admin setting",
        path: "/settings/admin",
        children: [
          {
            name: "User role",
            path: "/settings/admin",
          },
          {
            name: "Users",
            path: "/settings/admin/users",
          },
        ],
      },
    ],
  },
];
export default sideBareData;
