'use strict';

'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/blog-posts-database';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-blog-posts-database';
exports.PORT = process.env.PORT || 8080;