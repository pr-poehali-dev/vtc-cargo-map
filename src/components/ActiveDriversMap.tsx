import { useEffect, useRef } from "react";

interface Driver {
  id: number;
  username: string;
  position: { lat: number; lng: number };
  game: "ETS2" | "ATS" | "TMP";
  cargo: string;
  destination: string;
  progress: number;
}

const mockDrivers: Driver[] = [
  { 
    id: 1, 
    username: "ТрассаМастер", 
    position: { lat: 48.856614, lng: 2.3522219 }, 
    game: "ETS2",
    cargo: "Техника",
    destination: "Берлин",
    progress: 65
  },
  { 
    id: 2, 
    username: "ДальнобойПро", 
    position: { lat: 52.520007, lng: 13.404954 }, 
    game: "ETS2",
    cargo: "Автомобили",
    destination: "Прага",
    progress: 42
  },
  { 
    id: 3, 
    username: "АмериканКинг", 
    position: { lat: 37.7749, lng: -122.4194 }, 
    game: "ATS",
    cargo: "Контейнеры",
    destination: "Лас-Вегас",
    progress: 78
  },
];

const ActiveDriversMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Здесь будет инициализация карты с использованием внешнего API
    // Для примера просто добавим заполнитель карты
    if (mapRef.current) {
      const placeholder = document.createElement("div");
      placeholder.className = "w-full h-[400px] bg-slate-100 dark:bg-slate-800 relative rounded-lg overflow-hidden";
      placeholder.innerHTML = `
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <span class="text-lg font-medium text-vtc-DEFAULT">Интерактивная карта водителей</span>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">В данный момент активно: ${mockDrivers.length} водителей</p>
        </div>
        <div class="absolute top-4 right-4 space-y-2">
          ${mockDrivers.map(driver => `
            <div class="bg-white dark:bg-gray-700 p-3 rounded shadow-md">
              <div class="flex items-center">
                <span class="h-3 w-3 rounded-full ${driver.game === 'ETS2' ? 'bg-blue-500' : driver.game === 'ATS' ? 'bg-red-500' : 'bg-green-500'} mr-2"></span>
                <span class="font-medium">${driver.username}</span>
              </div>
              <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ${driver.cargo} → ${driver.destination} (${driver.progress}%)
              </div>
            </div>
          `).join('')}
        </div>
        <div class="absolute bottom-4 left-4 bg-white dark:bg-gray-700 p-2 rounded shadow-md">
          <div class="flex items-center space-x-4 text-xs">
            <div class="flex items-center">
              <span class="h-3 w-3 rounded-full bg-blue-500 mr-1"></span>
              <span>ETS2</span>
            </div>
            <div class="flex items-center">
              <span class="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
              <span>ATS</span>
            </div>
            <div class="flex items-center">
              <span class="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
              <span>TruckersMP</span>
            </div>
          </div>
        </div>
      `;
      mapRef.current.appendChild(placeholder);
    }
    
    return () => {
      // Очистка при размонтировании
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return <div ref={mapRef} className="w-full h-[400px]"></div>;
};

export default ActiveDriversMap;
