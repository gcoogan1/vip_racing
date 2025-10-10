import React from "react";
import WhiteLogo from "../../assets/VIPWhite.svg?react";
import Button from "../button/button";
import Discord from "../../assets/icon/Discord.svg?react";
import Twitch from "../../assets/icon/Twitch.svg?react";
import Youtube from "../../assets/icon/Youtube.svg?react";
import { competitionLinks, gameLinks, vipLeagues } from "../../appRoutes/linkLists";
import { BrandContainer, FooterContainer, FooterContent, Link, LinksContainer, LinksSection, LinkTile, Logo, SocialsContainer } from "./footer.styles"


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandContainer>
          <Logo>
            <WhiteLogo width={208} height={117} />
          </Logo>
          <SocialsContainer>
            <Button icon={<Discord width={16} height={16} />} onClick={() => console.log("Twitter clicked")} />
            <Button icon={<Twitch width={16} height={16} />} onClick={() => console.log("Facebook clicked")} />
            <Button icon={<Youtube width={16} height={16} />} onClick={() => console.log("Instagram clicked")} />
          </SocialsContainer>
        </BrandContainer>
        <LinksContainer>
          <LinksSection>
            <LinkTile>Games</LinkTile>
            {gameLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </LinksSection>
          <LinksSection>
            <LinkTile>VIP Leagues</LinkTile>
            {vipLeagues.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </LinksSection>
          <LinksSection>
            <LinkTile>Competitions</LinkTile>
            {competitionLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </LinksSection>
        </LinksContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default React.memo(Footer);