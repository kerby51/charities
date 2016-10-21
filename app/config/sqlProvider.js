const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  donations: {
    all: sql('./sql/donation/all.sql'),
    create: sql('./sql/donation/create.sql'),
  },
};

module.exports = sqlProvider;



