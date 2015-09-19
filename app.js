/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('canvas', {
  'particles': {
    'number': {
      'value': 200,
      'density': {
        'enable': true,
        'value_area': 500
      }
    },
    'color': {
      'value': '#fff'
    },
    'shape': {
      'type': 'circle'
    },
    'opacity': {
      'value': 1,
      'random': true
    },
    'size': {
      'value': 3,
      'random': true
    },
    'line_linked': {
      'enable': true,
      'distance': 100,
      'color': '#fff',
      'opacity': 1,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 1,
      'direction': 'none',
      'random': true,
      'straight': false,
      'out_mode': 'bounce',
      'bounce': false
    }
  },
  'retina_detect': false,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
})
particlesJS('canvas2', {
  'particles': {
    'number': {
      'value': 200,
      'density': {
        'enable': true,
        'value_area': 500
      }
    },
    'color': {
      'value': '#fff'
    },
    'shape': {
      'type': 'circle'
    },
    'opacity': {
      'value': 1,
      'random': true
    },
    'size': {
      'value': 3,
      'random': true
    },
    'line_linked': {
      'enable': true,
      'distance': 100,
      'color': '#fff',
      'opacity': 1,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 1,
      'direction': 'none',
      'random': true,
      'straight': false,
      'out_mode': 'bounce',
      'bounce': false
    }
  },
  'retina_detect': false,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
})