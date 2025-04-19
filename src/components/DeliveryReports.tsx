import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  FileDown, 
  SortAsc, 
  SortDesc,
  Search,
  Clock
} from "lucide-react";

interface Delivery {
  id: string;
  driver: string;
  from: string;
  to: string;
  cargo: string;
  distance: number;
  income: number;
  game: "ETS2" | "ATS" | "TMP";
  date: string;
  status: "completed" | "failed" | "in-progress";
}

const mockDeliveries: Delivery[] = [
  {
    id: "D-12345",
    driver: "ТрассаМастер",
    from: "Роттердам",
    to: "Берлин",
    cargo: "Тяжелое оборудование",
    distance: 694,
    income: 22750,
    game: "ETS2",
    date: "2023-09-20 14:35",
    status: "completed",
  },
  {
    id: "D-12346",
    driver: "ДальнобойПро",
    from: "Москва",
    to: "Санкт-Петербург",
    cargo: "Электроника",
    distance: 705,
    income: 20150,
    game: "ETS2",
    date: "2023-09-20 12:10",
    status: "completed",
  },
  {
    id: "D-12347",
    driver: "АмериканКинг",
    from: "Лас-Вегас",
    to: "Лос-Анджелес",
    cargo: "Автомобили",
    distance: 435,
    income: 16340,
    game: "ATS",
    date: "2023-09-19 18:45",
    status: "completed",
  },
  {
    id: "D-12348",
    driver: "ТрассаМастер",
    from: "Париж",
    to: "Марсель",
    cargo: "Продукты питания",
    distance: 776,
    income: 18750,
    game: "TMP",
    date: "2023-09-18 10:20",
    status: "completed",
  },
  {
    id: "D-12349",
    driver: "ДальнобойПро",
    from: "Берлин",
    to: "Мюнхен",
    cargo: "Техника",
    distance: 585,
    income: 14860,
    game: "ETS2",
    date: "2023-09-18 08:15",
    status: "completed",
  },
  {
    id: "D-12350",
    driver: "Новичок",
    from: "Рим",
    to: "Флоренция",
    cargo: "Мебель",
    distance: 274,
    income: 9980,
    game: "ETS2",
    date: "2023-09-17 22:30",
    status: "failed",
  },
  {
    id: "D-12351",
    driver: "ДоставкаБыстро",
    from: "Сан-Франциско",
    to: "Сан-Диего",
    cargo: "Контейнеры",
    distance: 820,
    income: 24500,
    game: "ATS",
    date: "2023-09-17 15:40",
    status: "completed",
  },
  {
    id: "D-12352",
    driver: "ТрассаМастер",
    from: "Мадрид",
    to: "Лиссабон",
    cargo: "Химикаты",
    distance: 625,
    income: 17850,
    game: "TMP",
    date: "2023-09-21 09:30",
    status: "in-progress",
  },
];

const DeliveryReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gameFilter, setGameFilter] = useState<"all" | "ETS2" | "ATS" | "TMP">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "failed" | "in-progress">("all");

  const itemsPerPage = 5;

  const filteredDeliveries = mockDeliveries.filter((delivery) => {
    const matchesSearch = 
      delivery.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGame = gameFilter === "all" || delivery.game === gameFilter;
    const matchesStatus = statusFilter === "all" || delivery.status === statusFilter;

    return matchesSearch && matchesGame && matchesStatus;
  });

  const totalPages = Math.ceil(filteredDeliveries.length / itemsPerPage);
  
  const currentDeliveries = filteredDeliveries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusDisplay = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="text-green-600 dark:text-green-500 font-medium">Выполнен</span>;
      case "failed":
        return <span className="text-red-600 dark:text-red-500 font-medium">Не выполнен</span>;
      case "in-progress":
        return (
          <span className="text-amber-600 dark:text-amber-500 font-medium flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            В пути
          </span>
        );
      default:
        return status;
    }
  };

  const getGameBadge = (game: string) => {
    switch (game) {
      case "ETS2":
        return <span className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 text-xs font-medium">ETS2</span>;
      case "ATS":
        return <span className="rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-2 py-1 text-xs font-medium">ATS</span>;
      case "TMP":
        return <span className="rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 text-xs font-medium">TMP</span>;
      default:
        return game;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Отчеты по доставкам</h1>
        <Button className="bg-vtc-DEFAULT hover:bg-vtc-dark">
          <FileDown className="mr-2 h-4 w-4" />
          Экспорт
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Журнал доставок</CardTitle>
          <CardDescription>
            Просмотр и анализ всех перевозок компании
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск по водителю, маршруту, грузу..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Игра
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setGameFilter("all")}>
                    Все игры
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setGameFilter("ETS2")}>
                    Euro Truck Simulator 2
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setGameFilter("ATS")}>
                    American Truck Simulator
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setGameFilter("TMP")}>
                    TruckersMP
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Статус
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                    Все статусы
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("completed")}>
                    Выполнен
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("failed")}>
                    Не выполнен
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("in-progress")}>
                    В пути
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <SortAsc className="mr-2 h-4 w-4" />
                    Сортировка
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <SortDesc className="mr-2 h-4 w-4" />
                    Сначала новые
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SortAsc className="mr-2 h-4 w-4" />
                    Сначала старые
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SortDesc className="mr-2 h-4 w-4" />
                    По дистанции (макс)
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SortDesc className="mr-2 h-4 w-4" />
                    По доходу (макс)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Водитель</TableHead>
                    <TableHead>Маршрут</TableHead>
                    <TableHead>Груз</TableHead>
                    <TableHead>Дистанция</TableHead>
                    <TableHead>Доход</TableHead>
                    <TableHead>Игра</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentDeliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.id}</TableCell>
                      <TableCell>{delivery.driver}</TableCell>
                      <TableCell>{delivery.from} → {delivery.to}</TableCell>
                      <TableCell>{delivery.cargo}</TableCell>
                      <TableCell>{delivery.distance} км</TableCell>
                      <TableCell>€ {delivery.income.toLocaleString()}</TableCell>
                      <TableCell>{getGameBadge(delivery.game)}</TableCell>
                      <TableCell>{delivery.date}</TableCell>
                      <TableCell>{getStatusDisplay(delivery.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Страница {currentPage} из {totalPages}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryReports;
