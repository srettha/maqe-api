const faker = require('faker');
const _ = require('lodash');

/**
 * @public
 * @param {Object} props
 * @param {Number} props.id
 * @param {String} props.name
 * @param {String} props.role
 * @param {String} props.place
 * @param {String} props.avatarUrl
 * @returns {Object}
 */
module.exports = function (props) {
    const defaultProps = {
        id: faker.random.number(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        role: faker.name.jobTitle(),
        place: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
        avatarUrl: faker.image.imageUrl(),
    };

    return _.merge({}, defaultProps, props);
};
