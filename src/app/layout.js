import "./globals.css";

export const metadata = {
  title: "Rick And Morty Front",
  description: "Site simples de personagens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}