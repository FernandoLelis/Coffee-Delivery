import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { DetailContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>

            <DetailContainer>
                <CoffeeCartCard />
                <CoffeeCartCard />
                <CoffeeCartCard />
            </DetailContainer>
        </SelectedCoffeesContainer>
    )
}