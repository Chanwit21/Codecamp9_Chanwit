const { readFile, writeFile } = require('fs/promises');

exports.readFileFromDBS = async (path) => {
  const data = await readFile(`data/${path}.json`, 'utf-8');
  return JSON.parse(data);
};

exports.writeFileFromDBS = async (path, data) => {
  await writeFile(`data/${path}.json`, JSON.stringify(data), 'utf-8');
};
