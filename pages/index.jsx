import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/login/Login";
import Head from "next/head";
import News from "../components/news/News";
import { useState } from "react";
import axios from "axios";

export default function Home({data}) {
  const pageName = "Home";
  const { data: session } = useSession();
  

  if (!session) {
    return (
      <div className="flex align-middle w-screen bg-login">
        <Head>
          <title>Flyer Central | Login</title>
          <meta property="og:title" content="Flyer Central" key="title" />
        </Head>
        <Login />
      </div>
    );
  } else if (!session.user.email.endsWith("@lewisu.edu")) {
    console.log("Email doesn't end with @lewisu.edu");
    return (
      <div className="flex align-middle w-screen bg-login">
        <Head>
          <title>Flyer Central | Login</title>
          <meta property="og:title" content="Flyer Central" key="title" />
        </Head>
        <Login />
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Flyer Central | {pageName}</title>
        <meta property="og:title" content="Flyer Central" key="title" />
      </Head>
      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar activePage={pageName} />
        <Feed />
        <News data={data}/>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let lastWeek = `${year}-${month}-${day-7}`;

  var res = await fetch(`https://newsapi.org/v2/everything?sources=abc-news&q=chicago&from=${lastWeek}&to=${currentDate}&sortBy=publishedAt&apiKey=9e2ffd0a83f84d5bbf58645b5dca4350`)
  var json = await res.json()
  var newsArticles = json.articles
  var data = newsArticles.slice(0,6)
  

  // Pass data to the page via props
  return { props: { data } }
}