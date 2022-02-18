import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

export default function ({date}) {
  return (
    <div>
      <h1>{date}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "app-de-mensagens-em-react",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  return {
    props: {
   
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
