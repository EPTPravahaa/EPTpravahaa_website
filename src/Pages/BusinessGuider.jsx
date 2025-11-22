import React from "react";
import { FaCar, FaClock, FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import bannerimage3 from "../assets/images/cab.jpg";

function AboutRudraRides() {
  const features = [
    {
      icon: <FaCar size={40} color="#fff" />,
      title: "Instant Cab Booking",
      desc: "Book your ride in seconds — quick, simple, and seamless experience.",
    },
    {
      icon: <FaClock size={40} color="#fff" />,
      title: "24/7 Service",
      desc: "Anytime, anywhere — our rides are available round the clock.",
    },
    {
      icon: <FaCreditCard size={40} color="#fff" />,
      title: "Secure Payments",
      desc: "Enjoy safe and easy payments through cards, UPI, or wallets.",
    },
    {
      icon: <FaMapMarkerAlt size={40} color="#fff" />,
      title: "Live Tracking",
      desc: "Stay updated with real-time tracking from pickup to drop.",
    },
  ];

  return (
    <div style={{
      fontFamily: '"Poppins", sans-serif',
      color: '#222',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      overflowX: 'hidden',
      paddingTop: '80px'
    }}>
      {/* HERO SECTION */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: 'clamp(4rem, 10vw, 8rem)'
      }}>
        <div className="position-absolute" style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                borderRadius: '50px',
                fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}>Mobility Platform</span>
              <h1 className="mb-4 text-white" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
              }}>Rudra Ride</h1>
              <p className="mb-4 text-white" style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                maxWidth: '600px'
              }}>
                Your smart, reliable, and secure cab service designed for modern commuting.
                Enjoy comfort, safety, and convenience wherever you go.
              </p>
              <button className="btn" disabled style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: 'clamp(0.875rem, 1.5vw, 1.125rem) clamp(2rem, 4vw, 3rem)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                fontWeight: 600,
                opacity: 0.85,
                cursor: 'not-allowed'
              }}>
                Coming Soon
              </button>
            </div>
            <div className="col-lg-6 text-center position-relative">
              <div className="position-relative" style={{ display: 'inline-block' }}>
                <div className="position-absolute" style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  zIndex: 0
                }}></div>
                <img src={bannerimage3} alt="Rudra Ride Car" className="img-fluid rounded position-relative" style={{
                  maxWidth: '100%',
                  height: 'auto',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                  transition: 'transform 0.5s ease',
                  zIndex: 1,
                  borderRadius: '16px'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5" style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: 'white',
                borderRadius: '50px',
                fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>About</span>
              <h2 className="mb-4" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
              }}>Your Smart Ride Solution</h2>
              <p className="mx-auto" style={{
                fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                color: '#64748b',
                lineHeight: 1.8,
                maxWidth: '800px'
              }}>
                Experience effortless travel with <strong style={{ color: '#0f172a' }}>Rudra Ride</strong>. Whether you're
                heading across town or out of the city, we make every journey smooth, secure,
                and enjoyable. With 24/7 support, real-time tracking, and flexible payment
                options, you're always in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              borderRadius: '50px',
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Features</span>
            <h2 className="mb-3" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>Why Choose Rudra Ride?</h2>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>Experience the future of mobility</p>
          </div>
          <div className="row g-4 justify-content-center">
            {features.map((feature, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div className="h-100 bg-white rounded shadow-sm border text-center p-4" style={{
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderTop: '4px solid #3b82f6',
                  transition: 'all 0.3s ease',
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                }}>
                  <div>
                    <div className="mb-4 d-flex justify-content-center">
                      <div className="rounded d-flex align-items-center justify-content-center" style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                        color: 'white'
                      }}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="mb-3" style={{
                      fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)',
                      color: '#0f172a',
                      fontWeight: 700,
                      marginBottom: '1rem'
                    }}>{feature.title}</h3>
                  </div>
                  <p className="mb-0" style={{
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#475569',
                    lineHeight: 1.7
                  }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutRudraRides;
