# Sebastian Mojica's Portfolio - React Version

This is a React version of Sebastian Mojica's portfolio website, converted from the original HTML/CSS/JavaScript version while maintaining the exact same look and functionality. The project uses [Vite](https://vitejs.dev/) for a faster development and build experience.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

Or run `npm run dev` if you prefer Vite's conventional script name.

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `dist` folder. Serve it with `npm run preview` to verify the output locally.

## Adding React Bits Components

Now that you have a React project, you can easily add cool components from [React Bits](https://reactbits.dev/). Here's how to add the ASCII Text animation you mentioned:

### 1. Install Required Dependencies

For the ASCII Text animation, you'll need:

```bash
npm install framer-motion
```

### 2. Create the ASCII Text Component

Create a new file `src/components/AsciiText.js`:

```jsx
import React from "react";
import { motion } from "framer-motion";

const AsciiText = ({ text, className = "" }) => {
  const asciiChars =
    "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

  return (
    <div className={`ascii-text ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="ascii-char"
        >
          {asciiChars.includes(char) ? char : " "}
        </motion.span>
      ))}
    </div>
  );
};

export default AsciiText;
```

### 3. Add CSS for ASCII Text

Add this to your `src/css/style.css`:

```css
.ascii-text {
  font-family: "Courier New", monospace;
  font-size: 1.2rem;
  line-height: 1.2;
  letter-spacing: 0.1em;
}

.ascii-char {
  display: inline-block;
  transition: all 0.3s ease;
}

.ascii-char:hover {
  transform: scale(1.2);
  color: #00005f;
}
```

### 4. Use the Component

Import and use it in any component:

```jsx
import AsciiText from "./components/AsciiText";

// In your component's render method:
<AsciiText text="SEBASTIAN MOJICA" className="text-center mb-4" />;
```

### 5. More React Bits Examples

You can add many more cool components from React Bits:

#### Glitch Text Effect

```bash
npm install react-glitch-effect
```

#### Typewriter Effect

```bash
npm install react-typed
```

#### Particle Background

```bash
npm install react-particles
```

#### Scroll Animations

```bash
npm install react-reveal
```

### 6. Example Integration

Here's how you could enhance your About section with ASCII text:

```jsx
import React from "react";
import AsciiText from "./components/AsciiText";

const About = () => {
  return (
    <div
      className="site-section cta-big-image border-bottom"
      id="about-section"
    >
      <div className="container" style={{ paddingTop: "30px" }}>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <img
              src="images/sebas-taking-a-pic.webp"
              alt="Image of you of something fun"
              className="img-fluid"
            />
          </div>
          <div
            className="col-lg-5 ml-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-4">
              <AsciiText text="WHO IS SEBASTIAN?" className="mb-3" />
              {/* Rest of your content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
```

## Project Structure

```
src/
├── components/
│   ├── Header.js
│   ├── About.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── Footer.js
│   └── Loader.js
├── css/
│   └── style.css (your existing styles)
├── App.js
└── index.js
```

## Features Maintained

- ✅ Exact same visual design
- ✅ All animations and transitions
- ✅ Mobile responsiveness
- ✅ Smooth scrolling navigation
- ✅ AOS animations
- ✅ jQuery functionality (carousels, sticky header, etc.)
- ✅ All existing CSS and styling

## Adding More React Bits Components

1. Browse [React Bits](https://reactbits.dev/) for components you like
2. Install the required dependencies
3. Create the component in `src/components/`
4. Import and use it in your existing components
5. Add any necessary CSS

The beauty of React is that you can now easily add interactive components, animations, and modern UI elements while keeping your existing design intact!

## Deployment

For GitHub Pages deployment:

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Deploy:

```bash
npm run deploy
```

Your React portfolio will be available at `https://sebastianmojica.github.io/SebasMojica.github.io/`
