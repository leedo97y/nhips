import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const HANRankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/028/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await HANRankingNews);
};

export default crawlerHandler;
