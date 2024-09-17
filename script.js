new Vue({
  el: '#app',
  data: {
    followers: 0,
    digits: ['0', '0', '0', '0', '0'] // Default to 5 digits, all zeroes
  },
  methods: {
    fetchFollowers() {
      // Mocking API call for followers with a 5-digit number
      setTimeout(() => {
        // Simulating an API response with a 5-digit number (max 99999)
        this.followers = Math.floor(Math.random() * 100000); // Random number up to 99999

        // Convert the followers number into a 5-digit string, pad with leading zeroes
        let followerStr = String(this.followers).padStart(5, '0');

        // Split the string into an array of digits
        this.digits = followerStr.split('');
      }, 1000); // Simulate network delay
    }
  }
});