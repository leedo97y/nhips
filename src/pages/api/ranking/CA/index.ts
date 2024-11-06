import type { NextApiRequest, NextApiResponse } from "next";
import { getRankingData } from "../../crawler";

const CARankingNews = getRankingData(
  process.env.NEXT_PUBLIC_RANKING_NEWS_URL + "/449/ranking?type=popular" || "",
);

const crawlerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const ifNoneMatch = req.headers["if-none-match"];
    const data = await CARankingNews;

    // etag를 통해 이전에 받은 정보와 동일한지 확인
    const etag = `"${Buffer.from(JSON.stringify(data)).toString("base64")}"`;

    if (ifNoneMatch === etag) {
      // 304 Not Modified로 요청을
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
