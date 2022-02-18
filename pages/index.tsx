import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

interface PagePros {
  id: number;
  html_url: string;
  name: string;
  date: any;
}

interface RepoProps {
  page: PagePros[];
  date: any;
}

export default function Home({ page, date }: RepoProps) {


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>{date}</h1>
  
        <ul>
          {page.map((repo) => (
            <li key={repo.id}>
              {" "}
              <a href={repo.html_url}>{repo.name}</a>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resulPage = await axios(
    "https://api.github.com/users/Emerson-lab/repos"
  ).then((response) => {
    return response.data;
  });

  return {
    props: {
      page: resulPage,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
