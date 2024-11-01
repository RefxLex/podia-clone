import { FC } from 'react'
import styled from 'styled-components'
import { routes } from '../../navigation';
import { useNavigate } from 'react-router-dom';

interface Props {
    fixedHeader?: boolean
}

export const Header: FC<Props> = ({fixedHeader}) => {

    const navigate = useNavigate()

    const Logo = styled.svg`
        display: block;
        height: auto;
        width: 5rem;
    `;

    const Header = styled.header`

    `;

    const HeaderContent = styled.div`
        height: 60px;
        align-items: center;
        column-gap: 2.5rem;
        display: grid;
        grid-template-columns: auto 1fr auto;

        @media (max-width: 400px){
           column-gap: 1rem; 
        }
    `;

    const Nav = styled.nav`
        display: flex;

        @media (max-width: 920px) {
            display: none        
        }
    `;

    const NavList = styled.ul`
        display: flex;
        column-gap: 0.5rem;
        margin: 0;
        padding: 0;
    `
    const NavListItem = styled.li`

    `
    const NavItem = styled.a`
        text-decoration: none;
        color: #1c1a18;
        padding: 10px 12px;
    &:hover {
        color: #9484c6;
        transition: color 0.5s ease-in-out;
    }
    `

    const HeaderButtons = styled.div`
        display: flex;
        justify-content: right;
        column-gap: 16px;
    `

    const ContactBtn = styled.button`
        white-space: nowrap;    
    `

    return (
        <Header className={("header grid-container") + (fixedHeader ? ' header-fixed' : '')}>
            <HeaderContent className='header__content'>
                <a href="#main" className="header__skip-nav skip-to-content">Skip to content</a>
                <div className="header__logo">
                    <a href="/">
                        <span className="sr-only">Podia</span>
                        <Logo width="600" height="208" viewBox="0 0 600 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M426.204 23.724C426.204 10.4634 436.335 0.00793457 449.184 0.00793457C462.528 0.00793457 473.891 10.4634 473.891 23.724C473.891 37.4946 462.528 47.6951 449.184 47.6951C436.335 47.6951 426.204 37.4946 426.204 23.724Z" fill="currentColor"></path>
                            <path d="M436.182 63.7851C433.617 63.0544 430.883 64.8724 430.883 67.5398V163.775C430.883 165.834 432.552 167.503 434.61 167.503H465.475C467.533 167.503 469.202 165.834 469.202 163.775V67.0485C469.202 64.3536 466.416 62.5343 463.844 63.3367C459.148 64.8015 454.206 65.5778 449.184 65.5778C444.636 65.5778 440.28 64.9523 436.182 63.7851Z" fill="currentColor"></path>
                            <path d="M522.519 169.991C498.881 169.991 481.712 156.306 481.712 134.409C481.712 110.771 502.365 96.8365 538.942 93.1041L557.122 91.1791C558.811 91.0003 560.092 89.5764 560.092 87.8788C560.092 76.184 553.373 68.4705 541.679 68.4705C532.276 68.4705 525.089 73.7077 523.017 83.6386C522.613 85.5763 520.97 87.0907 518.992 87.0376L489.237 86.2388C487.153 86.1829 485.506 84.4219 485.757 82.3526C488.896 56.4193 512.058 37.6162 542.923 37.6162C575.021 37.6162 597.913 58.7663 597.913 89.1229V128.935C597.913 140.278 598.649 153.462 599.964 163.104C600.277 165.405 598.516 167.503 596.194 167.503H566.27C564.545 167.503 563.031 166.32 562.704 164.625C561.913 160.521 561.585 156.54 561.585 151.08C553.871 162.775 539.191 169.991 522.519 169.991ZM520.031 131.174C520.031 139.385 526.252 144.113 535.209 144.113C549.143 144.113 560.341 132.667 560.341 116.991C560.341 115.271 558.837 113.937 557.129 114.142L541.679 115.996C528.491 117.489 520.031 121.47 520.031 131.174Z" fill="currentColor"></path>
                            <path d="M338.205 170.239C304.613 170.239 280.726 143.117 280.726 104.549C280.726 65.7328 304.613 38.6109 338.205 38.6109C353.88 38.6109 366.819 44.5827 375.777 55.0333V3.83879C375.777 1.78033 377.446 0.111623 379.504 0.111623H410.369C412.427 0.111623 414.096 1.78033 414.096 3.83879V163.775C414.096 165.833 412.427 167.502 410.369 167.502H379.504C377.446 167.502 375.777 165.833 375.777 163.775V153.817C366.819 164.267 353.88 170.239 338.205 170.239ZM319.294 104.549C319.294 124.455 331.735 138.638 348.655 138.638C365.824 138.638 378.016 124.455 378.016 104.549C378.016 84.3946 365.824 70.2116 348.655 70.2116C331.735 70.2116 319.294 84.6435 319.294 104.549Z" fill="currentColor"></path>
                            <path d="M207.143 171.235C168.078 171.235 139.712 143.367 139.712 104.55C139.712 65.4846 168.078 37.6162 207.143 37.6162C246.457 37.6162 274.823 65.4846 274.823 104.55C274.823 143.367 246.457 171.235 207.143 171.235ZM178.279 104.55C178.279 124.705 190.223 138.888 207.143 138.888C224.312 138.888 236.256 124.705 236.256 104.55C236.256 84.1464 224.312 69.9634 207.143 69.9634C190.223 69.9634 178.279 84.1464 178.279 104.55Z" fill="currentColor"></path>
                            <path d="M3.72717 207.992C1.66871 207.992 0 206.323 0 204.265V45.0752C0 43.0168 1.66871 41.348 3.72717 41.348H34.5918C36.6503 41.348 38.319 43.0168 38.319 45.0752V55.2822C47.2767 44.5828 60.2155 38.611 76.1403 38.611C109.732 38.611 133.619 65.7329 133.619 104.301C133.619 143.117 109.732 170.239 76.1403 170.239C60.2155 170.239 47.2767 164.267 38.319 153.319V204.265C38.319 206.323 36.6503 207.992 34.5918 207.992H3.72717ZM36.3284 104.301C36.3284 124.455 48.5208 138.638 65.6897 138.638C82.6097 138.638 95.051 124.207 95.051 104.301C95.051 84.3947 82.6097 70.2117 65.6897 70.2117C48.5208 70.2117 36.3284 84.3947 36.3284 104.301Z" fill="currentColor"></path>
                        </Logo>
                    </a>
                </div>
                <Nav className="header__nav" id="header-nav" data-is-expanded="false">
                    <NavList className="header__navList" role="menubar">
                        <NavListItem className="header__navListItem p3-regular-text" role="menuitem">
                            <NavItem className="header__navItem color-text-primary" href="/website/" tabIndex={0}>Features</NavItem>
                        </NavListItem>
                        <NavListItem className="header__navListItem p3-regular-text" role="menuitem">
                            <NavItem className="header__navItem" href="/email/" tabIndex={0}>Examples</NavItem>
                        </NavListItem>
                        <NavListItem className="header__navListItem p3-regular-text" role="menuitem">
                            <NavItem className="header__navItem" href="/switch/" tabIndex={0}>Pricing</NavItem>
                        </NavListItem>
                        <NavListItem className="header__navListItem p3-regular-text" role="menuitem">
                            <NavItem className="header__navItem" href="/pricing/" tabIndex={0}>Demo</NavItem>
                        </NavListItem>
                        <NavListItem className="header__navListItem p3-regular-text" role="menuitem">
                            <NavItem className="header__navItem" href="/pricing/" tabIndex={0}>Resouces</NavItem>
                        </NavListItem>
                    </NavList>
                </Nav>
                <HeaderButtons className="header_buttons">
                    <button className="header__login-btn btn-ghost p4-regular-text" tabIndex={0} role='button'>
                        <span className="link">Login</span>
                    </button>
                    <ContactBtn className="header__contact-btn btn-primary p4-medium-text" tabIndex={0} role='button'>
                        <span className="btn__text" onClick={() => navigate(routes.Contacts)}>Contact us</span>
                    </ContactBtn>
                </HeaderButtons>
            </HeaderContent>
        </Header>
    )
}