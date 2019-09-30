// ------------------------------------------------
// SET THE SCENE
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// ART
// ------------------------------------------------


// CIRCLESSSSS

var circleMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5} );

const makeCircle = (radius,segments) => {
  circleGeometry = new THREE.CircleGeometry(radius,segments);
  circle = new THREE.Mesh( circleGeometry, circleMaterial );
  return circle;
 }

const makeCircles = (n, startRadius, segments, radiusIncrement) => {
  let arr = [];
  for (let i=0;i<n;i++){
    c = makeCircle(startRadius,segments);
    startRadius += radiusIncrement;
    arr.push(c);
  }
  return arr;
}

const circlesArray = makeCircles(10, .1, 50, .2);

const addCirclesToScene = (circlesArray) => {
  for (let i=0;i<circlesArray.length;i++){
    scene.add(circlesArray[i]);
  }
}

addCirclesToScene(circlesArray);

var addXRotation = function (shape, n, neg) {
  if (neg === true){
    shape.rotation.x -= n;
  } else {
    shape.rotation.x += n;
  }
};

const addXRotationMultiple = (arr, n) => {
  for (let i=0;i<arr.length;i++){
    addXRotation(arr[i], n);
  }
}

var render = function () {
  requestAnimationFrame( render );

  addXRotationMultiple(circlesArray, .001);

  renderer.render(scene, camera);
};

render();
