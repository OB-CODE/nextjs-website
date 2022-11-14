import styled from 'styled-components'

const ArticleTitle = styled.h2`
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: normal;
    font-family: 'DM Serif Display';
    text-size-adjust: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    color: rgb(39,39,39);
`;

const ArticleContent = styled.div`
    font-family: "DM Sans";
    font-size: 18px;
    line-height: 21.6px;
    text-align: left;
    text-size-adjust: 100%;
    color: rgba(0,0,0,0.6);
    margin-bottom: 40px;
`;

export default function Article() {
  return (
    <div>
      <ArticleTitle>DM Serif Display & DM Sans</ArticleTitle>
      <ArticleContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ArticleContent>
    </div>
  );
}
