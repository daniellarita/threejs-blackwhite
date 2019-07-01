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

geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
geometry.vertices.push(new THREE.Vector3(450, -800, 0));

geometry2 = new THREE.Geometry();
geometry2.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
geometry2.vertices.push(new THREE.Vector3(-450, -800, 0));

geometry3 = new THREE.Geometry();
geometry3.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
geometry3.vertices.push(new THREE.Vector3(-450, 800, 0));

geometry4 = new THREE.Geometry();
geometry4.vertices.push(new THREE.Vector3(0, 0, 0)); //x, y, z
geometry4.vertices.push(new THREE.Vector3(450, 800, 0));

material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 5 } );

line = new THREE.Line(geometry, material);
line2 = new THREE.Line(geometry2, material);
line3 = new THREE.Line(geometry3, material);
line4 = new THREE.Line(geometry4, material);

scene.add(line);
scene.add(line2);
scene.add(line3);
scene.add(line4);

var circleGeometry = new THREE.CircleGeometry( .1, 85 );
var circleMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5} );
var circle = new THREE.Mesh( circleGeometry, circleMaterial );

var circleGeometry2 = new THREE.CircleGeometry( .3, 85 );
var circleMaterial2 = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5} );
var circle2 = new THREE.Mesh( circleGeometry2, circleMaterial2 );

var circleGeometry3 = new THREE.CircleGeometry( .7, 85 );
var circleMaterial3 = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5} );
var circle3 = new THREE.Mesh( circleGeometry3, circleMaterial3 );

var circleGeometry4 = new THREE.CircleGeometry( .5, 85 );
var circleMaterial4 = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.5} );
var circle4 = new THREE.Mesh( circleGeometry4, circleMaterial4 );

scene.add(circle);
scene.add(circle2);
scene.add(circle3);
scene.add(circle4);

var addZRotation = function (shape, n, neg) {
  if (neg === true){
    shape.rotation.z -= n;
  } else {
    shape.rotation.z += n;
  }
};

var addXRotation = function (shape, n, neg) {
  if (neg === true){
    shape.rotation.x -= n;
  } else {
    shape.rotation.x += n;
  }
};

var render = function () {
  requestAnimationFrame( render );

  addZRotation(line,0.02);
  addZRotation(line2,0.02,true);
  addZRotation(line3,0.02);
  addZRotation(line4,0.02,true);

  addXRotation(circle, 0.02)
  addXRotation(circle2, 0.02)
  addXRotation(circle3, 0.02)
  addXRotation(circle4, 0.02)

  renderer.render(scene, camera);
};

render();
