import users from '~/plugins/users.js';

export default function ({ params }) {
  // Perform your condition check
  if (!users.find(user => user.handle === params.user)) {
    // Throw 404 error
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
}