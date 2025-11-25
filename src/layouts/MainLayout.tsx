import { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import VegetaMascot from '../components/VegetaMascot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-midnight-900 text-slate-100 overflow-x-hidden relative">
      <VegetaMascot />
      <NavBar />
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
