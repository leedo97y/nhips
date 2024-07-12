import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const YTNRankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/052/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await YTNRankingNews);
};

export default crawlerHandler;
