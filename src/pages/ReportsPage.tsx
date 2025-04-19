import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart } from "lucide-react";
import Layout from "@/components/Layout";

const ReportsPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <BarChart className="h-8 w-8" />
              Отчеты по перевозкам
            </h1>
            <p className="text-muted-foreground">Анализ эффективности и статистика грузоперевозок</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Период" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Неделя</SelectItem>
                <SelectItem value="month">Месяц</SelectItem>
                <SelectItem value="quarter">Квартал</SelectItem>
                <SelectItem value="year">Год</SelectItem>
              </SelectContent>
            </Select>
            
            <Button>Экспорт PDF</Button>
          </div>
        </div>

        <Tabs defaultValue="performance">
          <TabsList className="grid w-full md:w-auto grid-cols-3">
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              <span className="hidden md:inline">Эффективность</span>
            </TabsTrigger>
            <TabsTrigger value="statistics" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span className="hidden md:inline">Статистика</span>
            </TabsTrigger>
            <TabsTrigger value="distribution" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              <span className="hidden md:inline">Распределение</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Доход</CardTitle>
                  <CardDescription>Текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">€62,450</p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <span>↑ 12.5%</span>
                    <span className="text-muted-foreground">по сравнению с прошлым месяцем</span>
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Пройдено км</CardTitle>
                  <CardDescription>Текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">48,320 км</p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <span>↑ 8.3%</span>
                    <span className="text-muted-foreground">по сравнению с прошлым месяцем</span>
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Выполнено заданий</CardTitle>
                  <CardDescription>Текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">42</p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <span>↑ 5.0%</span>
                    <span className="text-muted-foreground">по сравнению с прошлым месяцем</span>
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Динамика дохода</CardTitle>
                <CardDescription>
                  Данные за последние 30 дней
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="w-full h-full bg-muted/20 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground mt-2">График динамики дохода</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="statistics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Топ грузов по доходности</CardTitle>
                  <CardDescription>
                    Средний доход за перевозку
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full h-full bg-muted/20 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">График топ грузов по доходности</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Статистика по городам</CardTitle>
                  <CardDescription>
                    Популярные маршруты
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full h-full bg-muted/20 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">График статистики по городам</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Детальная статистика за период</CardTitle>
                  <CardDescription>
                    Основные показатели эффективности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted/20 rounded-md">
                      <p className="text-sm text-muted-foreground">Средняя дистанция</p>
                      <p className="font-bold text-xl">1,150 км</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-md">
                      <p className="text-sm text-muted-foreground">Средний доход/км</p>
                      <p className="font-bold text-xl">€1.29</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-md">
                      <p className="text-sm text-muted-foreground">Заданий в день</p>
                      <p className="font-bold text-xl">1.4</p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-md">
                      <p className="text-sm text-muted-foreground">Среднее время</p>
                      <p className="font-bold text-xl">3ч 15м</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="distribution">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Распределение по типам грузов</CardTitle>
                  <CardDescription>
                    Процентное соотношение перевезенных товаров
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full h-full bg-muted/20 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">Диаграмма распределения типов грузов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Распределение по странам доставки</CardTitle>
                  <CardDescription>
                    Географическое распределение перевозок
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full h-full bg-muted/20 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">Диаграмма распределения по странам</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Сезонное распределение активности</CardTitle>
                  <CardDescription>
                    Изменение показателей по месяцам
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full h-full bg-muted/20 rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">График сезонной активности</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ReportsPage;
