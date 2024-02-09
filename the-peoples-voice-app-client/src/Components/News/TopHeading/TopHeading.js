import React from "react";
import { useTopHeading } from "../../../Hooks/useTopHeading";
import NewsCard from "../../NewsCard/NewsCard";

const TopHeading = () => {
  const [topHeading, setTopHeading] = useTopHeading();

  return (
    <div className="mt-4">
      <h3 className="text-center border-bottom">Top Heading </h3>
       <section>
            {
                topHeading.map(news=><NewsCard
                  news={news}
                  key={news.newId}
                ></NewsCard>)
            }
       </section>
    </div>
  );
};

export default TopHeading;
