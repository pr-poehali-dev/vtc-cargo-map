import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ActiveDriversMap from "@/components/ActiveDriversMap";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw } from "lucide-react";

const MapPage = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Карта водителей</h1>
          <div className="flex items-center space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите игру" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все игры</SelectItem>
                <SelectItem value="ets2">Euro Truck Simulator 2</SelectItem>
                <SelectItem value="ats">American Truck Simulator</SelectItem>
                <SelectItem value="tmp">TruckersMP</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Обновить
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Отслеживание в реальном времени</CardTitle>
            <CardDescription>
              Следите за перемещением водителей вашей компании по карте
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] w-full">
              <ActiveDriversMap />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MapPage;
