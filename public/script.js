'use strict';
console.log("hitting app.js");

$(function () {
  $('body').hide();
  

  // let token;
  // $('#signup').on('click', (e) => {
  //   e.preventDefault();
  //   $.post({
  //     'http://localhost:3000/user/authenticate'
  //   },
  //   function (data) {
  //     if (data.token) {
  //       $('#login').hide();
  //       alert("login succesful" + data.token;);
  //       token = data.token;
  //       $.ajaxSetup({
  //         headers: { 'x-access-token': token }
  //       });
  //     }
  //   }),
  //
  //   $.ajax({
  //     data: { token: token }
  //     url: 'http://localhost:3000/user',
  //     type: 'GET',
  //     success: function (data) {
  //       for (var i in data) {
  //         $('#users').append('<li>' + data[i] + '</li>');
  //       }
  //     }
  //   })
});
