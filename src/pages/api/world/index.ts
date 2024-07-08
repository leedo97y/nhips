import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../crawler";

const worldNews = getData(process.env.NEXT_PUBLIC_WORLD_NEWS_URL || "");

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await worldNews);
};

export default crawlerHandler;