import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "../crawler";

const ITNews = getData(process.env.NEXT_PUBLIC_IT_NEWS_URL || "");

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await ITNews);
};

export default crawlerHandler;
