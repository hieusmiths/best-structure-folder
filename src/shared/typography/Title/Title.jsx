import React from 'react'
import styled from 'styled-components'

const One = styled.span`
    font-size: 1.25rem;
    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`

const Two = styled.span`
    font-size: 1.25rem;
`

export default function(props) {
    const { level } = props
    switch (level) {
        case 1: {
            return (
                <One>
                    {
                        props.children
                    }
                </One>
            );
        }
        case 2: {
            return (<Two> { props.children } </Two>)
        }
        default: {
            return (
                <div>hihi</div>
            )
        }
    }
}