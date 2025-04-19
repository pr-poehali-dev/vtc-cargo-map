import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersIcon, TruckIcon, CalendarIcon, MapPinIcon, ClockIcon, UserPlusIcon } from "lucide-react";
import Layout from "@/components/Layout";

const ConvoysPage = () => {
  const [activeConvoys, setActiveConvoys] = useState([
    {
      id: 1,
      name: "Евротур 2023",
      status: "активный",
      players: 8,
      maxPlayers: 12,
      route: "Берлин → Париж → Мадрид",
      startDate: "12 ноября 2023",
      startTime: "20:00 МСК",
      distance: "2450 км",
      leader: "Алексей К.",
      description: "Еженедельный конвой по живописным маршрутам Европы. Приглашаются все желающие!"
    },
    {
      id: 2,
      name: "Скандинавский маршрут",
      status: "скоро",
      players: 5,
      maxPlayers: 10,
      route: "Осло → Стокгольм → Хельсинки",
      startDate: "15 ноября 2023",
      startTime: "19:00 МСК",
      distance: "1890 км",
      leader: "Мария С.",
      description: "Специальный зимний маршрут. Требуются зимние шины и опыт вождения в сложных погодных условиях."
    },
    {
      id: 3,
      name: "Восточный экспресс",
      status: "планируется",
      players: 3,
      maxPlayers: 15,
      route: "Варшава → Минск → Москва",
      startDate: "20 ноября 2023",
      startTime: "18:00 МСК",
      distance: "1820 км",
      leader: "Иван П.",
      description: "Длительный маршрут через восточную Европу. Перевозим строительные материалы."
    }
  ]);

  const [pastConvoys, setPastConvoys] = useState([
    {
      id: 4,
      name: "Альпийский маршрут",
      date: "5 ноября 2023",
      players: 10,
      distance: "1560 км",
      leader: "Сергей М.",
      description: "Маршрут через горные перевалы Альп с живописными видами."
    },
    {
      id: 5,
      name: "Средиземноморье",
      date: "28 октября 2023",
      players: 7,
      distance: "2100 км",
      leader: "Ольга В.",
      description: "Жаркий маршрут по побережью Средиземного моря."
    }
  ]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case "активный": return "success";
      case "скоро": return "warning";
      case "планируется": return "secondary";
      default: return "default";
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <TruckIcon className="h-8 w-8" />
              Конвои
            </h1>
            <p className="text-muted-foreground">Совместные поездки с другими игроками</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button className="flex items-center gap-2">
              <UserPlusIcon className="h-4 w-4" />
              Создать конвой
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full md:w-auto grid-cols-2">
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <TruckIcon className="h-4 w-4" />
              <span>Предстоящие</span>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>Прошедшие</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeConvoys.map((convoy) => (
                <Card key={convoy.id} className={convoy.status === "активный" ? "border-green-500 shadow-md" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{convoy.name}</CardTitle>
                      <Badge variant={getStatusColor(convoy.status) as any}>
                        {convoy.status}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <UsersIcon className="h-3 w-3" />
                      {convoy.players}/{convoy.maxPlayers} участников
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{convoy.route}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{convoy.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ClockIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{convoy.startTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TruckIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{convoy.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <UsersIcon className="h-4 w-4 text-muted-foreground" />
                        <span>Организатор: {convoy.leader}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{convoy.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Присоединиться</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastConvoys.map((convoy) => (
                <Card key={convoy.id} className="bg-muted/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{convoy.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      {convoy.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <UsersIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{convoy.players} участников</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TruckIcon className="h-4 w-4 text-muted-foreground" />
                        <span>{convoy.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <UsersIcon className="h-4 w-4 text-muted-foreground" />
                        <span>Организатор: {convoy.leader}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{convoy.description}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full">Фотоотчет</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ConvoysPage;
