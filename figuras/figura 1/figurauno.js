const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xFF25fD, 0.1, 16)
scene.background = new THREE.Color(0x7733FF);


var loader = new THREE.TextureLoader();
loader.load(
    '../imagen/gala.webp',
    function(texture) {
        scene.background = texture;
    }
);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CylinderGeometry(1, 1, 5, 15);
const material = new THREE.MeshBasicMaterial({ color: 0xff, wireframe: true });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

camera.position.z = 9

function animate() {
    requestAnimationFrame(animate);
    cylinder.rotation.x += 0.05;
    cylinder.rotation.y += 6;
    cylinder.rotation.z += 0.05;
    renderer.render(scene, camera);
}
animate()