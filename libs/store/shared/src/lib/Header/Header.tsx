import { Header, Title } from '@mantine/core';
import styled from 'styled-components';

const StyledHeader = styled(Header)`
  background-color: ${({ theme }) => theme.colors.blue[4]};
  color: ${({ theme }) => theme.colors.gray[0]};
`;

export const GameHeader = () => (
  <StyledHeader height={70} p="md">
    <Title>Board Game Hoard</Title>
  </StyledHeader>
);
