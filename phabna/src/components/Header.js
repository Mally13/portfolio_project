import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background-color: transparent;
  color: white;
  padding: 1rem;
  display:flex;
  justify-content:space-between;
`;

function Header() {
  return (
    <StyledHeader>
        Header
    </StyledHeader>
  )
}

export default Header