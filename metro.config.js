const extraNodeModules = require('node-libs-browser');
const exclusionList = require("metro-config/src/defaults/exclusionList");

module.exports = {
  resolver: {
    extraNodeModules,
    blacklistRE: exclusionList([/#current-cloud-backend\/.*/]),
  },
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
};