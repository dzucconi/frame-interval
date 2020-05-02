export enum FrameIntervalMode {
  Playing,
  Stopped,
}

export type FrameIntervalCallback = (props?: {
  time: number;
  frame: number;
}) => void;

export class FrameInterval {
  delay: number;
  frame: number;
  time: number | null;
  ref: number | null;
  mode: FrameIntervalMode;
  fps: number;
  callback: FrameIntervalCallback;

  constructor(fps: number, callback: FrameIntervalCallback) {
    this.callback = callback;
    this.fps = fps;
    this.delay = 1000 / fps; // Time per frame
    this.frame = -1;
    this.time = null;
    this.ref = null;
    this.mode = FrameIntervalMode.Stopped;
  }

  setFps(nextFps: number) {
    this.fps = nextFps;
    this.delay = 1000 / nextFps;
    this.frame = -1;
    this.time = null;
  }

  tick(time: number) {
    if (this.time === null) {
      this.time = time; // Initialize start time
    }

    const currentFrame = Math.floor((time - this.time) / this.delay);

    // Should move to next frame?
    if (currentFrame > this.frame) {
      this.frame = currentFrame;
      this.callback({ time, frame: this.frame });
    }

    this.ref = requestAnimationFrame((...args) => this.tick(...args));
  }

  start() {
    if (this.mode === FrameIntervalMode.Stopped) {
      this.mode = FrameIntervalMode.Playing;
      this.ref = requestAnimationFrame((...args) => this.tick(...args));
    }
  }

  stop() {
    if (this.mode === FrameIntervalMode.Playing && this.ref) {
      cancelAnimationFrame(this.ref);
      this.mode = FrameIntervalMode.Stopped;
      this.time = null;
      this.frame = -1;
    }
  }
}
