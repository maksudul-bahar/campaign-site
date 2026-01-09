import './globals.css';

export const metadata = {
  title: 'Vote for Secretary – Law & Human Rights',
  description: 'Student Parliament Campaign Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 to-yellow-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
