import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Truck, 
  ClipboardList, 
  Map, 
  Users, 
  CalendarDays, 
  BarChart4,
  DollarSign,
  Cog,
  Home
} from "lucide-react";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="w-64 bg-vtc-dark text-white fixed inset-y-0 left-0 z-50 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out"
    >
      <div className="flex flex-col h-full">
        <div className="px-4 py-6 flex items-center justify-center border-b border-vtc-light/20">
          <img src="/logo-b.svg" alt="VTC Logo" className="h-10 mr-2" />
          <div>
            <h2 className="text-xl font-bold">INTERNATIONAL</h2>
            <p className="text-xs text-vtc-accent">CARGO VTC</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <NavLink to="/" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <Home className="w-5 h-5 mr-3" />
            Главная
          </NavLink>

          <NavLink to="/map" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <Map className="w-5 h-5 mr-3" />
            Карта водителей
          </NavLink>

          <NavLink to="/reports" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <ClipboardList className="w-5 h-5 mr-3" />
            Отчеты по доставкам
          </NavLink>

          <NavLink to="/jobs" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <Truck className="w-5 h-5 mr-3" />
            Задания
          </NavLink>

          <NavLink to="/convoys" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <CalendarDays className="w-5 h-5 mr-3" />
            Конвои
          </NavLink>

          <NavLink to="/drivers" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <Users className="w-5 h-5 mr-3" />
            Водители
          </NavLink>

          <NavLink to="/garage" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <MapPin className="w-5 h-5 mr-3" />
            Гараж
          </NavLink>

          <NavLink to="/economy" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <DollarSign className="w-5 h-5 mr-3" />
            Экономика
          </NavLink>

          <NavLink to="/stats" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <BarChart4 className="w-5 h-5 mr-3" />
            Статистика
          </NavLink>
        </nav>

        <div className="p-4 border-t border-vtc-light/20">
          <NavLink to="/settings" className={({ isActive }) => 
            `flex items-center px-4 py-2 rounded-md ${isActive 
              ? 'bg-vtc-accent text-white' 
              : 'text-gray-300 hover:bg-vtc-light/20'}`
          }>
            <Cog className="w-5 h-5 mr-3" />
            Настройки
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
