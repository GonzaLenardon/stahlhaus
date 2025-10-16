import React, { useEffect, useState, useRef } from 'react';

const data = [
  { label: 'Proyectos realizados', value: 75, color: '#0854eeff' },
  { label: 'Localidades', value: 11, color: '#d80c21ff' },
  { label: 'Obras en construcción', value: 3, color: '#c0bd03ff' },
  { label: 'Proyectos en proceso', value: 4, color: '#60f609ff' },
];

const CantidadProyectos = () => {
  const [counts, setCounts] = useState(data.map(() => 0));
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  // Detecta cuando el componente entra en vista (60%)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Animación del conteo
  useEffect(() => {
    if (!visible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    data.forEach((item, index) => {
      let current = 0;
      const increment = item.value / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= item.value) {
          current = item.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.round(current);
          return newCounts;
        });
      }, interval);
    });
  }, [visible]);

  return (
    <div
      ref={ref}
      className="container-fluid py-4"
      style={{ backgroundColor: '#1a1a2e' }}
    >
      <div className="row justify-content-center g-3">
        {data.map((item, index) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const progress = counts[index] / item.value;
          const dashoffset = circumference * (1 - progress);

          return (
            <div
              key={index}
              className="col-6 col-md-3 d-flex justify-content-center"
            >
              <div
                className="d-flex flex-column align-items-center text-center shadow-lg rounded-4 p-1 transition-all"
                style={{
                  width: '100%',
                  maxWidth: '10rem',
                  backgroundColor: '#fff',
                  cursor: 'default',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-2"
                  style={{ height: '140px' }}
                >
                  <svg
                    width="140"
                    height="140"
                    className="d-flex align-items-center justify-content-center"
                  >
                    {/* Círculo de fondo */}
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke="#dbeafe"
                      strokeWidth="10"
                      fill="none"
                    />
                    {/* Círculo de progreso */}
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke={item.color}
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashoffset}
                      style={{
                        transition: 'stroke-dashoffset 0.3s linear',
                      }}
                    />
                    {/* Texto centrado */}
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="30"
                      fontWeight="bold"
                      fill={item.color}
                    >
                      +{counts[index]}
                    </text>
                  </svg>
                </div>

                <p
                  className="fw-semibold mt-2"
                  style={{ color: 'rgba(0, 0, 0, 0.7)' }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CantidadProyectos;
