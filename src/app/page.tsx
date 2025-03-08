import { Navbar } from '@/components/layout/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold">Welcome to KrimOS</h1>
      </main>
    </>
  );
}
