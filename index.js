/**
 * StappaPlay - Simple Audio Player Controller
 * Author: Riccardo
 * License: Custom
 */

class StappaPlayAudio {
    constructor(audioUrl) {
        if (!audioUrl) {
            throw new Error('StappaPlayAudio: audioUrl is required.');
        }

        this.audio = new Audio(audioUrl);
        this.isPlaying = false;
    }

    play() {
        this.audio.play()
            .then(() => {
                this.isPlaying = true;
                console.log('[StappaPlayAudio] Playback started.');
            })
            .catch(err => {
                console.error('[StappaPlayAudio] Error during playback:', err);
            });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        console.log('[StappaPlayAudio] Playback paused.');
    }

    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
}

// Example Usage:
// const player = new StappaPlayAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
// player.play();

module.exports = StappaPlayAudio;
