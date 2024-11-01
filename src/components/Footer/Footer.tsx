import { FC } from "react";
import styled from "styled-components";


export const Footer: FC = () => {

    const Footer = styled.footer`
        background-color: #f5efeb;
        height: 60px;      
    `

    const FooterContent = styled.div`
        display: flex;
        align-items: center;
        column-gap: 16px;
    `
    const FooterLink = styled.a`
        text-decoration: underline;    
    `

    return(
        <Footer className="footer grid-container">
            <FooterContent className="footer__content">
                <span className="footer__text p4-regular-text color-text-secondary">Podia Labs, Inc. © 2024</span>
                <FooterLink className="footer__link p4-regular-text color-text-secondary">Terms</FooterLink>
                <FooterLink className="footer__link p4-regular-text color-text-secondary">Privacy</FooterLink>
            </FooterContent>
        </Footer>
    )
}