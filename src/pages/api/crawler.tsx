import axios from "axios";
import { load } from "cheerio";
import { NewsContentsType, PressContentType, RankingType } from "@/types/DataType";

export const getData = async (url: string) => {
  try {
    const html = await axios.get(url);
    const $ = load(html.data);

    let content: NewsContentsType[] = [];
    const ARTICLE_SELECTOR = $(
      "div.section_latest_article > div > ul.sa_list > li > div > div.sa_item_flex",
    );

    ARTICLE_SELECTOR.map((idx, el) => {
      content[idx] = {
        id: idx,
        headline: $(el).find(".sa_text > a > strong").text(),
        link: $(el).find("div.sa_thumb > .sa_thumb_inner > a.sa_thumb_link").attr("href"),
        pressInfo: $(el).find(".sa_text_info_left > .sa_text_press").text(),
        date: $(el).find(".sa_text_info_left > .sa_text_datetime > b").text(),
        content: $(el).find(".sa_text_lede").text(),
        imgSrc: $(el)
          .find(".sa_thumb > .sa_thumb_inner > a.sa_thumb_link > img")
          .attr("data-src")
          ?.split("?")[0],
      };
    });

    return content;
  } catch (e) {
    console.log(e);
  }
};

export const getRankingData = async (url: string) => {
  try {
    const html = await axios.get(url);
    const $ = load(html.data);

    let rkContent: RankingType = {
      pressName: "",
      pressImgSrc: "",
      pressContent: [],
    };
    let pressContent: PressContentType[] = [];
    const RANKING_SELECTOR = $(
      "section.press_content > div.press > div.press_ranking_home > div.press_ranking_box > ul.press_ranking_list > li",
    );
    const PRESS_SELECTOR = $(
      "section.press_content > header > .press_hd_main > .press_hd_main_inner",
    );

    RANKING_SELECTOR.map((idx, el) => {
      pressContent[idx] = {
        id: idx,
        headline: $(el).find("a > .list_content > strong").text(),
        link: $(el).find("a").attr("href"),
        viewCount: $(el)
          .find("a > .list_content > .list_view")
          .text()
          .replace(/\n/g, "")
          .replace(/조회수/g, "")
          .trim(),
        imgSrc: $(el).find("a > .list_img > img").attr("src")?.split("?")[0],
      };
    });

    rkContent = {
      pressName: PRESS_SELECTOR.find(
        ".press_hd_info > .press_hd_main_info > .press_hd_top > .press_hd_name > a",
      )
        .text()
        .replace(/\n/g, "")
        .replace(/\t/g, ""),
      pressImgSrc: PRESS_SELECTOR.find(".press_hd_ci > a.press_hd_ci_image > img")
        .attr("src")
        ?.split("?")[0],
      pressContent: [...pressContent],
    };

    return rkContent;
  } catch (e) {
    console.log(e);
  }
};
