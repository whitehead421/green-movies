import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.send('API handler for scraped TMDB data');
});

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dataPath = path.join(__dirname, 'data');

const createEndpoints = async (basePath, currentPath = '') => {
  try {
    const items = await fs.readdir(basePath, { withFileTypes: true });

    for (const item of items) {
      const itemPath = path.join(basePath, item.name);
      const relativePath = path.join(currentPath, item.name);

      if (item.isDirectory()) {
        await createEndpoints(itemPath, relativePath);
      } else if (item.isFile() && item.name.endsWith('.json')) {
        const endpoint = `/${relativePath
          .replace(/\\/g, '/')
          .replace(/\.json$/, '')}`;
        app.get(endpoint, async (_, res) => {
          try {
            const data = await fs.readFile(itemPath, 'utf-8');
            res.json(JSON.parse(data));
          } catch (err) {
            console.error(`Error reading file ${itemPath}:`, err);
            res
              .status(500)
              .json({ error: 'Internal Server Error', status: 500 });
          }
        });
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${basePath}:`, err);
  }
};

createEndpoints(dataPath);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
