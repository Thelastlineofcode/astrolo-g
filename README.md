# Astrolo G ðŸŒ™âœ¨

**Professional Astrology Social Media Post Generator**

Create stunning, screenshot-ready astrology posts for Instagram and other social platforms with beautiful themes, accurate sidereal zodiac dates, and holistic wellness recommendations.

![Version](https://img.shields.io/badge/version-1.0.0-purple)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ðŸŒŸ Features

### Post Types (6 Variants)

- **Sun Sign Posts** - Daily horoscopes with sidereal zodiac dates
- **Rising Sign Posts** - Ascendant-specific readings
- **General Astrology** - Universal cosmic wisdom
- **Moon Phases** - 8 moon phase posts with meanings
- **Planetary Transits** - 8 major planet transit insights
- **Love Compatibility** - Zodiac sign pairing analysis

### Visual Customization

- **5 Gradient Themes**: Cosmic Night, Mystic Sunset, Moonlight, Mystical Forest, Custom Sign Colors
- **3 Font Styles**: Elegant (Serif), Modern (Sans), Mystical (Mono)
- **Sacred Geometry Patterns**: Planetary symbols and geometric decorations
- **1:1 Aspect Ratio**: Perfect for Instagram (1080x1080px recommended)

### Holistic Recommendations

- **Crystal Healing**: Zodiac-specific crystal suggestions
- **Essential Oils**: Aromatherapy recommendations per sign
- **Color Therapy**: Therapeutic color guidance

### Smart Features

- **Auto-Generated Captions**: Copy-to-clipboard with relevant hashtags
- **Sidereal Zodiac System**: Accurate Lahiri ayanamsa dates
- **Professional Branding**: Consistent "Astrolo G" watermark
- **Screenshot Ready**: Optimized layout for social media sharing

---

## ðŸš€ Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/astrolo-g.git
cd astrolo-g

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## ðŸ“± Usage

1. **Select Post Type**: Choose from 6 different post formats
2. **Choose Zodiac Sign**: Pick your sun/rising sign (for applicable post types)
3. **Select Theme**: Pick from 5 gradient themes or custom sign colors
4. **Choose Font Style**: Elegant, Modern, or Mystical
5. **Enter Content**: Write your horoscope or astrology insight
6. **Copy Caption**: Auto-generated caption with hashtags
7. **Screenshot Post**: Capture the preview square for Instagram

---

## ðŸŽ¨ Customization

### Sidereal Zodiac Dates (Lahiri Ayanamsa)

```javascript
Aries: Apr 14 - May 14
Taurus: May 15 - Jun 15
Gemini: Jun 16 - Jul 16
Cancer: Jul 17 - Aug 16
Leo: Aug 17 - Sep 16
Virgo: Sep 17 - Oct 17
Libra: Oct 18 - Nov 16
Scorpio: Nov 17 - Dec 15
Sagittarius: Dec 16 - Jan 14
Capricorn: Jan 15 - Feb 12
Aquarius: Feb 13 - Mar 14
Pisces: Mar 15 - Apr 13
```

### Color Themes

Customize gradients in the `themes` object in `App.jsx`:

```javascript
const themes = {
  cosmic: { gradient: "from-purple-900 via-blue-900 to-black" },
  // Add your custom themes here
};
```

---

## ðŸ› ï¸ Tech Stack

- **React 18.2** - UI framework
- **Vite 5.0** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first styling
- **Lucide React** - Beautiful icons
- **PostCSS & Autoprefixer** - CSS processing

---

## ðŸ“‚ Project Structure

```
astrolo-g/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ App.jsx           # Main application component
â”‚   â”œâ”€â”€ main.jsx          # React entry point
â”‚   â””â”€â”€ index.css         # Global styles & Tailwind imports
â”œâ”€â”€ public/               # Static assets
â”œâ”€â”€ package.json          # Dependencies and scripts
â”œâ”€â”€ vite.config.js        # Vite configuration
â”œâ”€â”€ tailwind.config.js    # Tailwind configuration
â””â”€â”€ README.md             # Project documentation
```

---

## ðŸ› Known Issues

1. **Bottom Logo Padding**: The "Astrolo G" branding may get cut off in screenshots on some devices
2. **No Persistent Storage**: Settings reset on page refresh (by design - no localStorage/sessionStorage)
3. **Screenshot Method**: Currently requires manual screenshot; proper export feature planned

---

## ðŸ—ºï¸ Roadmap

See [GitHub Issues](https://github.com/yourusername/astrolo-g/issues) for planned features and enhancements.

### Priority 1 - Core Functionality

- [ ] Custom logo upload
- [ ] PNG export (html2canvas integration)
- [ ] Custom gradient color picker
- [ ] Fix bottom padding issue

### Priority 2 - User Experience

- [ ] Mobile responsive design
- [ ] Touch-friendly controls
- [ ] Preview zoom functionality
- [ ] Template save system

### Priority 3 - Advanced Features

- [ ] Weekly/monthly horoscope formats
- [ ] Birth chart elements
- [ ] Batch generation (all 12 signs)
- [ ] More background patterns

### Priority 4 - Polish

- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Error handling & validation
- [ ] Progressive Web App (PWA)

---

## ðŸ¤ Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use functional components with hooks
- Follow existing code style
- Add comments for complex logic
- Test all post types and themes
- Ensure mobile compatibility

---

## ðŸ“„ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ðŸ™ Acknowledgments

- Sidereal zodiac dates based on Lahiri ayanamsa system
- Crystal and aromatherapy recommendations from traditional holistic practices
- Icons provided by [Lucide Icons](https://lucide.dev/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)

---

## ðŸ“§ Contact

**Project Maintainer**: TheLastLineOfCode

- GitHub: [@thelastlineofcode](https://github.com/thelastlineofcode)
- Email: travone.butler.com

---

## ðŸŒ™ Support

If you find this project helpful, please give it a â­ on GitHub!

For questions or issues, please [open an issue](https://github.com/yourusername/astrolo-g/issues).

---

**Made with ðŸ’œ for the astrology community**
