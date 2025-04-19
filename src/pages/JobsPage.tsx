import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, TruckIcon, PackageIcon } from "lucide-react";
import Layout from "@/components/Layout";

const JobsPage = () => {
  // Примеры заданий для демонстрации
  const jobs = [
    {
      id: "JOB-001",
      from: "Берлин",
      to: "Париж",
      cargo: "Электроника",
      weight: "15 тонн",
      reward: "€1,500",
      distance: "1,056 км",
      deadline: "12.10.2023"
    },
    {
      id: "JOB-002",
      from: "Мадрид",
      to: "Рим",
      cargo: "Продукты питания",
      weight: "22 тонн",
      reward: "€1,800",
      distance: "1,950 км",
      deadline: "15.10.2023"
    },
    {
      id: "JOB-003",
      from: "Сиэтл",
      to: "Лас-Вегас",
      cargo: "Строительные материалы",
      weight: "25 тонн",
      reward: "$2,200",
      distance: "1,130 миль",
      deadline: "18.10.2023"
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Задания грузов</h1>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Создать задание
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <TruckIcon className="h-5 w-5 text-primary" />
                Активные задания
              </CardTitle>
              <CardDescription>Доступные для выполнения</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <PackageIcon className="h-5 w-5 text-primary" />
                Выполнено за месяц
              </CardTitle>
              <CardDescription>Октябрь 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">48</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center gap-2">
                <span className="text-primary">€</span>
                Заработано командой
              </CardTitle>
              <CardDescription>За текущий месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">€62,400</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Доступные задания</CardTitle>
            <CardDescription>
              Выберите задание для выполнения
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Маршрут</TableHead>
                  <TableHead>Груз</TableHead>
                  <TableHead>Вес</TableHead>
                  <TableHead>Расстояние</TableHead>
                  <TableHead>Срок</TableHead>
                  <TableHead>Оплата</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.id}</TableCell>
                    <TableCell>{job.from} → {job.to}</TableCell>
                    <TableCell>{job.cargo}</TableCell>
                    <TableCell>{job.weight}</TableCell>
                    <TableCell>{job.distance}</TableCell>
                    <TableCell>{job.deadline}</TableCell>
                    <TableCell className="font-bold">{job.reward}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Принять</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default JobsPage;
