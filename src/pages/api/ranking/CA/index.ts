import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const CARankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/449/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await CARankingNews);
};

export default crawlerHandler;
