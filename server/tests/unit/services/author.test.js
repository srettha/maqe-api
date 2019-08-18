const chai = require('chai');
const faker = require('faker');
const sinon = require('sinon');

sinon.assert.expose(chai.assert, { prefix: '' });
const { assert } = chai;

const { Author } = require('../../../models');
const authorService = require('../../../services/author');
const modelFactory = require('../../factory');

describe('services/author', () => {
    describe('createAuthor()', () => {
        const authorObj = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            role: faker.name.jobTitle(),
            place: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
            avatarUrl: faker.image.imageUrl(),
        };
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Author, authorObj);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should create new author', async () => {
            sandbox.stub(Author, 'create')
                .resolves(expected);

            const actual = await authorService.createAuthor(authorObj);
            assert.equal(actual, expected);
        });
    });

    describe('deleteAuthor()', () => {
        const id = 1;
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Author, { id });
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should throw an error Author not found', async () => {
            sandbox.stub(Author, 'findById')
                .resolves();

            try {
                await authorService.deleteAuthor(id);
                assert.fail('it should fail but pass');
            } catch (err) {
                assert.equal(err.message, 'Author not found');
            }
        });

        it('should return author after destroy', async () => {
            sandbox.stub(Author, 'findById')
                .resolves(expected);

            const actual = await authorService.deleteAuthor(id);
            assert.equal(actual, expected);
        });
    });

    describe('getAuthor()', () => {
        const id = 1;
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Author, { id });
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should throw an error Author not found', async () => {
            sandbox.stub(Author, 'findOne')
                .resolves();

            try {
                await authorService.getAuthor(id);
                assert.fail('it should fail but pass');
            } catch (err) {
                assert.equal(err.message, 'Author not found');
            }
        });

        it(`should return author with id:${id}`, async () => {
            sandbox.stub(Author, 'findOne')
                .resolves(expected);

            const actual = await authorService.getAuthor(id);
            assert.equal(actual, expected);
        });
    });

    describe('getAuthors()', () => {
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Author, {}, {}, 3);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should return empty list of author', async () => {
            sandbox.stub(Author, 'findAll')
                .resolves([]);

            const actual = await authorService.getAuthors();
            assert.deepEqual(actual, []);
        });

        it('should return list of authors', async () => {
            sandbox.stub(Author, 'findAll')
                .resolves(expected);

            const actual = await authorService.getAuthors();
            assert.deepEqual(actual, expected);
        });
    });

    describe('getAuthorsByPostId', () => {
        const id = 1;
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Author, {}, {}, 3);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it(`should get authors from post id: ${id}`, async () => {
            sandbox.stub(Author, 'findAll')
                .resolves(expected);

            const actual = await authorService.getAuthorsByPostId(id);
            assert.deepEqual(actual, expected);
        });
    });

    describe('updateAuthor()', () => {
        const id = 1;
        const authorObj = {
            id,
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            role: faker.name.jobTitle(),
            place: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
            avatarUrl: faker.image.imageUrl(),
        };
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Author, authorObj, {}, 1);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it(`should throw an error Author id:${id} is not being updated`, async () => {
            sandbox.stub(Author, 'update')
                .resolves([0, []]);

            try {
                await authorService.updateAuthor(id, authorObj);
                assert.fail('it should fail but pass');
            } catch (err) {
                assert.equal(err.message, `Author id ${id} is not being updated`);
            }
        });

        it('should update author information', async () => {
            sandbox.stub(Author, 'update')
                .resolves([1, [expected]]);

            const actual = await authorService.updateAuthor(id, authorObj);
            assert.deepEqual(actual, expected);
        });
    });
});
