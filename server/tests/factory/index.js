const _ = require('lodash');

/**
 * @public
 * @param {Object} model
 * @param {Object={}} props
 * @param {Object={}} options
 * @param {Number=1} i
 * @returns {Object | Array<Object>}
 */
module.exports = function modelFactory(model, props = {}, options = {}, i = 1) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const modelProps = require(`./models/${_.toLower(model.tableName)}`);

    const mergedProps = _.map(Array(i), () => modelProps(props));

    const models = model.build(mergedProps, options);

    if (models.length === 1) {
        return _(models[0].toJSON())
            .omit(['createdAt', 'updatedAt', 'deletedAt'])
            .merge({
                addAuthors: () => Promise.resolve(),
                destroy: () => Promise.resolve(),
            })
            .value();
    }

    return models;
};
