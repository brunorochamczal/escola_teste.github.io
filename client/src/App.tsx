import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter"; // Importamos o Router como WouterRouter
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EducacaoBasica from "./pages/EducacaoBasica";
import Contact from "./pages/Contact";

function RouterContent() { // Mudamos o nome aqui para não conflitar com o componente da lib
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/eventos" component={Events} />
          <Route path="/educacao-basica" component={EducacaoBasica} />
          <Route path="/contato" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {/* Adicionamos o WouterRouter com o caminho do seu repositório */}
          <WouterRouter base="/escola_teste">
            <RouterContent />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
