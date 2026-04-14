export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("No URL provided");
  }

  try {
    const response = await fetch(url);
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Error fetching URL");
  }
}
