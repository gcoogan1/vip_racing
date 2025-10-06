import { LinkContainer, LinkText } from "./tabLink.styles";

type TabLinkProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

const TabLink = ({ label, active = false, onClick }: TabLinkProps) => (
  <LinkContainer onClick={onClick}>
    <LinkText $active={active}>{label}</LinkText>
  </LinkContainer>
);
export default TabLink;
