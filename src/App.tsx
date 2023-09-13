import { ThemeContextProvider } from "./context/ThemeContext";
import { MiPortafolio } from "./components/MiPortafolio";

function App() {
  return (
    <ThemeContextProvider>
      <MiPortafolio/>
    </ThemeContextProvider>
  )
}

export default App
