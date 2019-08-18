const faker = require('faker');
const _ = require('lodash');

/**
 * @public
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @param {String} props.imageUrl
 * @param {Boolean} props.isDrafted
 * @param {String} props.publishedAt
 * @returns {Object}
 */
module.exports = (props) => {
    const isDrafted = faker.random.boolean();

    const defaultProps = {
        title: faker.name.title(),
        description: faker.lorem.paragraph(),
        imageUrl: faker.image.imageUrl(),
        isDrafted,
        publishedAt: isDrafted ? faker.date.past() : null,
    };

    return _.merge({}, defaultProps, props);
};
