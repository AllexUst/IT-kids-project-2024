
function countdownToNewYear() {
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1);
    const timerElement = document.getElementById('t');

    function updateTimer() {
        const now = new Date();
        const diff = newYear - now;

        if (diff <= 0) {
            timerElement.textContent = "З Новим Роком!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.textContent = `${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
}

countdownToNewYear();

document.addEventListener('DOMContentLoaded', function(){
        var script = document.createElement('script');
        script.src = './snowflakes.js';
        script.onload = function(){
            particlesJS("snow", {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#cce0ff"
                    },
                    "opacity": {
                        "value": 0.7,
                        "random": false,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 5,
                        "direction": "bottom",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 300,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": false
                    }
                },
                "retina_detect": true
            });
        }
        document.head.append(script);
    });
const wrapper = document.querySelector('.wrapper');
const btn_close = document.querySelector('.btn-close');

btn_close.addEventListener('click', () => {
    wrapper.classList.remove('show');
});

function showModal() {
    wrapper.classList.add('show');
}
setTimeout(showModal, 15000)
