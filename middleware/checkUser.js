import users from '~/constants/users.js';

export default function ({ params }) {
  // Perform your condition check
  if (!users.find(user => user.handle === params.author)) {
    // Throw 404 error
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
}