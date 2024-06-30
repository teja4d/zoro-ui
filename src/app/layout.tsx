import Head from 'next/head';
import Navbar from '../components/nav-bar/nav-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* Ensure the path starts with a slash for root directory */}
      </Head>
      <Navbar />
      <div className="h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}
