import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../crawler";

const economyNews = getData(process.env.NEXT_PUBLIC_ECONOMY_NEWS_URL || "");

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await economyNews);
};

export default crawlerHandler;
