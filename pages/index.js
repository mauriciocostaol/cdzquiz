import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackgound from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
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

export const Button = styled.button`
background: #f57c00;
color:#ffffff;
margin-top: 0.5rem;
width:18vw;
height:7vh;
border-radius: 4px;
border-color:#76ff03;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackgound backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="CDZ" />

      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Os Cavaleiros do Zodiaco</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu Nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar &nbsp;
                { name }
              </Button>
            </form>

          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quiz do Pessoal</h1>
          </Widget.Header>
          <p> Outros Quizzes</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackgound>
  );
}
