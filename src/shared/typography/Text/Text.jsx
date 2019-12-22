import React, { Component } from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
    color: ${props => props.theme.color[props.color] || props.color};
`

const switchColorByType = (type) => {
    switch (type) {
        case 'primary': {
            return 'blue';
        }
        default: {
            return type;
        }
    }
    
}

export default function Text({type, children, className}) {
	const color = switchColorByType(type)
	return (
        <StyledText color={color} className={className}> { children }</StyledText>
	)
}
