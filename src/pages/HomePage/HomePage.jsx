import {
  Backround,
  CatalogLink,
  ContactDetails,
  ContactInfo,
  ContactTitle,
  Goal,
  PageContainer,
  Welcome,
  Wrapper,
} from "./HomePage.styled";

export const HomePage = () => {
  return (
    <Backround>
      <PageContainer>
        <Wrapper>
          <Welcome>Welcome to our car rental website!</Welcome>
          <Goal>
            Our goal is to provide you with the best car rental experience. We
            have a wide selection of cars for all your needs.
          </Goal>

          <ContactInfo>
            <ContactTitle>Contact Information</ContactTitle>
            <ContactDetails>Rental Phone: +38(073)0000000</ContactDetails>
            <ContactDetails>Email: info@example.com</ContactDetails>
          </ContactInfo>

          <CatalogLink href="catalog">Go to the car catalog</CatalogLink>
        </Wrapper>
      </PageContainer>
    </Backround>
  );
};
