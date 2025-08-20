import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// --- Esta es la nueva función de fechas ---

export function formatDate(dateString: string) {
	const date = new Date(dateString);
	const now = new Date();

	// Aseguramos que ambas fechas estén en la misma zona horaria (local) para la comparación
	const dateInLocalTime = new Date(date.toLocaleString());
	const nowInLocalTime = new Date(now.toLocaleString());

	const diffInSeconds = Math.floor(
		(nowInLocalTime.getTime() - dateInLocalTime.getTime()) / 1000
	);
	const diffInDays = Math.floor(diffInSeconds / 86400);

	if (
		diffInDays < 1 &&
		nowInLocalTime.getDate() === dateInLocalTime.getDate()
	) {
		return "Hoy";
	}
	if (diffInDays === 1) {
		return "Ayer";
	}
	if (diffInDays < 7) {
		return `Hace ${diffInDays} días`;
	}

	// Para fechas de más de una semana, muestra la fecha completa
	return date.toLocaleDateString("es-AR", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC", // Usamos UTC para el formateo final para evitar desfases
	});
}
