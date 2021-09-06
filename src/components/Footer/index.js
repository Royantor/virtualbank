import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterLinkContainer,
    FooterLink,
    FooterLinkTitle,
    FooterLinksItems,
    FooterWrap,
    FooterLinksWrapper,
    SocialIconLink,
    SocialLogo,
    SocialMedia,
    SocialMediaIcons,
    WebsiteRights,
    SocialMediaWrap
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How we work</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>terms and condition</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>support</FooterLink>
                            <FooterLink to='/signin'>destinations</FooterLink>
                            <FooterLink to='/signin'>sponsorships</FooterLink>
                        
                        </FooterLinksItems>                      
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>facebook</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>twiter</FooterLink>
                            <FooterLink to='/signin'>Linkedin</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>video</FooterLinkTitle>
                            <FooterLink to='/signin'>submit video</FooterLink>
                            <FooterLink to='/signin'>infulencer</FooterLink>
                            <FooterLink to='/signin'>workvideo</FooterLink>
                            <FooterLink to='/signin'>agency</FooterLink>
                           
                        </FooterLinksItems>                      
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Antor
                        </SocialLogo>
                        <WebsiteRights>
                            antor @{new Date().getFullYear()}
                            all rights reserved.
                        </WebsiteRights>
                        <SocialMediaIcons>
                            <SocialIconLink href="/" target="bank" aria-label="facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="bank" aria-label="youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="bank" aria-label="instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="bank" aria-label="twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="bank" aria-label="linkedin">
                                <FaLinkedinIn/>
                            </SocialIconLink>
                        </SocialMediaIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer
