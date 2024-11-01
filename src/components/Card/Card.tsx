import { FC } from "react";
import styled from "styled-components";

interface Props {
    title: string
    description: string
    icon: string
}

export const Card: FC<Props> = ({ title, description, icon }) => {

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;    
    `
    const Button = styled.button`
        background-color: #F2EAE3;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        cursor: pointer;
        transform: scale(1);
        transition: transform ease-in-out 0.3;
    &:hover {
        transform: scale(1.02);
    }`

    const CardTitle = styled.h4`
        text-align: center;
    `
    const CardDescription = styled.p`
        text-align: center;
    `
    const CardIcon = styled.img`
        height: 24px;
        z-index: 2;
    `

    return (
        <Card className="card">
            <Button className="card__button">
                <CardIcon src={icon} className="card__icon"/>
            </Button>
            <CardTitle className="card__tile h4-regular-text">{title}</CardTitle>
            <CardDescription className="card__description p4-regular-text color-text-secondary">{description}</CardDescription>
        </Card>
    )
}