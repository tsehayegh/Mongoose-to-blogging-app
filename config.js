exports.DATABASE_URL = process.env.DATABASE_URL ||
						'mongodb://localhost/blog-app-database';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
							'mongodb://localhost/test-blog-app-database';
exports.PORT = process.env.PORT || 8080;
