import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

function Partikel() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div>
      <Particles
        className="relative"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {},
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "emitter",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              emitters: {
                direction: "none",
                spawnColor: {
                  animation: {
                    h: {
                      enable: true,
                      offset: {
                        min: -1.4,
                        max: 1.4,
                      },
                      speed: 0.1,
                      sync: false,
                    },
                    l: {
                      enable: true,
                      offset: {
                        min: 20,
                        max: 80,
                      },
                      speed: 0,
                      sync: false,
                    },
                  },
                },
                life: {
                  count: 1,
                  duration: 0.1,
                  delay: 0.6,
                },
                rate: {
                  delay: 0.1,
                  quantity: 3,
                },
                size: {
                  width: 0,
                  height: 0,
                },
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fffa86",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: {
                min: 3.5,
                max: 9,
                random: true,
              },
              bounce: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: ["circle", "square", "polygon", "star"],
              image: {
                src: "Triangle.png",
              },
            },
            size: {
              value: { min: 5, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Partikel;
