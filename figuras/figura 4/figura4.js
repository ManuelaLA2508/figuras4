const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000, 0.1, 50)
scene.background = new THREE.Color(0x999999);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement );

var geometry = new THREE.ConeGeometry( 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 25

function animate (){
    requestAnimationFrame( animate );
    cone.rotation.x += 0.03;
    cone.rotation.y +=0.05;
    cone.rotation.z += 0.04;
    renderer.render( scene, camera);
}
animate()