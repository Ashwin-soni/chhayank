"use client";

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private currentMode: string = "none";
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private activeNodes: (AudioNode | number)[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public stop() {
    this.activeNodes.forEach((item) => {
      if (typeof item === "number") {
        clearInterval(item);
      } else {
        try {
          if ("stop" in item && typeof (item as AudioScheduledSourceNode).stop === "function") {
            (item as AudioScheduledSourceNode).stop();
          }
          item.disconnect();
        } catch {
          // ignore
        }
      }
    });
    this.activeNodes = [];
    this.isPlaying = false;
    this.currentMode = "none";
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime);
    }
  }

  public play(mode: "rain" | "drone" | "fire" | "forest"): boolean {
    this.initContext();
    if (!this.ctx || !this.masterGain) return false;

    this.stop();
    this.isPlaying = true;
    this.currentMode = mode;

    if (mode === "rain") {
      this.createRainSound();
    } else if (mode === "drone") {
      this.createTanpuraDrone();
    } else if (mode === "fire") {
      this.createFireSound();
    } else if (mode === "forest") {
      this.createForestSound();
    }

    return true;
  }

  public toggle(mode: "rain" | "drone" | "fire" | "forest"): boolean {
    if (this.isPlaying && this.currentMode === mode) {
      this.stop();
      return false;
    } else {
      return this.play(mode);
    }
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      mode: this.currentMode,
    };
  }

  // --- Rain Generator (Pink/Brown noise filter) ---
  private createRainSound() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start();
    this.activeNodes.push(whiteNoise, filter, gain);
  }

  // --- Tanpura / Meditative Drone (Vedanta peaceful frequency) ---
  private createTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;

    // Harmonic Sa (C# / 138.59 Hz) and Pa (G# / 207.65 Hz)
    const baseFreqs = [138.59, 207.65, 277.18, 415.3];

    baseFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle slow frequency vibrato/beating
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.15 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      gain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      this.activeNodes.push(osc, gain, lfo, lfoGain);
    });
  }

  // --- Fireplace Crackle & Warmth ---
  private createFireSound() {
    if (!this.ctx || !this.masterGain) return;

    // Low rumble
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(55, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    this.activeNodes.push(osc, gain);

    // Random crackles interval
    const intervalId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain) return;
      if (Math.random() > 0.4) {
        const crackle = this.ctx.createOscillator();
        const crackleGain = this.ctx.createGain();
        crackle.type = "square";
        crackle.frequency.setValueAtTime(300 + Math.random() * 800, this.ctx.currentTime);

        const now = this.ctx.currentTime;
        crackleGain.gain.setValueAtTime(0.03, now);
        crackleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

        crackle.connect(crackleGain);
        crackleGain.connect(this.masterGain);
        crackle.start(now);
        crackle.stop(now + 0.05);
      }
    }, 120);

    this.activeNodes.push(intervalId as unknown as number);
  }

  // --- Night Forest / Gentle Breeze & Crickets ---
  private createForestSound() {
    if (!this.ctx || !this.masterGain) return;

    // High subtle cricket oscillation
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(4500, this.ctx.currentTime);

    // Tremolo LFO for crickets
    const lfo = this.ctx.createOscillator();
    lfo.type = "square";
    lfo.frequency.setValueAtTime(14, this.ctx.currentTime);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.03, this.ctx.currentTime);

    lfo.connect(gain.gain);
    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    lfo.start();
    this.activeNodes.push(osc, gain, lfo, lfoGain);
  }
}

export const audioEngine = typeof window !== "undefined" ? new AmbientAudioEngine() : null;
