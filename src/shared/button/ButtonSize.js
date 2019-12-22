import styled from 'styled-components'

const Wrapper = styled.div`
    line-height: 1.5;
    font-size: 1rem;
    text-align: center;
    padding-top: .75rem;
    padding-bottom: .75rem;
    border: ${props => props.theme.color.second};
`

export default function(props) {

    return (
        <Wrapper className="pointer rounded">
            ML
        </Wrapper>
    )
}