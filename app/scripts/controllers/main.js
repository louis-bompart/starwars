'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator Palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth Vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess Leia',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];

var quote404 = {
'author': '- R2D2',
'quote': '01001110 01101111 01110000 01100101 00101100 00100000 01101110 01101111 01110100 01101000 01101001 01101110 01100111 00100000 01101000 01100101 01110010 01100101 00100000 00100001'
};

function getRndQuote(input) {
  var index = Math.floor(Math.random() * input.length);
  return input[index];
}

function getCharaQuote(input) {
var charaQuotes = [];
for (var i = 0; i < quotes.length; i++) {
  if (quotes[i].author.toUpperCase().indexOf(input.toUpperCase())!==-1) {
    charaQuotes.push(quotes[i]);
  }
}
if(charaQuotes.length===0)
{
  return quote404;
}
else {
  return getRndQuote(charaQuotes);
}
}

function getQuote (params) {
if(params.length<4) {
  return getRndQuote(quotes);
}
else {
  return getCharaQuote(params);
}
}

/**
 * @ngdoc function
 * @name starwarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starwarsApp
 */
angular.module('starwarsApp')
  .controller('MainCtrl', function ($scope) {
    //$scope.quote = getQuote('rnd');
    $scope.getQuote= function () {
      if($scope.name === undefined) {
        $scope.quote = getQuote('rnd');
      }
      else {
        $scope.quote= getQuote($scope.name);
      }
    };
  });
