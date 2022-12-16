
import NewsButton from "./NewsButton";

function News({ data }) {

  return (
    <div className="text-textWhitePrimary hidden lg:inline max-w-[360px] xl:w-[360px] py-10 space-y-5 ml-8">
      {/* <SearchBar /> */}
      <div className="backdrop-brightness-150 rounded-xl xl:w-auto lg:w-auto ">
        <div className="flex flex-col">
          <div className="mx-5 mt-3 mb-3">
            <p className="font-bold text-xl">What&apos;s happening</p>
          </div>
          {data.map((article) => (
            <NewsButton
              key={article.title}
              link={article.url}
              source={article.author}
              title={article.title}
              timeStamp={article.publishedAt.slice(0, 10)}
              imageSrc = {article.urlToImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
