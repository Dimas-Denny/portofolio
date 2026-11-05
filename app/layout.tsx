import { Anton, Bonheur_Royale, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const bonheurRoyale = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonheur-royale",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${bonheurRoyale.variable} ${anton.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
