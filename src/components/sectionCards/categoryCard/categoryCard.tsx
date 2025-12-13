import { CardContainer, HeaderContainer, InfoGrid, Title } from "./categoryCard.styles"

type CategoryCardProps = {
  title: string;
  children?: React.ReactNode;
}

const CategoryCard = ({ title, children }: CategoryCardProps) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <Title>{title}</Title>
      </HeaderContainer>
      <InfoGrid>
        {children}
      </InfoGrid>
    </CardContainer>
  )
}

export default CategoryCard