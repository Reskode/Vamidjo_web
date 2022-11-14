import Accueil from "views/Accueil.js";
import Notifications from "views/Notifications.js";
import Demandes from "views/Demandes.js";
import Utilisateurs from "./views/Utilisateurs";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [

 
  {
    path: "/accueil",
    name: "Accueil",
    icon: "nc-icon nc-bank",
    component: Accueil,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Utilisateurs",
    icon: "nc-icon nc-tile-56",
    component: Utilisateurs,
    layout: "/admin"
  },
  {
    path: "/demande_completion",
    name: "Demandes",
    icon: "nc-icon nc-tile-56",
    component: Demandes,
    layout: "/admin"
  },
 
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  },
  
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin"
  }
];
export default routes;
