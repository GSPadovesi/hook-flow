import { Dashboard } from './pages'
import { Header } from './components/header/header'
import { SidebarInset, SidebarProvider } from './components/ui/sidebar'
import { TooltipProvider } from './components/ui/tooltip'

function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Header />
        <SidebarInset>
          <Dashboard />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
