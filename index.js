const axios = require("axios");
const fs = require("fs");

const getQuote = async () => {
  try {
    const { data } = await axios.get("https://quotes.rest/qod?language=en&quot;);
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    console.log("new quote", `"${quote}"`);

    return {
      quote,
      author,
    };
  } catch (err) {
    console.error(err.message);
    return {};
  }
};

const generate = async () => {
  const { quote, author } = await getQuote();

  if (!quote) return;

  fs.writeFileSync("README.md", `### :wave: Hi, I’m [@fishudroid](https://github.com/fishudroid). My real name is Phạm Minh Đức. \n\n  ### :postbox: Contact me: \n\n - Email: duc0981173026@gmail.com |\n duc0868243802@gmail.com | alonevnvnvn20@gmail.com | fishutechno.droidvn@gmail.com \n - Facebook: [@Ducky.LS.Vn](https://www.facebook.com/Ducky.LS.Vn) \n - Discord: @Nakiri Ayame#7916 \n - Telegram: @DuckyNA \n  - Zalo: +84889035565 <hr> \n\n ![Ayame](/ayame-nakiri-ayame.gif)_**${quote}**_\n\n${author}`);
};

generate();
