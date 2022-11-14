import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import Header from '../components/header.react'
import ContentList from '../components/contentList.react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <ContentList />
    </Wrapper>
  )
}
