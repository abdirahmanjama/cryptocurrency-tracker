import React from 'react'
import styled from 'styled-components'

function Header(change) {
    return (
        <div>
            <Title>Search Currency</Title>
            <form>
                <Input placeholder="Search" type="text" onChange={change}></Input> 
            </form>
        </div> 
    )
}

export default Header

const Title = styled.h1`

`

const Input = styled.input``