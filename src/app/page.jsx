//aqui es la Landing Page
"use client";
import { useEffect } from 'react';
import "./globals.css";

function HomePage() {
  const handleClick = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Muestra una alerta al usuario
    const confirmation = confirm("Estás a punto de ser redirigido a tu cuenta de correo electrónico, GEMMA no puede acceder a tu información personal de ninguna manera si tu no aceptas ser redirigido, por lo que nos deslindamos de cualquier responsabilidad ¿Deseas continuar? De ser contrario, puedes ponerte en contacto con nosotros por medio del correo somos.gemma.01@gmail.com con el siguiente texto como asunto: Atención al usuario por BACHECITO 26 - WEB");
    
    // Si el usuario acepta, abre el cliente de correo
    if (confirmation) {
        const subject = encodeURIComponent('Atención al usuario por BACHECITO 26 - WEB');
        const body = encodeURIComponent('¡Hola GEMMA!👋 Me pongo en contacto con ustedes debido a...');
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=somos.gemma.01@gmail.com&su=' + subject + '&body=' + body);
    } else {
        // Si el usuario no acepta, no se hace nada
        return;
    }
};

  const animateButton = (e) => {
    e.preventDefault();
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    }, 700);
};

  useEffect(() => {
    const bubblyButton = document.getElementsByClassName("download-button");
        bubblyButton[0].addEventListener('click', animateButton, false);


    const confetti = document.getElementById('confetti');
    const confettiCtx = confetti.getContext('2d');
    let container, confettiElements = [], clickPosition;

    // Coloca todo tu código JavaScript aquí
    // helper
    const rand = (min, max) => Math.random() * (max - min) + min;

    // params to play with
    const confettiParams = {
        // number of confetti per "explosion"
        number: 70,
        // min and max size for each rectangle
        size: { x: [5, 20], y: [10, 18] },
        // power of explosion
        initSpeed: 25,
        // defines how fast particles go down after blast-off
        gravity: 0.65,
        // how wide is explosion
        drag: 0.01,
        // how slow particles are falling
        terminalVelocity: 6,
        // how fast particles are rotating around themselves
        flipSpeed: 0.017,
    };
    const colors = [
        { front : '#FFD557', back: '#eeba20' },
        { front : '#FF9F49', back: '#e4720f' },
        { front : '#FF9F49', back: '#e4720f' },
        { front : '#FF4D35', back: '#e02910' },
        { front : '#ffe9a5', back: '#eed17c' },
        { front : '#ffae34', back: '#ff9900' },
    ];

    setupCanvas();
    updateConfetti();

    confetti.addEventListener('click', addConfetti);
    window.addEventListener('resize', () => {
        setupCanvas();
        hideConfetti();
    });

    // Confetti constructor
    function Conf() {
        this.randomModifier = rand(-1, 1);
        this.colorPair = colors[Math.floor(rand(0, colors.length))];
        this.dimensions = {
            x: rand(confettiParams.size.x[0], confettiParams.size.x[1]),
            y: rand(confettiParams.size.y[0], confettiParams.size.y[1]),
        };
        this.position = {
            x: clickPosition[0],
            y: clickPosition[1]
        };
        this.rotation = rand(0, 2 * Math.PI);
        this.scale = { x: 1, y: 1 };
        this.velocity = {
            x: rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
            y: rand(-confettiParams.initSpeed, confettiParams.initSpeed)
        };
        this.flipSpeed = rand(0.2, 1.5) * confettiParams.flipSpeed;

        if (this.position.y <= container.h) {
            this.velocity.y = -Math.abs(this.velocity.y);
        }

        this.terminalVelocity = rand(1, 1.5) * confettiParams.terminalVelocity;

        this.update = function () {
            this.velocity.x *= 0.98;
            this.position.x += this.velocity.x;

            this.velocity.y += (this.randomModifier * confettiParams.drag);
            this.velocity.y += confettiParams.gravity;
            this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
            this.position.y += this.velocity.y;

            this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
            this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
        }
    }

    function updateConfetti () {
        confettiCtx.clearRect(0, 0, container.w, container.h);

        confettiElements.forEach((c) => {
            c.update();
            confettiCtx.translate(c.position.x, c.position.y);
            confettiCtx.rotate(c.rotation);
            const width = (c.dimensions.x * c.scale.x);
            const height = (c.dimensions.y * c.scale.y);
            confettiCtx.fillStyle = c.color;
            confettiCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
            confettiCtx.setTransform(1, 0, 0, 1, 0, 0)
        });

        confettiElements.forEach((c, idx) => {
            if (c.position.y > container.h ||
                c.position.x < -0.5 * container.x ||
                c.position.x > 1.5 * container.x) {
                confettiElements.splice(idx, 1)
            }
        });
        window.requestAnimationFrame(updateConfetti);
    }

    function setupCanvas() {
        container = {
            w: confetti.clientWidth,
            h: confetti.clientHeight
        };
        confetti.width = container.w;
        confetti.height = container.h;
    }

    function addConfetti(e) {
        const canvasBox = confetti.getBoundingClientRect();
        if (e) {
            clickPosition = [
                e.clientX - canvasBox.left,
                e.clientY - canvasBox.top
            ];
        } else {
            clickPosition = [
                canvasBox.width * Math.random(),
                canvasBox.height * Math.random()
            ];
        }
        for (let i = 0; i < confettiParams.number; i++) {
            confettiElements.push(new Conf())
        }
    }

    function hideConfetti() {
        confettiElements = [];
        window.cancelAnimationFrame(updateConfetti)
    }

    confettiLoop();
    function confettiLoop() {
        addConfetti();
        setTimeout(confettiLoop, 600 + Math.random() * 3200);
    }

    const handleMouseMove = (e) => {
      const hoverMessage = document.querySelector('.hover-message');
      const imageContainer = document.querySelector('.image-container');

      // Obtener las coordenadas del mouse relativas a la imagen
      const rect = imageContainer.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Ajustar la posición del mensaje en relación con la imagen
      hoverMessage.style.left = mouseX + 20 + 'px';
      hoverMessage.style.top = mouseY + 20 + 'px';
  };

  document.querySelector('.image-container').addEventListener('mousemove', handleMouseMove);


  const contscrhor = document.getElementById('longTextContainer');

    const handleWheel = (event) => {
      const containerScrollLeft = contscrhor.scrollLeft;
      const containerScrollWidth = contscrhor.scrollWidth - contscrhor.clientWidth;

      if (
        (containerScrollLeft === 0 && event.deltaY < 0) || // Scroll hacia arriba al inicio
        (containerScrollLeft === containerScrollWidth && event.deltaY > 0) // Scroll hacia abajo al final
      ) {
        return; // No previene el comportamiento predeterminado si estamos al principio o al final
      }

      event.preventDefault(); // Previene el comportamiento predeterminado de la rueda de desplazamiento

      contscrhor.scrollLeft += event.deltaY; // Desplaza horizontalmente el contenedor
    };

    contscrhor.addEventListener('wheel', handleWheel);

    const orbitCenterX = 40; // centro x de la elipse
    const orbitCenterY = 100; // centro y de la elipse
    const orbitRadiusX = 450; // radio x de la elipse
    const orbitRadiusY = 200; // radio y de la elipse
    const orbitSpeed = 0.003; // velocidad de rotación

    const emojis = document.querySelectorAll('.emoji');

    let angle = 0;

    const intervalId = setInterval(() => {
      emojis.forEach((emoji, index) => {
        const x = orbitCenterX + orbitRadiusX * Math.cos(angle + (index * (Math.PI * 2 / emojis.length)));
        const y = orbitCenterY + orbitRadiusY * Math.sin(angle + (index * (Math.PI * 2 / emojis.length)));

        emoji.style.left = x + 'px';
        emoji.style.top = y + 'px';
      });

      angle += orbitSpeed;
    }, 1000 / 60);


    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(function(bubble) {
      animateBubble(bubble);
    });

    function animateBubble(bubble) {
      const speed = Math.random() * 5 + 1; // Velocidad aleatoria entre 1 y 5
      const initialY = Math.random() * 1000; // Altura del contenedor
      const initialX = Math.random() * 98; // Ancho del contenedor

      bubble.style.left = initialX + '%';
      bubble.style.top = initialY + 'px';

      function updateBubble() {
        let y = parseFloat(bubble.style.top);
        y -= speed;
        if (y < -100) {
          y = 1000; // Altura del contenedor
        }
        bubble.style.top = y + 'px';

        requestAnimationFrame(updateBubble);
      }

      updateBubble();
    }


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      contscrhor.removeEventListener('wheel', handleWheel);
      clearInterval(intervalId);
    };
}, []);

  return (
    <div class="container-inicio">
        <div class="text-inicio1">
          <h2>¡HEY!</h2>
          <p>Parece que nos encontraste 👀</p>
        </div>
        <div className="Seccion1">
          <div class="content-inicio">
              <div class="image-inicio1">
                  <img src="https://i.postimg.cc/N0D2tXt5/zyro-image-2024-03-08-T184545-148.jpg" alt="Imagen 2"/>
              </div>
              <div class="text-inicio2">
                  <p>¿Alguna vez te has encontrado con diversos baches en tu camino por la CDMX? ¡Recuerda lo molesto que es tener que maniobrar para esquivarlos! </p>
              </div>
          </div>
          <div class="content-inicio">
              <div class="text-inicio">
                  <p>¡Ya no más! <a className="Bachecito-26-txt">BACHECITO 26</a> es la solución, porque sabemos que tu también estás cansado de ellos 💪😎</p>
              </div>
              <div class="image-inicio2">
                  <img src="https://i.postimg.cc/PrTXfPxn/zyro-image-19.jpg" alt="Imagen 1"/>
              </div>
          </div>
        </div>

        <div className='Seccion2'>
          <div className="animacion1">
              <div className="contenedor-sec2-inicio" id="cont">
            <div class="text-sec2">
              <h2>¡Adiós baches, <br /> hola Bachecito 26!</h2>
              <p>Diseñado para el reporte de baches en toda la Ciudad de México, ¡<a className="Bachecito-26-txt">Bachecito 26</a> llega a acelerar el proceso de reporte para que no tengas que frenar en tu camino!</p>
            </div>
            <div class="image-container">
              <img src="https://i.postimg.cc/G36s4w2b/cdmx.png" className='img-sec2' />
                <div class="circle1 top-left"></div>
                <div class="circle2 middle-right"></div>
                <div class="circle3 bottom-right"></div>
                <div class="hover-message">🚧</div>
            </div>
          </div>
              <canvas id="confetti"></canvas>
          </div>
        </div>

        <div className='Seccion3'>
          <div class="long-text-container" id="longTextContainer">
            <div class="horizontal-scroll">
              <div class="section section1">
                <h2 className="emojitxt">
                      ¡Reporta en 3 <br/> sencillos pasos!
                  </h2>
                <div className="container-emoji">
                  
                  <div className="orbit">
                    <div className="emoji emoji1">🚧</div>
                    <div className="emoji emoji2">🚘</div>
                    <div className="emoji emoji3">🚲</div>
                    <div className="emoji emoji4">🚶</div>
                    <div className="emoji emoji5">🛵</div>
                    <div className="emoji emoji6">🛹</div>
                    <div className="emoji emoji7">🚌</div>
                    <div className="emoji emoji8">🛴</div>
                  </div>
                  
                </div>
              </div>
              <div class="section section2">
                <div className='align-section2'>
                    <div class="image-section2">
                    <iframe allow="fullscreen autoplay" src="https://streamable.com/e/tysd4r?nocontrols=1" width="100%" ></iframe>
                    </div>
                    <div class="text-section2">
                      <h2>1.  CREA UNA CUENTA  🚗</h2>
                      <p>Es fácil y rápido. Solo necesitas proporcionar algunos detalles básicos y <br />
                        ¡listo! Tu cuenta te permitirá acceder a todas las funcionalidades de <br />
                        nuestra aplicación y plataforma web 😉</p>
                    </div>
                </div>
              </div>
              <div class="section section3">
                <div className='align-section2'>
                    <div class="text-section2-right">
                      <h2>2.  INICIA SESIÓN  🛵</h2>
                      <p>Una vez que hayas creado tu cuenta, inicia sesión con tus datos. <br /> 
                      Con tu cuenta, podrás dar seguimiento a tus reportes realizados y <br /> 
                      acceder a funcionalidades geniales en nuestra aplicación web 😎</p>
                    </div>
                    <div class="image-section2">
                      <iframe allow="fullscreen autoplay" src="https://streamable.com/e/xutwgs?nocontrols=1" width="100%" ></iframe>
                    </div>
                </div>
              </div>
              <div class="section section4">
                <div className='align-section2'>
                    <div class="image-section2">
                    <iframe allow="fullscreen autoplay" src="https://streamable.com/e/41iw9k?nocontrols=1" width="100%" ></iframe>
                    </div>
                    <div class="text-section2">
                      <h2>3.  ¡REPORTA! 🚩</h2>
                      <p>¡Es hora de marcar la diferencia! Simplemente  selecciona la opción <br />
                       para reportar un bache, llena el formulario y envíanos tu reporte ✌</p>
                    </div>
                </div>
              </div>
              <div class="section section5">
                <div className='bubles-align-section5'>
                <h2 className="emojitxt">
                      ¡ASÍ DE SIMPLE!
                  </h2>
                  <img class="bubble b1" src="https://i.postimg.cc/Cx2PpH4w/bache1.jpg" alt="Burbuja"/>
                  <img class="bubble b1" src="https://i.postimg.cc/05GBKS9C/bache10.jpg" alt="Burbuja"/>
                  <img class="bubble b2" src="https://i.postimg.cc/nzBwkjBp/bache12.jpg" alt="Burbuja"/>
                  <img class="bubble b2" src="https://i.postimg.cc/XJfQFM6v/bache5.jpg" alt="Burbuja"/>
                  <img class="bubble b2" src="https://i.postimg.cc/8zcKYnMy/bache9.jpg" alt="Burbuja"/>
                  <img class="bubble b1" src="https://i.postimg.cc/PxsSPXcc/bache2.jpg" alt="Burbuja"/>
                  <img class="bubble b2" src="https://i.postimg.cc/QMW68961/bache3.jpg" alt="Burbuja"/>
                  <img class="bubble b1" src="https://i.postimg.cc/QCDYn8J5/bache11.jpg" alt="Burbuja"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Seccion4'>
          <div className="content-inicio-sec4">
            <div class="text-sec4-inicio">
              <h2>¿Te interesa <br /> comenzar tu viaje?</h2>
              <p>No es necesario que descargues la aplicación móvil para poder crear tu cuenta, ¡Te ayudamos a empezar desde aquí!</p>
              <a href="/Cuenta/Registro"><button class="fill-button">¡Crear cuenta! </button></a>
              
            </div>
            <div class="image-sec4-inicio">
              <img src="https://i.postimg.cc/HWQqMFBy/car.png"/>
            </div>
          </div>
        </div>

        <div className='Seccion5'>
          <hr class="custom-hr" />
          <h2>🥇🏆🥇 <br/> ¿Listo para mejorar <br /> nuestras calles?</h2>
          <div class="image-container-sec5">
              <div class="card">
                  <div class="card-inner">
                      <div class="card-front">
                          <img src="https://i.postimg.cc/pLzwdn9K/f1.jpg"/>
                      </div>
                      <div class="card-back">
                          <p>🌎 <br /><br /> Desarrollado para ser sencillo ante un público diverso</p>
                      </div>
                  </div>
              </div>
              <div class="card card-middle">
                  <div class="card-inner">
                      <div class="card-front">
                          <img src="https://i.postimg.cc/7YFvDNLx/f2.jpg"/>
                      </div>
                      <div class="card-back">
                          <p>👍<br /><br /> Diseñado para brindar la mejor experiencia al usuario</p>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <div class="card-inner">
                      <div class="card-front">
                          <img src="https://i.postimg.cc/SK4wYN83/f3.png"/>
                      </div>
                      <div class="card-back">
                          <p>📈 <br /><br />Planificado para seguir escalando y mejorando</p>
                      </div>
                  </div>
              </div>
          </div>
          <button class="download-button">Descarga la Aplicación</button>
        </div>

        <div className='Seccion6'>
          <div className="content-inicio-sec6">
            <div class="image-sec6-inicio">
              <img src="https://i.postimg.cc/52xv3gjs/correo.png"/>
            </div>
            <div class="text-sec6-inicio">
              <p>¿Necesitas decirnos algo?<br /><a href="" id="contact-link" onClick={handleClick}>¡Mandanos un correo!</a></p>
            </div>
          </div>
          <div className='marca-copyright'>
            <h3>Desarrollado por GEMMA ©</h3>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
