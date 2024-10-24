import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const handleModeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div>
      <Button variant="noBg" size="icon" onClick={handleModeToggle} className="h-full w-full opacity-30 hover:opacity-100 transition-all">
        <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
        <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  )
}