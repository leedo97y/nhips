import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const YHRankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/001/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await YHRankingNews);
};

export default crawlerHandler;
