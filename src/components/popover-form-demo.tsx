'use client'

// 1. Imports necesarios
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {
   PopoverForm,
   PopoverFormButton,
   PopoverFormCutOutLeftIcon,
   PopoverFormCutOutRightIcon,
   PopoverFormSeparator,
   PopoverFormSuccess,
} from "@/components/ui/popover-form"; // Asegúrate que la ruta sea correcta

export default function PopoverFormFeedbackExample() {
   // 2. Estados para manejar el formulario
   const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
   const [errorMessage, setErrorMessage] = useState("");
   const [open, setOpen] = useState(false);
   const [feedback, setFeedback] = useState("");
   const [userEmail, setUserEmail] = useState(""); // <-- NUEVO ESTADO PARA EL EMAIL

   // 3. Función para enviar el email con EmailJS
   async function submit() {
      if (formState === "loading") return;

      setFormState("loading");
      setErrorMessage("");

      // AHORA ENVIAMOS AMBOS DATOS A LA PLANTILLA
      const templateParams = {
         message: feedback,
         user_email: userEmail,
      };

      try {
         const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
         const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
         const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

         if (!serviceId || !templateId || !publicKey) {
            throw new Error("EmailJS environment variables are not set!");
         }

         await emailjs.send(serviceId, templateId, templateParams, publicKey);

         setFormState("success");

         setTimeout(() => {
            setOpen(false);
            setTimeout(() => {
               setFormState("idle");
               setFeedback("");
               setUserEmail(""); // <-- Limpiar el email también
            }, 300);
         }, 3000);

      } catch (error) {
         console.error("EMAILJS FAILED...", error);
         setFormState("error");
         setErrorMessage("Something went wrong. Please try again.");
      }
   }

   // Hook para atajos de teclado
   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") {
            setOpen(false);
         }
         if ((event.ctrlKey || event.metaKey) && event.key === "Enter" && open && formState === "idle" && feedback && userEmail) {
            submit();
         }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [open, formState, feedback, userEmail]);

   return (
      <div className="">
         <PopoverForm
            title="message"
            open={open}
            setOpen={setOpen}
            showCloseButton={formState !== "success"}
            showSuccess={formState === "success"}
            openChild={
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     if (!feedback || !userEmail) return; // Validar ambos campos
                     submit();
                  }}
               >
                  {/* CONTENEDOR DE INPUTS */}
                  <div className="relative flex flex-col">
                     {/* NUEVO CAMPO PARA EL EMAIL */}
                     <input
                        type="email"
                        name="user_email" // name es importante para la semántica del form
                        placeholder="Your email address"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full rounded-t-lg p-3 text-sm outline-none border-b border-zinc-200 dark:border-zinc-600 dark:bg-zinc-700"
                        required
                        disabled={formState === "loading" || formState === "success"}
                     />

                     {/* CAMPO DEL MENSAJE */}
                     <textarea
                        name="message" // name es importante para la semántica del form
                        placeholder="Please enter your message"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="h-24 w-full resize-none p-3 text-sm outline-none dark:bg-zinc-700"
                        required
                        disabled={formState === "loading" || formState === "success"}
                     />

                     {/* MENSAJE DE ERROR */}
                     {formState === 'error' && (
                        <p className="p-3 pt-0 text-xs text-red-500">{errorMessage}</p>
                     )}
                  </div>

                  {/* BOTÓN DE ENVÍO Y DECORACIÓN */}
                  <div className="relative flex h-12 items-center px-[10px]">
                     <PopoverFormSeparator />
                     <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                        <PopoverFormCutOutLeftIcon />
                     </div>
                     <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                        <PopoverFormCutOutRightIcon />
                     </div>
                     <PopoverFormButton loading={formState === "loading"} text="Send" />
                  </div>
               </form>
            }
            successChild={
               <PopoverFormSuccess
                  title="Thank you for your message!"
                  description="I'll get back to you soon!"
               />
            }
         />
      </div>
   );
}