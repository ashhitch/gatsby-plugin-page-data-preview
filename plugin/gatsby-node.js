// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    onlyDev: Joi.boolean().default(true),
  });
};
