
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('disciplines').del()
    .then(function () {
      // Inserts seed entries
      return knex('disciplines').insert([
        {
          "name":"Urban-Freestyle", 
          "description": "Similar to freestyle, but in an urban environment",
          "img-url": "https://images.unsplash.com/photo-1487113991643-86bfb4c9de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },
        {
          "name":"Freestyle", 
          "description": "The mountain is your oyster combine any number of disciplines, from downhill, jumping and fourcross into one beautiful sport",
          "img-url": "https://images.unsplash.com/photo-1572852446342-bdeb70dc5abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },
        {
          "name":"Flatland BMX", 
          "description": "Taking your BMX to the absolute limit by exploring it without any other props. Just you, your bike and some tarmac",
          "img-url": "https://images.unsplash.com/flagged/photo-1558765416-d95803b7ea37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },
      ]);
    });
};
