import { FC } from "react";
import styled from "styled-components";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { Card } from "../components/Card/Card";
import iconShoppingCart from '../assets/icons8-shopping-cart-24.png';
import iconEnter from '../assets/icons8-enter-24.png';
import iconCloudUpload from '../assets/icons8-cloud-upload-24.png';
import iconDollar from '../assets/icons8-dollar-24.png';
import iconPuzzle from '../assets/icons8-puzzle-24.png';
import iconOptions from '../assets/icons8-options-24.png';
import { useNavigate } from "react-router-dom";
import { routes } from "../navigation";


export const HomePage: FC = () => {

    const navigate = useNavigate()
    
    const HeroSection = styled.section`
        display: grid;
        column-gap: 32px;

        @media (min-width: 45rem){
            grid-template-columns: 50% 50%;
        }
    `;

    const CardsWrapper = styled.section`
        margin: 64px 0px;
        display: grid;
        column-gap: 32px;
        row-gap: 48px;

        @media (min-width: 35rem){
           grid-template-columns: repeat(2, 1fr);
           grid-template-rows: repeat(3, min-content);       
        }

        @media (min-width: 45rem){
           grid-template-columns: repeat(3, 1fr);
           grid-template-rows: repeat(2, min-content);       
        }
    `;

    const Content = styled.div`
        display: flex;
        flex-direction: column;
        gap: 76px;
        margin-top: 92px;
    `
    const HeroSectionBlock = styled.div`
    `
    const CardsSectionTitle = styled.h2`
        text-align: center
    `
    const CardsSectionParagraph = styled.p`
        text-align: center
    `
    const BtnWrapper = styled.div`
        display: flex;
        justify-content: center;
    `
    const ActionSection = styled.section`
        display: grid;
        justify-content: center;
        border-radius: 8px;
        background-color: #201445;
        width: 100%;
        padding: 64px 24px;
        margin-bottom: 64px;
    `
    const ActionSectionTitle = styled.h3`
       text-align: center; 
    `
    const ActionSectionText = styled.p`
        text-align: center;
        padding-bottom: 24px;
    `

    return (
        <main id="main" className="home-page grid-container">
            <Content className="home-page__content">
                <HeroSection className="hero-section">
                    <HeroSectionBlock className="hero-section__block">
                        <h1 className="hero-section__title h1-regular-text">
                            Sell online courses, coaching sessions, 
                            webinars, workshops, ebooks and anything you can think of on Podia
                        </h1>
                        <p className="hero-section__text p4-regular-text color-text-secondary">
                            Get everything you need in one place that you own. 
                            Podia takes care of hosting products, taking payments, 
                            and getting products to your customers. 
                            And you always control your own work
                        </p>
                    </HeroSectionBlock>
                    <div className="hero-section__video">
                        <LiteYouTubeEmbed 
                            id="dQw4w9WgXcQ"
                            title="Rick Astley 'Never gonna give you up'"
                        />
                    </div>
                </HeroSection>
                <section className="cards-section">
                    <CardsSectionTitle className="cards-section__title h2-regular-text">All you have to do is to make the product. Podia takes of the details for you.</CardsSectionTitle>
                    <CardsSectionParagraph className="cards-section__text p4-regular-text color-text-secondary">
                        Podia lets you make sales page, take payments, 
                        and give your customers access all in one place. 
                        Host and sell your products without needing to figure out a handful of new tools.
                    </CardsSectionParagraph>
                    <CardsWrapper className="cards-section__cards-wrapper">
                        <Card
                            icon={iconShoppingCart}
                            title="Checkout and sales are handled for you"
                            description="You don't have to figure out a bunch of tools or website embeds.
                            Just connect a payment provider and your Podia sites takes care of payments for you."
                        />
                        <Card
                            icon={iconEnter}
                            title="Your customers log in, and your products are there for them"
                            description="Your Podia site handles access to products for you.
                                Everything is in one place. When your customers buy a product,
                                they get a log in. After that they can see all the products
                                they've bought from you."
                        />
                        <Card
                            icon={iconCloudUpload}
                            title="Upload your product. Make your sales page. Done"
                            description="You could sell a digital product by this afternoon.
                                Podia handles hosting, sales pages, checkout, and delivery.
                                All you need is something to sell."
                        />
                        <Card
                            icon={iconPuzzle}
                            title="Manage organizations, teams and projects"
                            description="Use Abstract organizations, teams and projects
                                to organize your people and your work."
                        />
                        <Card
                            icon={iconDollar}
                            title="Manage billing"
                            description="Change subscriptions and payment details"
                        />
                        <Card
                            icon={iconOptions}
                            title="Manage your account"
                            description="Configure your account settings such as your email, profile details and password"
                        />
                    </CardsWrapper>
                    <BtnWrapper className="cards-section__btn-wrapper cards-section__btn-wrapper_margin-top">
                        <button className="cards-section__contact-btn btn-primary p4-medium-text" onClick={() => navigate(routes.Contacts)}>
                            Contact us
                        </button>                        
                    </BtnWrapper>
                </section>
                <ActionSection className="action-section">
                    <ActionSectionTitle className="action-section__tite h3-regular-text color-text-inverted">Get your free Podia account</ActionSectionTitle>
                    <ActionSectionText className="action-section__text p4-regular-text color-text-light">
                        Join the 150,000 creators who use Podia to create websites,
                        sell digital products, and build online communities.
                    </ActionSectionText>
                    <BtnWrapper className="action-section__btn-wrapper">
                        <button className="action-section__button btn-inverted p4-medium-text" onClick={() => navigate(routes.Contacts)}>
                            Contact us
                        </button>
                    </BtnWrapper>
                </ActionSection>
            </Content>
        </main>
    )
}