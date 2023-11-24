/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  // eslint-disable-next-line no-unused-vars
  process(sourceText, sourcePath, options) {
    return { code: `module.exports = ${JSON.stringify(path.basename(sourcePath))}` };
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
