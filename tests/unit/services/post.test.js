const chai = require('chai');
const faker = require('faker');
const sinon = require('sinon');

sinon.assert.expose(chai.assert, { prefix: '' });
const { assert } = chai;

const modelFactory = require('../../factory');
const postService = require('../../../services/post');
const { Post } = require('../../../models');

describe('services/post', () => {
    describe('createPost()', () => {
        const postObj = {
            title: faker.name.title(),
            description: faker.lorem.paragraph(),
            imageUrl: faker.image.imageUrl(),
            isDrafted: true,
            publishedAt: null,
        };
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Post, postObj);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should create new post with authors', async () => {
            sandbox.stub(Post, 'create')
                .resolves(expected);

            const actual = await postService.createPost(postObj);
            assert.equal(actual, expected);
        });
    });

    describe('deletePost()', () => {
        const id = 1;
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Post, { id });
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should throw an error Post not found', async () => {
            sandbox.stub(Post, 'findById')
                .resolves();

            try {
                await postService.deletePost(id);
                assert.fail('it should fail but pass');
            } catch (err) {
                assert.equal(err.message, 'Post not found');
            }
        });

        it('should return post after destroy', async () => {
            sandbox.stub(Post, 'findById')
                .resolves(expected);

            const actual = await postService.deletePost(id);
            assert.equal(actual, expected);
        });
    });

    describe('getPost()', () => {
        const id = 1;
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Post, { id });
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should throw an error Post not found', async () => {
            sandbox.stub(Post, 'findOne')
                .resolves();

            try {
                await postService.getPost(id);
                assert.fail('it should fail but pass');
            } catch (err) {
                assert.equal(err.message, 'Post not found');
            }
        });

        it(`should return post with id:${id}`, async () => {
            sandbox.stub(Post, 'findOne')
                .resolves(expected);

            const actual = await postService.getPost(id);
            assert.equal(actual, expected);
        });
    });

    describe('getPosts()', () => {
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Post, {}, {}, 3);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it('should return empty list of post', async () => {
            sandbox.stub(Post, 'findAll')
                .resolves([]);

            const actual = await postService.getPosts();
            assert.deepEqual(actual, []);
        });

        it('should return list of posts', async () => {
            sandbox.stub(Post, 'findAll')
                .resolves(expected);

            const actual = await postService.getPosts();
            assert.deepEqual(actual, expected);
        });
    });

    describe('getPostsByAuthorId()', () => {
        const id = 1;
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Post, {}, {}, 3);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it(`should get posts from author id: ${id}`, async () => {
            sandbox.stub(Post, 'findAll')
                .resolves(expected);

            const actual = await postService.getPostsByAuthorId(id);
            assert.deepEqual(actual, expected);
        });
    });

    describe('updatePost()', () => {
        const id = 1;
        const postObj = {
            title: faker.name.title(),
            description: faker.lorem.paragraph(),
            imageUrl: faker.image.imageUrl(),
            isDrafted: true,
            publishedAt: null,
        };
        let expected;
        let sandbox;

        beforeEach(() => {
            sandbox = sinon.createSandbox();
            expected = modelFactory(Post, postObj, {}, 1);
        });

        afterEach(() => {
            sandbox.restore();
        });

        it(`should throw an error Post id:${id} is not being updated`, async () => {
            sandbox.stub(Post, 'update')
                .resolves([0, []]);

            try {
                await postService.updatePost(id, postObj);
                assert.fail('it should fail but pass');
            } catch (err) {
                assert.equal(err.message, `Post id ${id} is not being updated`);
            }
        });

        it('should update post information', async () => {
            sandbox.stub(Post, 'update')
                .resolves([1, [expected]]);

            const actual = await postService.updatePost(id, postObj);
            assert.deepEqual(actual, expected);
        });
    });
});
