import axios from "axios";
import { load } from "cheerio";
import { NewsContentsType } from "@/types/DataType";

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
