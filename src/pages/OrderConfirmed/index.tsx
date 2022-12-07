import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg"
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfirmedPage() {
    const { colors } = useTheme();
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">
                    Uhu! Pedido confirmado
                </TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguradar que logo o café chegará até você
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin width="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Entrega em <strong>Rua João Daniel Martinelli, 102 </strong> <br />
                                Farrapos - Porto Alegre, RS
                            </RegularText>
                        }
                    />
                    <InfoWithIcon
                        icon={<Clock width="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                               Previsão de entrega <br/> 
                               <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />
                    <InfoWithIcon
                        icon={<CurrencyDollar width="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Pagemento na entrega
                                <br />
                                <strong>
                                  Cartão de crédito  
                                </strong>
                            </RegularText>
                        }
                    />
                </OrderDetailsContainer>
                <img src={confirmedOrderIllustration} />
            </section>
        </OrderConfirmedContainer>
    )
}