// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const { EMOJIS } = require("./constants");

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    message: Joi.string().default("Hello from the Plugin"),

  });
};
