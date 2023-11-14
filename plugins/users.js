export default defineNuxtPlugin(() => {
    const users = [
        {
            'handle': 'dominik',
            'firstname': 'Dominik',
            'lastname': 'Eibensteiner',
            'email': 'dominik.eibensteiner@outlook.com',
            'description': 'Product Designer from Austria',
        },
        {
            'handle': 'sarah',
            'firstname': 'Sarah',
            'lastname': 'Eibensteiner',
            'email': 'sarah@eibensteiner.me',
            'description': 'Frontend Developer from Austria',
        }
    ];

    // Here, you can inject the users array into the Nuxt context, Vue instance, or Vuex store as needed.
    // For example, injecting into the Vue instance and Nuxt context:
    inject('users', users);
});