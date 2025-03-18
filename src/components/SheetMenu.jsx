import {  Menu } from 'lucide-react';
import {
    Sheet,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetDescription,
    
  } from "@/components/ui/sheet"
  import { DialogTitle } from '@radix-ui/react-dialog';
 

export default function SheetMenu() {
  return (
    <div className='flex items-center'>
       <Sheet>
  <SheetTrigger> 
    <Menu className='text-primaryColor' size={32}/>
    </SheetTrigger>
  <SheetContent className='w-full bg-white' side={"right"}>
    <SheetHeader>
      <DialogTitle></DialogTitle>
      
      <SheetDescription className='flex flex-col font-bold text-xl gap-8 pt-10 text-[#36281F]'>

        <a href="/proyectos">Proyectos</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/lotes">Lotes</a>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
  )
}
