import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffessContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffessContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeeList>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeList>            
        </OurCoffessContainer>
    )
}