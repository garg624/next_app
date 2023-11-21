import "@/app/ui/global.css";
import {inter} from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The className property is typically used to apply the font to all elements within a specific component or container.  */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
