import * as THREE from 'three';
import { InputManager } from './input';

interface SpaceGameCallbacks {
    onGameOver: () => void;
    onGameClear: (time: number) => void;
}

export class SpaceGame {
    private canvas: HTMLCanvasElement;
    private callbacks: SpaceGameCallbacks;
    
    private renderer: THREE.WebGLRenderer;
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    
    private input: InputManager;
    private clock: THREE.Clock;
    
    private animationId: number = 0;
    
    // Game Objects
    private ship!: THREE.Mesh;
    private stars: THREE.Mesh[] = [];
    private asteroids: THREE.Mesh[] = [];
    
    // Physics & State
    private velocity: THREE.Vector2 = new THREE.Vector2();
    private readonly ACCELERATION = 20;
    private readonly MAX_SPEED = 30;
    private readonly ASTEROID_SPEED = 10;
    private isGameOver: boolean = false;
    private isGameClear: boolean = false;
    
    private startTime: number = 0;
    
    private readonly BOUNDARY = 100;
    private readonly NUM_STARS = 20;
    private readonly NUM_ASTEROIDS = 40;
    
    constructor(canvas: HTMLCanvasElement, callbacks: SpaceGameCallbacks) {
        this.canvas = canvas;
        this.callbacks = callbacks;
        
        // Init Three.js
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        this.scene = new THREE.Scene();
        // Starfield background
        this.scene.background = new THREE.Color(0x050510);
        
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 40;
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(10, 10, 20);
        this.scene.add(dirLight);
        
        // Background particles for speed illusion
        this.createBackgroundParticles();
        
        // Input
        this.input = new InputManager(this.canvas);
        
        // Clock
        this.clock = new THREE.Clock();
        
        // Resize listener
        window.addEventListener('resize', this.onWindowResize);
        
        this.initGame();
        this.animate();
    }
    
    private createBackgroundParticles() {
        const particlesGeo = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * this.BOUNDARY * 4; // Spread wide
        }
        
        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMat = new THREE.PointsMaterial({
            size: 0.1,
            color: 0xffffff,
            transparent: true,
            opacity: 0.5
        });
        
