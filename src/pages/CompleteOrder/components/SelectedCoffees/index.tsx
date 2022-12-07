import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    const { cartItems } = useCart();
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DetailContainer>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item} />    
                ))}

                <ConfirmationSection />
            </DetailContainer>
        </SelectedCoffeesContainer>
    )
}