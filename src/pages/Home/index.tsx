import { useCart } from "../../hooks/useCart";
import { HomeContainer } from "../styles";
import { Intro } from "./components/Intro";
import { OurCoffees } from "./components/OurCoffees";

export function HomePage() {
    const {cartItems } = useCart();
    return (
        <HomeContainer>
            <Intro />
            <OurCoffees />
        </HomeContainer>
    )
} 