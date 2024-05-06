// import './style.scss'

// // yarn add three
// // yarn add -D @types/three
// import * as THREE from 'three'


// class THREE_App{
// // 渲染器
//  renderer =new THREE.WebGLRenderer(
//     // 抗锯齿
//    {antialias  : true}
// )

// // 场景
// scene = new THREE.Scene()

// // 相机 透视相机
//  camera = new THREE.PerspectiveCamera(
//     // fov 视角
//     45,  
//     // aspec ratio 宽高比
//     window.innerWidth / window.innerHeight,
//     // near 最近渲染距离
//     0.1,
//     // far 最远渲染距离
//     1000
// )



// mesh =null
// // 构造函数
// constructor(){
//     // 渲染器设置
// this.rendererSetting()
// this.addMesh()


// }

// // 渲染器设置
// rendererSetting =()=>{
// // 设置渲染器大小
//     this.renderer.setSize(window.innerWidth,window.innerHeight)
//     // 设置渲染器id
// this.renderer.domElement.id = 'threejs_scene'
// // 渲染器加入dom
// document.querySelector('#app').appendChild(this.renderer.domElement)
// // 设置渲染器位置
// this.camera.position.z =3

// // 做渲染
// this.renderer.render(this.scene,this.camera)
// }
// }
// addMesh =(mesh) => {
// this.mesh =mesh
// if(this.mesh){
//     this.scene.add(this.mesh)
// }
// // this.mesh ?  this.scene.add(this.mesh) : null

// render = ()=>{
//     this.renderer.render(this.scene,this.camera)
// }

// }
// class Cube {

//    geometry = new THREE.BoxGeometry(1,1,1)

//     // 材质
//    material =new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe:true
//     })
//      mesh =null
// constructor(){
//   this.mesh = new THREE.Mesh(this.geometry,this.material)
// }




// }

// // const cube =new Cube()
// // cube.mesh
// const app = new THREE_App()
// const cube = new Cube()
// app.addMesh(cube.mesh)
// // app.renderer.render(app.scene,app.camera)
// app.render()

import './style.scss';
import * as THREE from 'three';

class ThreeJSScene {
  constructor() {
    this.initializeScene();
  }

  initializeScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'threejs_scene';
    document.querySelector('#app').appendChild(this.renderer.domElement);

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00,
      wireframe: true 
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.rotation.x = 0.5;
    this.cube.rotation.y = 0.5;
    this.scene.add(this.cube);
    this.camera.position.z = 3;

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.cube.rotation.z += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}

const threeJSScene = new ThreeJSScene();