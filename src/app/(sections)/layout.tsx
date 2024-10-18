import { HeaderComponent } from "@/components/header.component";
import Footer from "./footer/page";



export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
   
      <HeaderComponent/>

      <main className="flex-grow container mx-auto p-6">
        {children} 
      </main>

      <Footer/>
       
        
     
    </div>
  );
}
