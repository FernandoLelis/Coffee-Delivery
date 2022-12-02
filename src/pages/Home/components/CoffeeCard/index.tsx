import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCardWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1670803200&Signature=Udiulv7X2MusKVLFsfe9gmSWcRHteWJhRJ--glAhWBgN2nEtBwZHZeIVK7I7hf5GSI22L6BhtZgcq-IsX5Za5n-F0q0YMv1XTJOM3YWCrVntcHdsF9XgLE~qhfHHSoO1sNc3dl71PFeomJ63puUWYvi49Lx7B2SQ4RKpjz-1QbJa~4b62pjul40vK~NPsgfIWxqUkaVYRfChMo2StgMMGuScBbxc8DTAgJb-NC9ol8XvyW-xIirkE3-Ch-LTncmzApPLjdfnERa5ynUD~o~rXqwy1CZ7L4QJX7uTjGABR-KZV8wsZuPetuWRmgIGCqGY~oBhdWH3fj73LdhLSaMi6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        
            <Tags>
                <span>tradicional</span>
                <span>com Leite</span>
            </Tags>

            <Name>Expresso Tradicional</Name>
            <Description>
                O tradicional café feito com água quente e grãos moídos
                </Description>

                <CardFooter>
                    <div>
                        <RegularText size="s">R$</RegularText>
                        <TitleText size="m" color="text" as="strong">9,90</TitleText>
                    </div>

                    <AddCardWrapper>
                        <QuantityInput />
                        <button>
                            <ShoppingCart weight="fill" size={22} />
                        </button>
                    </AddCardWrapper>
                </CardFooter>
        </CoffeeCardContainer>
    )
}