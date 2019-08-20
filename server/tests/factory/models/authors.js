const faker = require('faker');

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
module.exports = (props) => {
    const defaultProps = {
        id: faker.random.number(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        role: faker.name.jobTitle(),
        place: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
        avatarUrl: faker.image.imageUrl(),
    };

    return {
        ...defaultProps,
        ...props,
    };
};
