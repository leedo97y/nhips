import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../crawler";

const politicsNews = getData(process.env.NEXT_PUBLIC_POLITICS_NEWS_URL || "");

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await politicsNews);
};

export default crawlerHandler;
