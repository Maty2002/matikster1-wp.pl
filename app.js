var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
// Login Screen Demo

$$(document).on('page:init', '.page[data-name="tabela"]', function(){
  let tabel = document.getElementById('tab');
 
  for(var i=1; i<12; i++){
    let row = tabel.insertRow(i);

    let cell = row.insertCell(0);
    cell.classList.add("label-cell");

    let cell2 = row.insertCell(1);
    cell2.classList.add("numeric-cell");

    let cell3 = row.insertCell(2);
    cell3.classList.add("medium-only");

    cell.innerHTML = i-1;
    cell2.innerHTML = `${i-1}x19`;
    cell3.innerHTML = `${i*19} | Mateusz Małolepszy`;
  }
});

$$(document).on('click', '.add',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)+parseInt(formData.b));
});

$$(document).on('click', '.odj',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)-parseInt(formData.b));
});

$$(document).on('click', '.mno',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)*parseInt(formData.b));
});

$$(document).on('click', '.dzie',function(){
  var formData = app.form.convertToData('#my-form');
  alert(parseInt(formData.a)/parseInt(formData.b));
});

$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();
  

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
  
});