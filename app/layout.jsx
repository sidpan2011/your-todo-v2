
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
export const metadata = {
  title: "Taskly | Conquer Your Tasks, Master Your Day.",
  description: "Taskly is your ultimate productivity companion. Our streamlined task management app helps you organize, prioritize, and accomplish your goals with ease.",
  icons: {
    icon: [
      { url: '/favicon.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white dark:bg-black"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
