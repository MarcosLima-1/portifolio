import { CheckIcon } from "lucide-react";
import { z } from "zod/v4";
import { useAppForm } from "@/modules/form/app-form";
import { FieldErros } from "@/modules/form/field-erros";
import { FieldLabel } from "@/modules/form/field-label";
import { FieldWrapper } from "@/modules/form/field-wrapper";
import { useMutationSendContactMessage } from "@/modules/portifolio/pages/contact/api/send-contact-message";

const contactFormSchema = z.object({
	name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres.").max(100, "O nome deve ter no máximo 100 caracteres."),
	email: z.email("Por favor, insira um endereço de email válido.").max(100, "O email deve ter no máximo 100 caracteres."),
	message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres.").max(600, "A mensagem deve ter no máximo 400 caracteres."),
});
export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function ContactForm() {
	const { mutateAsync: sendMessage, isSuccess } = useMutationSendContactMessage();

	const defaultValues: ContactFormSchema = {
		name: "",
		email: "",
		message: "",
	};

	const Form = useAppForm({
		validators: {
			onMount: contactFormSchema,
			onChange: contactFormSchema,
			onSubmit: contactFormSchema,
		},
		defaultValues,
		onSubmit: ({ value }) => onSubmit(value),
	});

	async function onSubmit(value: ContactFormSchema) {
		await sendMessage(value);
	}

	if (isSuccess) {
		return (
			<div className="flex h-[300px] w-full flex-col items-center justify-center p-2 text-center">
				<CheckIcon className="text-success" />
				<p className="font-bold text-lg">Mensagem enviada com sucesso!</p>
			</div>
		);
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				Form.handleSubmit();
			}}
			className="space-y-4"
		>
			<div className="flex gap-4 max-md:flex-col">
				<Form.AppField
					name="name"
					children={(Field) => (
						<FieldWrapper>
							<FieldLabel>Seu Nome</FieldLabel>
							<Field.TextField placeholder="Insira seu nome completo" maxLength={100} />
							<FieldErros meta={Field.getMeta()} />
						</FieldWrapper>
					)}
				/>
				<Form.AppField
					name="email"
					children={(Field) => (
						<FieldWrapper>
							<FieldLabel>Seu E-mail</FieldLabel>
							<Field.TextField placeholder="seu.email@exemplo.com" maxLength={100} />
							<FieldErros meta={Field.getMeta()} />
						</FieldWrapper>
					)}
				/>
			</div>

			<Form.AppField
				name="message"
				children={(Field) => (
					<FieldWrapper>
						<FieldLabel>Sua Mensagem</FieldLabel>
						<Field.TextareaField placeholder="Escreva sua mensagem aqui..." className="h-[400px]" maxLength={600} />
						<FieldErros meta={Field.getMeta()} />
					</FieldWrapper>
				)}
			/>

			<Form.AppForm>
				<Form.SubmitButton className="max-lg:w-full" size="lg">
					Enviar Menssagem!
				</Form.SubmitButton>
			</Form.AppForm>
		</form>
	);
}
