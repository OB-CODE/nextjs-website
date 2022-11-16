import styled from "styled-components";
import Article from "./article.react";

const Entries = styled.div`
  align-self: center;
  width: 80%;
  max-width: 650px;
`;

export default function ContentList() {
  return (
    <Entries>
      <Article />
      <Article />
      <Article />
    </Entries>
  );
}
