import users from '~/plugins/users.js';

export default function ({ params }) {
  // Perform your condition check
  if (!users.find(user => user.handle === params.user)) {
    // Redirect to the 404 page
    return navigateTo('/404');
  }
}