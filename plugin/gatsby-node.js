// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    message: Joi.string().default("Hello from the Plugin"),
  });
};
