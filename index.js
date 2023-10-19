import blue from "@atproto/api";
import 'dotenv/config';

const { BskyAgent } = blue;

const BLUESKY_BOT_USERNAME = process.env.BLUESKY_BOT_USERNAME;
const BLUESKY_BOT_PASSWORD = process.env.BLUESKY_BOT_PASSWORD;

const generateQuote = async () => {
  const { RichText } = blue;
  const agent = new BskyAgent({ service: "https://bsky.social/" });
  await agent.login({
    identifier: BLUESKY_BOT_USERNAME,
    password: BLUESKY_BOT_PASSWORD,
  });
  const rt = new RichText({ text: 'This is a test' });
  const postRecord = {
    $type: "app.bsky.feed.post",
    text: rt.text,
    facets: rt.facets,
    createdAt: new Date().toISOString(),
  };
  await agent.post(postRecord);
};

generateQuote();
