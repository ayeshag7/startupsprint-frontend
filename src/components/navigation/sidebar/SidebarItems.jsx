import React from 'react';
import { DashBoardIcon,  MealsIcon, MenusIcon, ParticipantsIcon, OrdersIcon, PersIcon, ReviewsIcon, UmsIcon, VendorsIcon } from '../../../assets/customIcons/sidebarIcons/SidebarIcons';

const allSidebarItems = [
  { to: "/dashboard", icon: <DashBoardIcon/>, label: "Home", permission: "Home" },
  { to: "/startups", icon: <OrdersIcon/>, label: "Startups", permission: "Startups" },
  {
    to: "/participants",
    icon: <ParticipantsIcon />,
    label: "Participants",
    hasSubmenu: true,
    permission: "Customers",
    subItems: [
      { to: "/participants", label: "All Participants" },
      { to: "/participantChanges", label: "Participants Changes" },
      { to: "/participantsrequests", label: "Participants Requests" },
    ],
  },
  // { to: "/meals", icon: <MealsIcon/>, label: "Meals", permission: "Meals" },
  // { to: "/menus", icon: <MenusIcon/>, label: "Menus", permission: "Menus" },
  // { to: "/vendors", icon: <VendorsIcon/>, label: "Vendors", permission: "Vendors" },
  // { to: "/analytics", icon: <AnalyticsIcon />, label: "Analytics", permission: "Analytics" },
  // { to: "/reviews", icon: <ReviewsIcon/>, label: "Reviews", permission: "Reviews" },
  // { to: "/ums", icon: <UmsIcon/>, label: "UMS", permission: "UMS" },
  // { to: "/pers", icon: <PersIcon/>, label: "PERS", permission: "PERS" },
];


// Filter sidebar items based on permissions
const getFilteredSidebarItems = (permissions) => {
  if (permissions.includes("All")) return allSidebarItems;
  return allSidebarItems.filter(item => permissions.includes(item.permission));
};

// SidebarItems Component
const SidebarItems = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userPermissions = user?.Permissions || [];
  const sidebarItems = getFilteredSidebarItems(userPermissions);
  return allSidebarItems
};

export default SidebarItems;
