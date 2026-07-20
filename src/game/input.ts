import * as THREE from 'three';

export class InputManager {
    public thrustVector: THREE.Vector2;
    private keys: { [key: string]: boolean };
    private touchVector: THREE.Vector2 | null;
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.thrustVector = new THREE.Vector2(0, 0);
        this.keys = {};
        this.touchVector = null;
        this.container = container;

        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
        this.container.addEventListener('touchstart', this.onTouch, { passive: false });
        this.container.addEventListener('touchmove', this.onTouch, { passive: false });
        this.container.addEventListener('touchend', this.onTouchEnd);
        this.container.addEventListener('touchcancel', this.onTouchEnd);
    }

    public update() {
        if (this.touchVector) {
            // Touch takes precedence
            this.thrustVector.copy(this.touchVector);
        } else {
            // Keyboard fallback
            let x = 0;
            let y = 0;
            if (this.keys['ArrowUp'] || this.keys['w']) y += 1;
            if (this.keys['ArrowDown'] || this.keys['s']) y -= 1;
            if (this.keys['ArrowLeft'] || this.keys['a']) x -= 1;
            if (this.keys['ArrowRight'] || this.keys['d']) x += 1;

            this.thrustVector.set(x, y);
            if (this.thrustVector.length() > 0) {
                this.thrustVector.normalize();
            }
        }
    }

    public dispose() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
        this.container.removeEventListener('touchstart', this.onTouch);
        this.container.removeEventListener('touchmove', this.onTouch);
        this.container.removeEventListener('touchend', this.onTouchEnd);
        this.container.removeEventListener('touchcancel', this.onTouchEnd);
    }

    private onKeyDown = (e: KeyboardEvent) => {
        this.keys[e.key] = true;
    };

    private onKeyUp = (e: KeyboardEvent) => {
        this.keys[e.key] = false;
    };

    private onTouch = (e: TouchEvent) => {
        e.preventDefault(); // Prevent scrolling
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const rect = this.container.getBoundingClientRect();
            // Center of screen (where the ship is)
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            // Vector from center to touch point
            const dx = touch.clientX - cx;
            const dy = -(touch.clientY - cy); // Invert Y because screen Y goes down

            this.touchVector = new THREE.Vector2(dx, dy).normalize();
        }
    };

    private onTouchEnd = () => {
        this.touchVector = null;
    };
}
