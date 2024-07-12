import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const SBSRankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/055/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await SBSRankingNews);
};

export default crawlerHandler;