        const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
        particlesMesh.position.z = -20; // Put them in background
        this.scene.add(particlesMesh);
    }
    
    private initGame() {
        this.isGameOver = false;
        this.isGameClear = false;
        this.velocity.set(0, 0);
        this.startTime = performance.now();
        
        // Clear old objects
        if (this.ship) this.scene.remove(this.ship);
        this.stars.forEach(s => this.scene.remove(s));
        this.asteroids.forEach(a => this.scene.remove(a));
        this.stars = [];
        this.asteroids = [];
        
        // Ship (Cone)
        const shipGeo = new THREE.ConeGeometry(1.2, 3, 8);
        const shipMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6 }); // Blue ship
        this.ship = new THREE.Mesh(shipGeo, shipMat);
        this.scene.add(this.ship);
        
        // Stars (Octahedron)
        const starGeo = new THREE.OctahedronGeometry(1);
        const starMat = new THREE.MeshStandardMaterial({ 
            color: 0xfacc15, 
            emissive: 0xfacc15, 
            emissiveIntensity: 0.5 
        });
        
        for (let i = 0; i < this.NUM_STARS; i++) {
            const star = new THREE.Mesh(starGeo, starMat);
            // Don't spawn exactly at center
            let x = 0, y = 0;
            while (Math.abs(x) < 10 && Math.abs(y) < 10) {
                x = (Math.random() - 0.5) * this.BOUNDARY * 1.5;
                y = (Math.random() - 0.5) * this.BOUNDARY * 1.5;
            }
            star.position.set(x, y, 0);
            this.scene.add(star);
            this.stars.push(star);
        }
        
        // Asteroids (Icosahedron)
        const asteroidGeo = new THREE.IcosahedronGeometry(1.5, 1);
        const asteroidMat = new THREE.MeshStandardMaterial({ 
            color: 0x6b7280, 
            roughness: 0.8 
        });
        
        for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
            const asteroid = new THREE.Mesh(asteroidGeo, asteroidMat);
            // Safe zone radius 20
            let x = 0, y = 0;
            while (Math.abs(x) < 20 && Math.abs(y) < 20) {
                x = (Math.random() - 0.5) * this.BOUNDARY * 2;
                y = (Math.random() - 0.5) * this.BOUNDARY * 2;
            }
            asteroid.position.set(x, y, 0);
            
            asteroid.userData.velocity = new THREE.Vector2(
                (Math.random() - 0.5),
                (Math.random() - 0.5)
            ).normalize().multiplyScalar(this.ASTEROID_SPEED + Math.random() * 8);
            
            // Random rotation speed
            asteroid.userData.rotationSpeed = new THREE.Vector3(
                Math.random(), Math.random(), Math.random()
            ).multiplyScalar(2);
            
            this.scene.add(asteroid);
            this.asteroids.push(asteroid);
        }
    }
    
    public restart() {
        this.initGame();
    }
    
    private onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    private animate = () => {
        this.animationId = requestAnimationFrame(this.animate);
        
        const delta = this.clock.getDelta();
        
        if (!this.isGameOver && !this.isGameClear) {
            this.update(delta);
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    private update(delta: number) {
        // Cap delta to prevent huge jumps on tab switch
        const dt = Math.min(delta, 0.1); 
        this.input.update();
        
        // 1. Ship Movement (Inertia)
        const thrust = this.input.thrustVector;
        if (thrust.length() > 0) {
            this.velocity.addScaledVector(thrust, this.ACCELERATION * dt);
            if (this.velocity.length() > this.MAX_SPEED) {
                this.velocity.normalize().multiplyScalar(this.MAX_SPEED);
            }
        }

        // Rotate ship to face actual movement direction (velocity)
        if (this.velocity.lengthSq() > 0.01) {
            const angle = Math.atan2(this.velocity.y, this.velocity.x);
            this.ship.rotation.z = angle - Math.PI / 2;
        }
        
        this.ship.position.x += this.velocity.x * dt;
        this.ship.position.y += this.velocity.y * dt;
        
        // Wrap around boundaries for ship
        if (this.ship.position.x > this.BOUNDARY) this.ship.position.x = -this.BOUNDARY;
        if (this.ship.position.x < -this.BOUNDARY) this.ship.position.x = this.BOUNDARY;
        if (this.ship.position.y > this.BOUNDARY) this.ship.position.y = -this.BOUNDARY;
        if (this.ship.position.y < -this.BOUNDARY) this.ship.position.y = this.BOUNDARY;
        
        // Camera follow (angled view)
        this.camera.position.x = this.ship.position.x;
        this.camera.position.y = this.ship.position.y - 25;
        this.camera.lookAt(this.ship.position.x, this.ship.position.y, this.ship.position.z);
        
        // 2. Asteroid Movement
        this.asteroids.forEach(a => {
            a.position.x += a.userData.velocity.x * dt;
            a.position.y += a.userData.velocity.y * dt;
            
            a.rotation.x += a.userData.rotationSpeed.x * dt;
            a.rotation.y += a.userData.rotationSpeed.y * dt;
            a.rotation.z += a.userData.rotationSpeed.z * dt;
            
            if (a.position.x > this.BOUNDARY) a.position.x = -this.BOUNDARY;
            if (a.position.x < -this.BOUNDARY) a.position.x = this.BOUNDARY;
            if (a.position.y > this.BOUNDARY) a.position.y = -this.BOUNDARY;
            if (a.position.y < -this.BOUNDARY) a.position.y = this.BOUNDARY;
        });
        
        // 3. Star Collection
        for (let i = this.stars.length - 1; i >= 0; i--) {
            const star = this.stars[i];
            star.rotation.y += dt * 2;
            star.rotation.x += dt;
            
            const dist = this.ship.position.distanceTo(star.position);
            if (dist < 2.5) {
                this.scene.remove(star);
                this.stars.splice(i, 1);
            }
        }
        
        if (this.stars.length === 0) {
            this.isGameClear = true;
            const time = (performance.now() - this.startTime) / 1000;
            this.saveHighScore(time);
            this.callbacks.onGameClear(time);
        }
        
        // 4. Asteroid Collision
        for (const asteroid of this.asteroids) {
            const dist = this.ship.position.distanceTo(asteroid.position);
            if (dist < 2.5) { // Collision radius
                this.isGameOver = true;
                this.callbacks.onGameOver();
                break;
            }
        }
    }
    
    private saveHighScore(time: number) {
        const currentScore = localStorage.getItem('stellar_highscore');
        if (!currentScore || time < parseFloat(currentScore)) {
            localStorage.setItem('stellar_highscore', time.toString());
        }
    }
    
    public dispose() {
        cancelAnimationFrame(this.animationId);
        window.removeEventListener('resize', this.onWindowResize);
        this.input.dispose();
        
        this.scene.traverse((child) => {
            if (child instanceof THREE.Mesh || child instanceof THREE.Points) {
                if (child.geometry) child.geometry.dispose();
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach(m => m.dispose());
                    } else {
                        child.material.dispose();
                    }
                }
            }
        });
        
        this.renderer.dispose();
    }
}
