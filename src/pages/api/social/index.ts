import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../crawler";

const socialNews = getData(process.env.NEXT_PUBLIC_SOCIAL_NEWS_URL || "");

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await socialNews);
};

export default crawlerHandler;
