import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffessContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffessContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeList>            
        </OurCoffessContainer>
    )
}