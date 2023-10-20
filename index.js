import blue from "@atproto/api";

const { BskyAgent } = blue;

const generateQuote = async () => {
  const { RichText } = blue;
  const agent = new BskyAgent({ service: "https://bsky.social/" });
  await agent.login({
    identifier: process.env.BLUESKY_BOT_USERNAME,
    password: process.env.BLUESKY_BOT_PASSWORD,
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
