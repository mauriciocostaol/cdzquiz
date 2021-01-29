import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import QuizContainer from '../src/components/QuizContainer';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackgound from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackgound backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="CDZ" />

      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Os Cavaleiros do Zodiaco</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Digite seu Nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>

                {`Jogar ${name} `}
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
      <GitHubCorner projectUrl="https://github.com/mauriciocostaol/cdzquiz" />
    </QuizBackgound>
  );
}
