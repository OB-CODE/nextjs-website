import styled, { css } from 'styled-components'

const Wrapper = styled.section`
    width: 80%;
    align-self: center;
    text-align: center;
    h1 {
        font-family: 'DM Serif Display';
        font-size: 52px;
        font-weight: 600;
        margin-bottom: 0px;
    }
    h2 {
        font-weight: 100;
        font-style: italic;
        font-size: 16px;
        color: gray;
        margin-bottom: 60px;
    }
`;

export default function Header() {
    return (
        <Wrapper>
            <h1>Scott O'Brien</h1>
            <h2>Writings, About, Bucket List, Cooking, Flights</h2>
        </Wrapper>
    )
}