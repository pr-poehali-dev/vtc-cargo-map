import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapIcon, TruckIcon, UsersIcon } from "lucide-react";
import Layout from "@/components/Layout";

const MapPage = () => {
  const [mapType, setMapType] = useState("europe");
  
  // Примеры активных водителей
  const activeDrivers = [
    { id: 1, name: "Алексей К.", location: "Берлин", status: "В пути", cargo: "Электроника" },
    { id: 2, name: "Мария С.", location: "Париж", status: "Загрузка", cargo: "Мебель" },
    { id: 3, name: "Иван П.", location: "Рим", status: "Отдых", cargo: "-" },
    { id: 4, name: "Ольга В.", location: "Мадрид", status: "В пути", cargo: "Продукты" },
    { id: 5, name: "Сергей М.", location: "Прага", status: "Разгрузка", cargo: "Техника" },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <MapIcon className="h-8 w-8" />
              Карта водителей
            </h1>
            <p className="text-muted-foreground">Отслеживайте других игроков в реальном времени</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={mapType} onValueChange={setMapType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите регион" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="europe">Европа (ETS2)</SelectItem>
                <SelectItem value="america">Америка (ATS)</SelectItem>
                <SelectItem value="all">Все регионы</SelectItem>
              </SelectContent>
            </Select>
            
            <Button>Обновить</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[600px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                  {mapType === "europe" && (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                          src="/placeholder.svg" 
                          alt="Карта Европы" 
                          className="w-full h-full object-cover opacity-70"
                        />
                        {/* Здесь можно разместить метки водителей на карте */}
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse relative">
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                              Алексей К.
                            </span>
                          </div>
                        </div>
                        <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse relative">
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                              Мария С.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {mapType === "america" && (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img 
                          src="/placeholder.svg" 
                          alt="Карта Америки"
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute bottom-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse relative">
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded shadow-md text-xs whitespace-nowrap">
                              Сергей М.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {mapType === "all" && (
                    <div className="flex flex-col items-center justify-center gap-2">
                      <MapIcon className="h-16 w-16 text-muted-foreground" />
                      <p className="text-muted-foreground">Отображение всех регионов еще не реализовано</p>
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-md text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>В пути</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Загрузка/Разгрузка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Отдых</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UsersIcon className="h-5 w-5" />
                  Активные водители
                </CardTitle>
                <CardDescription>
                  Сейчас онлайн: {activeDrivers.length} водителей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 overflow-auto max-h-[460px] pr-2">
                  {activeDrivers.map((driver) => (
                    <Card key={driver.id} className="p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium">{driver.name}</div>
                          <div className="text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapIcon className="h-3 w-3" /> {driver.location}
                            </span>
                          </div>
                          {driver.cargo !== "-" && (
                            <div className="text-sm flex items-center gap-1 mt-1">
                              <TruckIcon className="h-3 w-3" /> {driver.cargo}
                            </div>
                          )}
                        </div>
                        <Badge 
                          variant={
                            driver.status === "В пути" ? "default" : 
                            driver.status === "Отдых" ? "destructive" : "secondary"
                          }
                        >
                          {driver.status}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
