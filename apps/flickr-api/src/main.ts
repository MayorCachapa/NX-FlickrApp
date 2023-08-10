/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import axios from 'axios';
import express from 'express';

const app = express();

app.get('/api', async (req, res) => {
  const result = await axios.get('https://www.flickr.com/services/feeds/photos_public.gne?format=json')

  if (typeof result.data === 'string') {
    let sanitizedResult = result.data.replace('jsonFlickrFeed(', '');
    if (sanitizedResult.at(-1) === ')') {
      sanitizedResult = sanitizedResult.substring(0, sanitizedResult.length - 1)
    }
    const feed = JSON.parse(sanitizedResult)
    res.send(feed.items)
  } else {
    res.status(500).send({ message: "Could not sanitize the data correctly from FlickApi" });
  }
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
