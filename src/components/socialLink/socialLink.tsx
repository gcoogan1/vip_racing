import React from "react";
import { SocialLinkContainer } from "./socialLink.styles";

// NOTE: Remember to add width and height of 20px to svg icon

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <SocialLinkContainer href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
      {label}
    </SocialLinkContainer>
  )
}

export default React.memo(SocialLink);