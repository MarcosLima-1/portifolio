import { useMutation } from "@tanstack/react-query";
import type { ContactFormSchema } from "@/modules/portifolio/pages/contact/components/contact-form";
import type { TanstackMetaTags } from "@/types/tanstack-meta";

async function sendContactMessage(values: ContactFormSchema) {
	// await api.post<>(`/`)

	console.log(values);
}

const meta = {
	method: ["POST"],
	desc: "Envia uma mensagem através do formulário de contato.",
	errorMessage: "Falha ao enviar a mensagem. Por favor, tente novamente.",
} satisfies TanstackMetaTags;

export function useMutationSendContactMessage() {
	return useMutation({
		mutationFn: sendContactMessage,
		meta,
	});
}
