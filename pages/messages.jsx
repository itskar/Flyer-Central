import Sidebar from "../components/sidebar/Sidebar";
import ComingSoon from "../components/temp/ComingSoon";
import Head from "next/head";
import News from "../components/news/News";

export default function Messages({data}) {
  const pageName = "Messages";

  return (
    <div>
      <Head>
        <title>Flyer Central | {pageName}</title>
        <meta property="og:title" content="Flyer Central" key="title" />
      </Head>
      <main className="min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar activePage={pageName} />
        <ComingSoon pageName={pageName} />
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

  var res = await fetch(`https://newsapi.org/v2/everything?sources=abc-news&q=chicago&from=${lastWeek}&to=${currentDate}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`)
  var json = await res.json()
  var newsArticles = json.articles
  var data = newsArticles.slice(0,10)

  return { props: { data } }
}