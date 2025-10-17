<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dhQalamos - Digital Humanities Engineering</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary: #2563eb;
            --primary-dark: #1e40af
            --secondary: #10b981;
            --dark: #0f172a;
            --dark-light: #1e293b;
            --text: #e2e8f0;
            --text-muted: #94a3b8;
            --accent: #f59e0b;
        }
        
        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: var(--dark);
            color: var(--text);
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(10px);
            z-index: 1000;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }
        
        .nav-links a {
            color: var(--text);
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }
        
        .nav-links a:hover {
            color: var(--primary);
        }
        
        /* Hero Section */
        .hero {
            padding: 150px 0 100px;
            background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%);
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
            animation: float 20s infinite ease-in-out;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-50px, 50px) rotate(180deg); }
        }
        
        .hero-content {
            position: relative;
            z-index: 1;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #fff 0%, var(--text) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero .subtitle {
            font-size: 1.5rem;
            color: var(--secondary);
            margin-bottom: 1.5rem;
            font-weight: 500;
        }
        
        .hero p {
            font-size: 1.2rem;
            color: var(--text-muted);
            max-width: 700px;
            margin-bottom: 2rem;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 0.9rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-block;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        }
        
        .btn-secondary {
            background: transparent;
            color: var(--text);
            border: 2px solid var(--primary);
        }
        
        .btn-secondary:hover {
            background: var(--primary);
            color: white;
        }
        
        /* Services Section */
        .services {
            padding: 100px 0;
            background: var(--dark-light);
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            margin: 1rem auto;
            border-radius: 2px;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            background: var(--dark);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
        }
        
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            transform: scaleX(0);
            transition: transform 0.3s;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 15px 40px rgba(37, 99, 235, 0.2);
        }
        
        .service-card:hover::before {
            transform: scaleX(1);
        }
        
        .service-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text);
        }
        
        .service-card p {
            color: var(--text-muted);
            line-height: 1.7;
        }
        
        /* Expertise Section */
        .expertise {
            padding: 100px 0;
            background: var(--dark);
        }
        
        .expertise-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .expertise-text h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
        
        .expertise-text p {
            color: var(--text-muted);
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .tech-tag {
            background: var(--dark-light);
            padding: 0.6rem 1.2rem;
            border-radius: 20px;
            border: 1px solid rgba(37, 99, 235, 0.3);
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s;
        }
        
        .tech-tag:hover {
            background: var(--primary);
            border-color: var(--primary);
            transform: translateY(-2px);
        }
        
        /* Approach Section */
        .approach {
            padding: 100px 0;
            background: var(--dark-light);
        }
        
        .approach-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .approach-item {
            text-align: center;
            padding: 2rem;
        }
        
        .approach-number {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
        }
        
        .approach-item h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: var(--text);
        }
        
        .approach-item p {
            color: var(--text-muted);
        }
        
        /* Projects Section */
        .projects {
            padding: 100px 0;
            background: var(--dark);
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }
        
        .project-card {
            background: var(--dark-light);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(37, 99, 235, 0.2);
        }
        
        .project-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
        }
        
        .project-content {
            padding: 2rem;
        }
        
        .project-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .project-content p {
            color: var(--text-muted);
            margin-bottom: 1rem;
        }
        
        .project-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s;
        }
        
        .project-link:hover {
            color: var(--secondary);
        }
        
        /* Contact Section */
        .contact {
            padding: 100px 0;
            background: var(--dark-light);
        }
        
        .contact-content {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
        }
        
        .contact-content p {
            font-size: 1.2rem;
            color: var(--text-muted);
            margin-bottom: 2rem;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 3rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 1.5rem;
            background: var(--dark);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .contact-item a {
            color: var(--primary);
            text-decoration: none;
            font-weight: 500;
            font-size: 1.1rem;
        }
        
        .contact-item a:hover {
            color: var(--secondary);
        }
        
        /* Footer */
        footer {
            background: var(--dark);
            padding: 2rem 0;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        footer p {
            color: var(--text-muted);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero .subtitle {
                font-size: 1.2rem;
            }
            
            .nav-links {
                flex-direction: column;
                gap: 1rem;
            }
            
            .expertise-content {
                grid-template-columns: 1fr;
            }
            
            .services-grid,
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">diQalamos</div>
            <ul class="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#approach">Approach</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="container hero-content">
            <h1>Digital Humanities Engineering</h1>
            <p class="subtitle">Research Data Solutions | AI Engineering | Sustainable Scholarship</p>
            <p>Empowering humanities research through cutting-edge technology, ecological AI practices, and FAIR principles. Specialized in TEI/XML encoding, HTR model development, and research data engineering for sustainable digital projects.</p>
            <div class="cta-buttons">
                <a href="#contact" class="btn btn-primary">Start Your Project</a>
                <a href="#expertise" class="btn btn-secondary">Explore Services</a>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">What I Offer</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">📝</div>
                    <h3>TEI & XML Engineering</h3>
                    <p>Expert text encoding and markup solutions for digital editions, manuscripts, and scholarly texts. Custom TEI schemas tailored to your research needs with clean, maintainable code.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">🤖</div>
                    <h3>HTR Model Development</h3>
                    <p>Custom handwritten text recognition models trained for specific languages and scripts. From Arabic manuscripts to historical documents, leveraging AI engineering for accurate text recognition.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">💡</div>
                    <h3>Prompt Engineering for DH</h3>
                    <p>Harness the power of large language models for humanities research. Strategic prompt design, workflow optimization, and AI integration for your digital humanities projects.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">📊</div>
                    <h3>Research Data Engineering</h3>
                    <p>End-to-end data management solutions following FAIR principles. Data modeling, transformation, visualization, and sustainable architecture for long-term project viability.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">🎓</div>
                    <h3>Teaching & Consultation</h3>
                    <p>Workshops, training sessions, and consulting for digital humanities projects. From project conception to implementation, guiding teams through technical challenges.</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">🌱</div>
                    <h3>Ecological AI Solutions</h3>
                    <p>Sustainable, energy-efficient AI implementations that align with FAIR principles. Building responsible technology solutions for humanities research with minimal environmental impact.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="expertise" class="expertise">
        <div class="container">
            <div class="expertise-content">
                <div class="expertise-text">
                    <h2>Bridging Humanities & Technology</h2>
                    <p>With specialized expertise in digital humanities and a passion for sustainable research practices, I transform complex scholarly challenges into elegant technical solutions.</p>
                    <p>My work spans from developing custom HTR models for Arabic manuscripts to engineering robust data infrastructures that ensure your research remains accessible and sustainable long after project completion.</p>
                    <p>Every project is approached with a commitment to FAIR principles, ecological responsibility, and the unique needs of humanities scholarship.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">TEI/XML</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">XSLT</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">HTR/OCR</span>
                        <span class="tech-tag">Machine Learning</span>
                        <span class="tech-tag">RDF/Linked Data</span>
                        <span class="tech-tag">Git</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">LLM Integration</span>
                    </div>
                </div>
                <div class="expertise-visual">
                    <div style="background: linear-gradient(135deg, var(--dark-light), var(--dark)); padding: 3rem; border-radius: 16px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h3 style="margin-bottom: 2rem; font-size: 1.8rem;">Core Competencies</h3>
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span>TEI Encoding</span>
                                <div style="width: 60%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                                    <div style="width: 95%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary));"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span>HTR Development</span>
                                <div style="width: 60%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                                    <div style="width: 90%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary));"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span>Data Engineering</span>
                                <div style="width: 60%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                                    <div style="width: 88%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary));"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span>Prompt Engineering</span>
                                <div style="width: 60%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                                    <div style="width: 85%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary));"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="approach" class="approach">
        <div class="container">
            <h2 class="section-title">My Approach</h2>
            <div class="approach-grid">
                <div class="approach-item">
                    <div class="approach-number">01</div>
                    <h3>Project-Based Solutions</h3>
                    <p>Tailored digital humanities implementations designed around your specific research questions and scholarly goals.</p>
                </div>
                <div class="approach-item">
                    <div class="approach-number">02</div>
                    <h3>Smart Time Management</h3>
                    <p>Efficient workflows and realistic timelines that respect both project deadlines and the complexity of humanities research.</p>
                </div>
                <div class="approach-item">
                    <div class="approach-number">03</div>
                    <h3>Sustainable Architecture</h3>
                    <p>Building systems that endure beyond project funding, with clear documentation and maintainable code for long-term viability.</p>
                </div>
                <div class="approach-item">
                    <div class="approach-number">04</div>
                    <h3>FAIR Principles</h3>
                    <p>Ensuring your research data is Findable, Accessible, Interoperable, and Reusable for the broader scholarly community.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Featured Work</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">📜</div>
                    <div class="project-content">
                        <h3>Arabic Manuscripts HTR</h3>
                        <p>Custom handwritten text recognition models for Arabic manuscripts, achieving high accuracy in historical text digitization through specialized training datasets and model optimization.</p>
                        <a href="https://github.com/Sserhatt/arabic_manuscripts" class="project-link" target="_blank">View on GitHub →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">📖</div>
                    <div class="project-content">
                        <h3>Paris Bible Digital Edition</h3>
                        <p>Collaborative digital edition project featuring TEI encoding, web development, and sustainable data architecture for medieval biblical texts.</p>
                        <a href="https://github.com/Sserhatt/parisbible.github.io" class="project-link" target="_blank">View on GitHub →</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">⚙️</div>
                    <div class="project-content">
                        <h3>Research Data Workflows</h3>
                        <p>Development of reproducible data transformation pipelines, XSLT stylesheets, and Python scripts for complex humanities datasets.</p>
                        <a href="https://github.com/Sserhatt" class="project-link" target="_blank">Explore More →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <h2 class="section-title">Let's Build Something Sustainable</h2>
                <p>Ready to transform your digital humanities vision into reality? Whether you need HTR models, TEI encoding, data engineering, or strategic consultation, let's discuss how we can create sustainable solutions for your research.</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <span style="font-size: 1.5rem;">📧</span>
                        <a href="mailto:info@diqalamos.com">info@diqalamos.com</a>
                    </div>
                    <div class="contact-item">
                        <span style="font-size: 1.5rem;">💼</span>
                        <a href="https://github.com/Sserhatt" target="_blank">GitHub Portfolio</a>
                    </div>
                </div>
                <div style="margin-top: 3rem;">
                    <a href="mailto:info@diqalamos.com" class="btn btn-primary">Get in Touch</a>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2025 diQalamos. Digital Humanities Engineering with Ecological AI & FAIR Principles.</p>
        </div>
    </footer>
</body>
</html>