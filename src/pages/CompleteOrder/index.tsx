import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

const comfirmOrderValidtionSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
});

export type OrderData = zod.infer<typeof comfirmOrderValidtionSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(comfirmOrderValidtionSchema)
    })

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmedOrder(data: ConfirmOrderFormData) {
        console.log(data);
        
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer 
                className="container" 
                onSubmit={handleSubmit(handleConfirmedOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>  
        </FormProvider>        
    )
}