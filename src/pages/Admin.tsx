import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Home, Download, Search, Hammer, Users, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import logoWaswia from "@/assets/logo-waswia.png";
import * as XLSX from "xlsx";

interface Submission {
  id: string;
  created_at: string;
  [key: string]: string | string[];
}

const Admin = () => {
  const [artisanData, setArtisanData] = useState<Submission[]>([]);
  const [visiteurData, setVisiteurData] = useState<Submission[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const loadData = () => {
    const artisans = JSON.parse(localStorage.getItem("artisan_submissions") || "[]");
    const visiteurs = JSON.parse(localStorage.getItem("visiteur_submissions") || "[]");
    setArtisanData(artisans);
    setVisiteurData(visiteurs);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filterData = (data: Submission[]) => {
    return data.filter((item) => {
      const matchesSearch = searchTerm
        ? JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesDate = dateFilter
        ? item.created_at.startsWith(dateFilter)
        : true;
      return matchesSearch && matchesDate;
    });
  };

  const exportToExcel = (data: Submission[], type: "artisans" | "visiteurs") => {
    if (data.length === 0) {
      toast.error("Aucune donnée à exporter");
      return;
    }

    // Flatten arrays to strings for Excel
    const flattenedData = data.map((item) => {
      const flattened: Record<string, string> = {};
      Object.entries(item).forEach(([key, value]) => {
        flattened[key] = Array.isArray(value) ? value.join(", ") : String(value);
      });
      return flattened;
    });

    const worksheet = XLSX.utils.json_to_sheet(flattenedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, type === "artisans" ? "Artisans" : "Visiteurs");

    const fileName = `enquete_${type}_WASWIA.xlsx`;
    XLSX.writeFile(workbook, fileName);
    toast.success(`Export ${fileName} réussi !`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatValue = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value;
  };

  const renderTable = (data: Submission[], type: "artisans" | "visiteurs") => {
    const filteredData = filterData(data);

    if (filteredData.length === 0) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          <p>Aucune réponse enregistrée</p>
        </div>
      );
    }

    // Get all unique keys from the data
    const allKeys = new Set<string>();
    filteredData.forEach((item) => {
      Object.keys(item).forEach((key) => allKeys.add(key));
    });
    const columns = Array.from(allKeys).filter((key) => key !== "id");

    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky left-0 bg-background z-10">N°</TableHead>
              {columns.slice(0, 6).map((col) => (
                <TableHead key={col} className="whitespace-nowrap">
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="sticky left-0 bg-background font-medium">
                  {index + 1}
                </TableCell>
                {columns.slice(0, 6).map((col) => (
                  <TableCell key={col} className="max-w-[200px] truncate">
                    {col === "created_at"
                      ? formatDate(item[col] as string)
                      : formatValue(item[col])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Accueil</span>
            </Link>
            <img src={logoWaswia} alt="WASWIA" className="h-10" />
            <Button variant="ghost" size="icon" onClick={loadData}>
              <RefreshCw className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Tableau de bord</h1>
          <p className="text-muted-foreground">Gestion des réponses aux enquêtes WASWIA</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="waswia-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
              <Hammer className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{artisanData.length}</p>
              <p className="text-sm text-muted-foreground">Artisans</p>
            </div>
          </div>
          <div className="waswia-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Users className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{visiteurData.length}</p>
              <p className="text-sm text-muted-foreground">Visiteurs</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-xl"
            />
          </div>
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="h-12 rounded-xl w-full sm:w-auto"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="artisans" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 h-12 rounded-xl">
            <TabsTrigger value="artisans" className="rounded-lg">
              <Hammer className="w-4 h-4 mr-2" />
              Artisans ({filterData(artisanData).length})
            </TabsTrigger>
            <TabsTrigger value="visiteurs" className="rounded-lg">
              <Users className="w-4 h-4 mr-2" />
              Visiteurs ({filterData(visiteurData).length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="artisans" className="space-y-4">
            <div className="flex justify-end">
              <Button
                variant="gradient"
                onClick={() => exportToExcel(filterData(artisanData), "artisans")}
                disabled={filterData(artisanData).length === 0}
              >
                <Download className="w-5 h-5" />
                <span>Télécharger Excel</span>
              </Button>
            </div>
            <div className="waswia-card !p-0 overflow-hidden">
              {renderTable(artisanData, "artisans")}
            </div>
          </TabsContent>

          <TabsContent value="visiteurs" className="space-y-4">
            <div className="flex justify-end">
              <Button
                variant="gradient"
                onClick={() => exportToExcel(filterData(visiteurData), "visiteurs")}
                disabled={filterData(visiteurData).length === 0}
              >
                <Download className="w-5 h-5" />
                <span>Télécharger Excel</span>
              </Button>
            </div>
            <div className="waswia-card !p-0 overflow-hidden">
              {renderTable(visiteurData, "visiteurs")}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
