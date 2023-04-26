import styled from "styled-components";
import { useLayoutEffect, FC } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar: FC = () => {
  useLayoutEffect(() => {
    document.title = "Hook examples";
  }, []);

  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <Button onClick={() => navigate("/use-deep-effect")}>
        useDeepEffect
      </Button>
      <Button onClick={() => navigate("/use-combined-ref")}>
        useCombibedRef
      </Button>
      <Button onClick={() => navigate("/use-data-fetch")}>
        useDataFetch
      </Button>
      <Button onClick={() => navigate("/use-component-update")}>
        useComponentUpdate
      </Button>
    </ButtonWrapper>
  );
};

export function addAppNavbar(Component: FC) {
  return (
    <Wrapper>
      <Navbar />
      <PageWrapper>
        <Component />
      </PageWrapper>
    </Wrapper>
  );
}

const Button = styled.button`
  margin-right: 10px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  height: calc(100vh - 50px);
`;

const ButtonWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;
