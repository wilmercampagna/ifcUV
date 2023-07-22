import { Scene } from 'three';	
import {Lights} from '../Lights.js';
import {Axes} from '../Grids.js';
import { Camera } from '../Camera.js';

//Creates grids and axes in the scene
const ax = new Axes(50, 50);
const lights = new Lights();
const cam = new Camera(65, 0.01, 500);
const size = cam.size;

//Creates the camera (point of view of the user)
const camera = cam.camera;
//Create a 3D object to carry the camera around XR session
const dolly = cam.cameraDolly;
//Add dummy camera to accurately get camera orientation in handleMovement function
const dummy = cam.dummyCam;
//Create a scene to add the camera and other objects to
const sceneAR = new Scene();
// Add camera, grid, axes and lights to the scene
camera.position.set(0, 1.6, 0);
dolly.position.set(0, 0, 10);
dolly.add(camera);
camera.add(dummy);
sceneAR.add(dolly);
sceneAR.add(lights.ambient);
sceneAR.add(ax.grid);
sceneAR.add(ax.axes);
// scene.background = new Color('#e2edfb');

export { size, camera, dolly, dummy, sceneAR };;