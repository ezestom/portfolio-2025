'use client'
import {
   PopoverCloseButton,
   PopoverContent,
   PopoverFooter,
   PopoverForm,
   PopoverLabel,
   PopoverRoot,
   PopoverSubmitButton,
   PopoverTextarea,
   PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
   const handleSubmit = (note: string) => {
      console.log('Submitted note:', note)
   }

   return (
      <div className="inline-flex">
         <PopoverRoot>
            <PopoverTrigger>message</PopoverTrigger>
            <PopoverContent>
               <PopoverForm onSubmit={handleSubmit}>
                  <PopoverLabel>Add Note</PopoverLabel>
                  <PopoverTextarea />
                  <PopoverFooter>
                     <PopoverCloseButton />
                     <PopoverSubmitButton />
                  </PopoverFooter>
               </PopoverForm>
            </PopoverContent>
         </PopoverRoot>
      </div>
   )
}
