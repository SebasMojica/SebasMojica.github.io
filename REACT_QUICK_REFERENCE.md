# 🚀 **React Portfolio Quick Reference Guide**

## 📁 **Project Structure**

```
src/
├── components/          ← All React components
│   ├── Header.js
│   ├── About.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── Loader.js
│   ├── AsciiText.js     ← React Bits components
│   └── TypewriterText.js
├── css/
│   └── style.css        ← Main stylesheet
├── App.js              ← Main app component
└── index.js            ← Entry point

public/
├── css/                ← External CSS files
├── fonts/              ← Font files
├── images/             ← All images
├── js/                 ← JavaScript libraries
└── index.html          ← HTML template
```

---

## ⚡ **Quick Commands**

### **Start Development Server**

```bash
npm start
```

_Opens at http://localhost:3000_

### **Install New Packages**

```bash
npm install package-name
```

### **Build for Production**

```bash
npm run build
```

### **Deploy to GitHub Pages**

```bash
npm run deploy
```

---

## 🎨 **Adding New Components**

### **1. Create New Component**

```jsx
// src/components/NewSection.js
import React from "react";

const NewSection = () => {
  return (
    <section className="site-section" id="new-section">
      <div className="container">
        <h2>New Section</h2>
        <p>Your content here!</p>
      </div>
    </section>
  );
};

export default NewSection;
```

### **2. Add to App.js**

```jsx
// Add import at top
import NewSection from "./components/NewSection";

// Add in return statement
return (
  <div className="App">
    <div id="overlayer"></div>
    <Loader />

    <div className="site-wrap">
      <Header />
      <About />
      <NewSection /> {/* Add here */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
);
```

---

## 🎭 **React Bits Animations**

### **ASCII Text Animation**

```jsx
import AsciiText from "./components/AsciiText";

// Usage
<AsciiText text="YOUR TEXT HERE" className="text-center mb-4" />;
```

### **Typewriter Effect**

```jsx
import TypewriterText from "./components/TypewriterText";

// Usage
<TypewriterText text="Your typing text here!" speed={100} />;
```

### **Install More React Bits**

```bash
# Particle backgrounds
npm install react-particles

# Scroll animations
npm install react-reveal

# Glitch effects
npm install react-glitch-effect

# Typed.js
npm install react-typed
```

---

## 🎯 **Common Modifications**

### **Add Content to Existing Section**

```jsx
// In src/components/About.js (or any component)
<h2>New Heading</h2>
<p>Your new content goes here!</p>
```

### **Add Images**

```jsx
// Place images in public/images/
<img src="images/your-image.jpg" alt="Description" className="img-fluid" />
```

### **Add Links**

```jsx
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link Text
</a>
```

### **Add Buttons**

```jsx
<button className="btn btn-primary">Click Me</button>
<button className="btn btn-secondary">Another Button</button>
```

---

## 🎨 **Styling**

### **Add Custom CSS**

```css
/* In src/css/style.css */
.my-custom-class {
  background: #00005f;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.animated-element {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### **Use Bootstrap Classes**

```jsx
<div className="row">
  <div className="col-md-6">Left Column</div>
  <div className="col-md-6">Right Column</div>
</div>

<div className="text-center mb-4">
  <h1 className="display-4">Large Heading</h1>
</div>
```

---

## 🔧 **Interactive Elements**

### **State Management**

```jsx
import React, { useState } from "react";

const InteractiveComponent = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setIsVisible(!isVisible)}>Toggle Content</button>

      {isVisible && <p>This content is visible!</p>}
    </div>
  );
};
```

### **Event Handlers**

```jsx
const handleClick = () => {
  alert('Button clicked!');
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

// Usage
<button onClick={handleClick}>Click Me</button>
<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

---

## 📱 **Responsive Design**

### **Bootstrap Grid System**

```jsx
<div className="row">
  <div className="col-12 col-md-6 col-lg-4">
    Mobile: Full width Tablet: Half width Desktop: Third width
  </div>
</div>
```

### **Responsive Images**

```jsx
<img src="images/your-image.jpg" alt="Description" className="img-fluid" />
```

---

## 🚀 **Adding Pages (Multi-Page)**

### **Install React Router**

```bash
npm install react-router-dom
```

### **Create New Page**

```jsx
// src/components/Blog.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div className="site-wrap">
      <Header />
      <div className="container" style={{ paddingTop: "100px" }}>
        <h1>My Blog</h1>
        <p>Blog content here!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
```

### **Update App.js for Routing**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

const HomePage = () => (
  // Your existing homepage content
);
```

---

## 🎯 **Quick Tips**

### **Hot Reload**

- Save any file → Changes appear instantly
- No need to refresh browser

### **Component Structure**

```jsx
// Always follow this pattern:
import React from "react";

const ComponentName = () => {
  return <div>{/* Your JSX here */}</div>;
};

export default ComponentName;
```

### **Common Bootstrap Classes**

- `container` - Centered container
- `row` - Bootstrap row
- `col-md-6` - Half width on medium screens
- `text-center` - Center text
- `mb-4` - Margin bottom
- `btn btn-primary` - Primary button
- `img-fluid` - Responsive image

### **AOS Animations**

```jsx
<div data-aos="fade-up" data-aos-delay="100">
  This element fades up with delay
</div>
```

---

## 🐛 **Troubleshooting**

### **Common Issues**

1. **Import errors** → Check file paths
2. **CSS not loading** → Check if files are in `public/` folder
3. **Images not showing** → Place in `public/images/`
4. **Component not rendering** → Check import/export statements

### **Debug Steps**

1. Check browser console for errors
2. Verify file paths are correct
3. Make sure components are properly imported
4. Check that all brackets/parentheses are closed

---

## 📝 **File Naming Convention**

- Components: `PascalCase.js` (e.g., `About.js`)
- CSS files: `kebab-case.css` (e.g., `style.css`)
- Images: `kebab-case.jpg` (e.g., `my-image.jpg`)

---

## 🎨 **Advanced React Bits Examples**

### **Particle Background**

```jsx
// src/components/ParticleBackground.js
import React from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00005f",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
```

### **Scroll Reveal Animation**

```jsx
// src/components/ScrollReveal.js
import React from "react";
import Fade from "react-reveal/Fade";

const ScrollReveal = () => {
  return (
    <div>
      <Fade left>
        <h2>This slides in from the left</h2>
      </Fade>

      <Fade right delay={200}>
        <p>This slides in from the right with delay</p>
      </Fade>

      <Fade bottom delay={400}>
        <div>This slides up from bottom</div>
      </Fade>
    </div>
  );
};

export default ScrollReveal;
```

### **Glitch Text Effect**

```jsx
// src/components/GlitchText.js
import React from "react";
import Glitch from "react-glitch-effect";

const GlitchText = () => {
  return (
    <Glitch>
      <h1>GLITCHY TEXT</h1>
    </Glitch>
  );
};

export default GlitchText;
```

---

## 🔗 **Useful Links**

- [React Bits](https://reactbits.dev/) - Cool React components
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Router](https://reactrouter.com/) - Routing for React

---

**💡 Remember: Save files frequently and watch the magic happen with hot reload!** 🎉

---

## 📋 **Checklist for New Features**

- [ ] Create component file in `src/components/`
- [ ] Import component in `App.js`
- [ ] Add component to JSX
- [ ] Test in browser
- [ ] Add styling if needed
- [ ] Test responsive design
- [ ] Commit changes to git

---

_Last updated: $(date)_
