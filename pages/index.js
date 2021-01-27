import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizBackgound from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import Head from 'next/head'
// const BackgroundImage = styled.div` 
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackgound backgroundImage ={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="CDZ" />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
          <h1>Os Cavaleiros do Zodiaco</h1>
          </Widget.Header>
          <Widget.Content>
          <p>Meteooooro de Pegasus!!!!</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>Quiz do Pessoal</h1>
          <p> Outros Quizzes</p>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackgound>
  );
}
