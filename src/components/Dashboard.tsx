import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Map, Truck, Users, TrendingUp, Coins, Clock } from "lucide-react";
import ActiveDriversMap from "./ActiveDriversMap";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Панель управления</h1>
        <Button variant="default" className="bg-vtc-DEFAULT hover:bg-vtc-dark">
          <Clock className="mr-2 h-4 w-4" /> 
          Начать рейс
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Активных водителей
            </CardTitle>
            <Users className="h-4 w-4 text-vtc-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 за последний час
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Выполнено рейсов
            </CardTitle>
            <Truck className="h-4 w-4 text-vtc-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +57 за сегодня
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Заработано
            </CardTitle>
            <Coins className="h-4 w-4 text-vtc-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€ 567,890</div>
            <p className="text-xs text-muted-foreground">
              +€ 12,450 за сегодня
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="map" className="space-y-4">
        <TabsList>
          <TabsTrigger value="map" className="flex items-center">
            <Map className="h-4 w-4 mr-2" />
            Карта водителей
          </TabsTrigger>
          <TabsTrigger value="jobs" className="flex items-center">
            <Truck className="h-4 w-4 mr-2" />
            Текущие задания
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            Статистика
          </TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="space-y-4">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Активные водители</CardTitle>
              <CardDescription>
                Отслеживайте местоположение водителей компании в реальном времени
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ActiveDriversMap />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Текущие задания</CardTitle>
              <CardDescription>
                Отслеживайте задания с наивысшим приоритетом
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Фрахт: Тяжелое оборудование</p>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <span>Роттердам → Берлин</span>
                        <span className="mx-2">•</span>
                        <span>825 км</span>
                        <span className="mx-2">•</span>
                        <span>€ 24,750</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Взять</Button>
                  </div>
                  <Progress value={0} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Фрахт: Химикаты</p>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <span>Мадрид → Лиссабон</span>
                        <span className="mx-2">•</span>
                        <span>625 км</span>
                        <span className="mx-2">•</span>
                        <span>€ 18,450</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Взять</Button>
                  </div>
                  <Progress value={0} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Фрахт: Автомобили</p>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <span>Милан → Марсель</span>
                        <span className="mx-2">•</span>
                        <span>450 км</span>
                        <span className="mx-2">•</span>
                        <span>€ 15,300</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Взять</Button>
                  </div>
                  <Progress value={0} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Статистика</CardTitle>
              <CardDescription>
                Совокупная статистика компании за последний месяц
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Пробег (км)</p>
                  <p className="text-2xl font-bold">243,675</p>
                  <div className="h-[80px] w-full bg-muted rounded-md flex items-end">
                    <div className="bg-vtc-DEFAULT h-[60%] w-1/3"></div>
                    <div className="bg-vtc-DEFAULT h-[80%] w-1/3"></div>
                    <div className="bg-vtc-DEFAULT h-[40%] w-1/3"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Доход (€)</p>
                  <p className="text-2xl font-bold">€ 1,258,300</p>
                  <div className="h-[80px] w-full bg-muted rounded-md flex items-end">
                    <div className="bg-vtc-accent h-[70%] w-1/3"></div>
                    <div className="bg-vtc-accent h-[90%] w-1/3"></div>
                    <div className="bg-vtc-accent h-[60%] w-1/3"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
