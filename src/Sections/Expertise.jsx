import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Infinity, Rocket, Shield, Brain, Play, ChevronDown } from 'lucide-react';

function Expertise() {
  const containerRef = useRef(null);
  const [bgOpacity, setBgOpacity] = useState(0.8);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(Math.floor(window.innerWidth * 0.8), Math.floor(window.innerHeight * 0.8));
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 2

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 p = ((gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0));
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          for (float i = 0.0; i < 20.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 20.0));
            vec4 auroraColors = vec4(
              0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
              0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
              0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
              1.0
            );
            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 20.0) * 0.6;
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
          }

          o = tanh(pow(o / 100.0, vec4(1.6)));
          gl_FragColor = o * 1.5;
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId;
    const animate = () => {
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <div className="relative z-10 divider" />
      </div>
      <section
        id="expertise"
        data-section-name="expertise"
        data-scroll
        className="mt-10 relative min-h-screen w-full px-8 lg:px-24 flex items-center rounded-b-[80px]" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`, zIndex: 1, transition: 'background-color 0.3s ease' }}
      >
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-50 rounded-t-[100%]" />
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2
              data-scroll
              data-scroll-speed="1"
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-pure">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Technologies and skills I work with
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Full-Stack Development',
                desc: 'Building complete web applications from frontend to backend.',
                tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL']
              },
              {
                number: '02',
                title: 'DevOps & Deployment',
                desc: 'Tools and platforms for efficient deployment and monitoring.',
                tech: ['Ubuntu', 'Docker', 'AWS', 'CI/CD']
              },
              {
                number: '03',
                title: 'Security Focus',
                desc: 'Integrating secure coding and exploring cybersecurity.',
                tech: ['Penetration Testing', 'Vulnerability Analysis']
              }
            ].map((service, index) => {
              const cardColors = ['bg-gray-50', 'bg-blue-50', 'bg-green-50'];
              const numberColors = ['text-blue-600', 'text-green-600', 'text-purple-600'];
              return (
                <div
                  key={index}
                  className={`${cardColors[index]} rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300`}
                  onMouseEnter={() => setBgOpacity(0.4)}
                  onMouseLeave={() => setBgOpacity(0.8)}
                >
                  <div className={`text-sm ${numberColors[index]} font-medium mb-2`}>
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="space-y-2">
                    {service.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-sm font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={() => window.open('https://drive.google.com/file/d/1BJ8Si2LYy3EPj7SSTUsWX7jdmqeu5rLj/view?usp=drive_link', '_blank')} className='pointer-events-auto z-80 text-orange px-10 py-2 border-2 bg-transparent rounded-full font-semibold hover:bg-black hover:text-white transition flex items-center gap-2'>Download CV</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Expertise
