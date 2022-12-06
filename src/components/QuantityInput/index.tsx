import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityImputProps {
    size?: "medium" | "small";
}

export function QuantityInput({ size = "medium"}: QuantityImputProps) {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper>
                <Minus size={14} weight="fill" />
            </IconWrapper>
            <input type="number" readOnly value={1} />
            <IconWrapper>
                <Plus size={14} weight="fill" />
            </IconWrapper>
        </QuantityInputContainer>
    )
}