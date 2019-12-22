import styled from 'styled-components'

const StyledSectionName = styled.div`
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`

const StyledCategoryPageName = styled.span`
    font-size: 2.25rem;
    line-height: 1.5;
    font-weight: 900;
`

const StyledButtonAdd = styled.button`
    font-size: 1.25rem;
    line-height: 24px;
    color: #fff;
    font-weight: 700;
    background-color: #0984e3;
    border: none;
    &:focus {
        outline: 0 !important;
    }
`

export {
    StyledSectionName,
    StyledCategoryPageName,
    StyledButtonAdd
}