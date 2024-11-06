import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const HANRankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/028/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const ifNoneMatch = req.headers["if-none-match"];
    const data = await HANRankingNews;

    const etag = `"${Buffer.from(JSON.stringify(data)).toString("base64")}"`;

    if (ifNoneMatch === etag) {
      res.status(304).end();
      return;
    }

    res.setHeader("ETag", etag);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching ranking data:", error);
    res.status(500).json({ message: "서버 오류로 랭킹 데이터를 가져올 수 없습니다." });
  }
};

export default crawlerHandler;
