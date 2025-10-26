import React, { useState } from "react";
import {
  Stars,
  Moon,
  Sun,
  Sparkles,
  Download,
  Copy,
  Heart,
  Upload,
  Palette,
} from "lucide-react";

const AstrologyPostGenerator = () => {
  const [selectedSign, setSelectedSign] = useState("aries");
  const [horoscopeText, setHoroscopeText] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("cosmic");
  const [postType, setPostType] = useState("sign"); // 'sign', 'ascendant', 'general', 'moon', 'transit', 'compatibility'
  const [selectedFont, setSelectedFont] = useState("elegant");
  const [customLogo, setCustomLogo] = useState("");
  const [compatibilitySign2, setCompatibilitySign2] = useState("leo");
  const [moonPhase, setMoonPhase] = useState("new");
  const [transitPlanet, setTransitPlanet] = useState("mercury");
  const [crystalRecommendation, setCrystalRecommendation] = useState("");
  const [essentialOil, setEssentialOil] = useState("");
  const [colorTherapy, setColorTherapy] = useState("");

  const zodiacSigns = [
    {
      key: "aries",
      name: "Aries",
      symbol: "♈",
      dates: "Apr 14 - May 14",
      element: "Fire",
      color: "#FF6B6B",
      crystal: "Red Jasper",
      oil: "Rosemary",
      therapyColor: "Bold Red",
    },
    {
      key: "taurus",
      name: "Taurus",
      symbol: "♉",
      dates: "May 15 - Jun 14",
      element: "Earth",
      color: "#4ECDC4",
      crystal: "Rose Quartz",
      oil: "Vanilla",
      therapyColor: "Earth Green",
    },
    {
      key: "gemini",
      name: "Gemini",
      symbol: "♊",
      dates: "Jun 15 - Jul 16",
      element: "Air",
      color: "#45B7D1",
      crystal: "Citrine",
      oil: "Peppermint",
      therapyColor: "Bright Yellow",
    },
    {
      key: "cancer",
      name: "Cancer",
      symbol: "♋",
      dates: "Jul 17 - Aug 16",
      element: "Water",
      color: "#96CEB4",
      crystal: "Moonstone",
      oil: "Chamomile",
      therapyColor: "Silver White",
    },
    {
      key: "leo",
      name: "Leo",
      symbol: "♌",
      dates: "Aug 17 - Sep 16",
      element: "Fire",
      color: "#FFEAA7",
      crystal: "Sunstone",
      oil: "Orange",
      therapyColor: "Golden Yellow",
    },
    {
      key: "virgo",
      name: "Virgo",
      symbol: "♍",
      dates: "Sep 17 - Oct 17",
      element: "Earth",
      color: "#DDA0DD",
      crystal: "Amazonite",
      oil: "Lavender",
      therapyColor: "Deep Blue",
    },
    {
      key: "libra",
      name: "Libra",
      symbol: "♎",
      dates: "Oct 18 - Nov 16",
      element: "Air",
      color: "#FDA7DF",
      crystal: "Lapis Lazuli",
      oil: "Rose",
      therapyColor: "Soft Pink",
    },
    {
      key: "scorpio",
      name: "Scorpio",
      symbol: "♏",
      dates: "Nov 17 - Dec 15",
      element: "Water",
      color: "#6C5CE7",
      crystal: "Obsidian",
      oil: "Patchouli",
      therapyColor: "Deep Crimson",
    },
    {
      key: "sagittarius",
      name: "Sagittarius",
      symbol: "♐",
      dates: "Dec 16 - Jan 14",
      element: "Fire",
      color: "#A29BFE",
      crystal: "Turquoise",
      oil: "Frankincense",
      therapyColor: "Purple",
    },
    {
      key: "capricorn",
      name: "Capricorn",
      symbol: "♑",
      dates: "Jan 15 - Feb 12",
      element: "Earth",
      color: "#636E72",
      crystal: "Garnet",
      oil: "Pine",
      therapyColor: "Dark Green",
    },
    {
      key: "aquarius",
      name: "Aquarius",
      symbol: "♒",
      dates: "Feb 13 - Mar 14",
      element: "Air",
      color: "#74B9FF",
      crystal: "Amethyst",
      oil: "Eucalyptus",
      therapyColor: "Electric Blue",
    },
    {
      key: "pisces",
      name: "Pisces",
      symbol: "♓",
      dates: "Mar 15 - Apr 13",
      element: "Water",
      color: "#81ECEC",
      crystal: "Aquamarine",
      oil: "Jasmine",
      therapyColor: "Sea Green",
    },
  ];

  const themes = {
    cosmic: {
      name: "Cosmic Night",
      gradient: "from-purple-900 via-blue-900 to-black",
      accent: "text-purple-300",
      border: "border-purple-400",
    },
    sunset: {
      name: "Mystic Sunset",
      gradient: "from-pink-500 via-orange-400 to-yellow-400",
      accent: "text-orange-100",
      border: "border-orange-300",
    },
    moonlight: {
      name: "Moonlight",
      gradient: "from-indigo-900 via-purple-800 to-pink-700",
      accent: "text-indigo-200",
      border: "border-indigo-300",
    },
    forest: {
      name: "Mystical Forest",
      gradient: "from-emerald-800 via-teal-700 to-green-900",
      accent: "text-emerald-200",
      border: "border-emerald-400",
    },
    custom: {
      name: "Sign Color",
      gradient: "from-gray-800 to-gray-900",
      accent: "text-gray-200",
      border: "border-gray-400",
    },
  };

  const fonts = {
    elegant: { name: "Elegant", class: "font-serif" },
    modern: { name: "Modern", class: "font-sans" },
    mystical: { name: "Mystical", class: "font-mono tracking-wider" },
  };

  const moonPhases = {
    new: { name: "New Moon", symbol: "🌑", meaning: "New Beginnings" },
    waxing: {
      name: "Waxing Crescent",
      symbol: "🌒",
      meaning: "Growth & Intention",
    },
    first: {
      name: "First Quarter",
      symbol: "🌓",
      meaning: "Decision & Action",
    },
    waxingGibbous: {
      name: "Waxing Gibbous",
      symbol: "🌔",
      meaning: "Refinement",
    },
    full: {
      name: "Full Moon",
      symbol: "🌕",
      meaning: "Manifestation & Release",
    },
    waningGibbous: {
      name: "Waning Gibbous",
      symbol: "🌖",
      meaning: "Gratitude",
    },
    third: { name: "Third Quarter", symbol: "🌗", meaning: "Forgiveness" },
    waning: { name: "Waning Crescent", symbol: "🌘", meaning: "Surrender" },
  };

  const transitPlanets = {
    mercury: {
      name: "Mercury",
      symbol: "☿",
      meaning: "Communication & Travel",
    },
    venus: { name: "Venus", symbol: "♀", meaning: "Love & Beauty" },
    mars: { name: "Mars", symbol: "♂", meaning: "Energy & Action" },
    jupiter: { name: "Jupiter", symbol: "♃", meaning: "Expansion & Growth" },
    saturn: { name: "Saturn", symbol: "♄", meaning: "Structure & Discipline" },
    uranus: { name: "Uranus", symbol: "♅", meaning: "Innovation & Change" },
    neptune: { name: "Neptune", symbol: "♆", meaning: "Dreams & Intuition" },
    pluto: { name: "Pluto", symbol: "♇", meaning: "Transformation" },
  };

  const backgroundPatterns = {
    stars: "constellation pattern",
    geometric: "sacred geometry",
    celestial: "celestial bodies",
  };

  const PlanetIcon = ({ planet, className }) => {
    const planetSymbols = {
      sun: "☉",
      moon: "☽",
      mercury: "☿",
      venus: "♀",
      mars: "♂",
      jupiter: "♃",
      saturn: "♄",
      uranus: "♅",
      neptune: "♆",
      pluto: "♇",
    };

    return (
      <div
        className={`text-white opacity-15 ${className}`}
        style={{ fontSize: "1.5rem" }}
      >
        {planetSymbols[planet]}
      </div>
    );
  };

  const currentSign = zodiacSigns.find((sign) => sign.key === selectedSign);
  const currentSign2 = zodiacSigns.find(
    (sign) => sign.key === compatibilitySign2
  );
  const currentTheme = themes[selectedTheme];
  const currentFont = fonts[selectedFont];
  const currentMoonPhase = moonPhases[moonPhase];
  const currentTransitPlanet = transitPlanets[transitPlanet];

  // Auto-populate recommendations based on selected sign
  React.useEffect(() => {
    if (currentSign && postType === "sign") {
      setCrystalRecommendation(currentSign.crystal);
      setEssentialOil(currentSign.oil);
      setColorTherapy(currentSign.therapyColor);
    }
  }, [selectedSign, postType, currentSign]);

  const getCustomGradient = () => {
    if (selectedTheme === "custom" && currentSign) {
      return `from-gray-900 via-slate-800 to-gray-900`;
    }
    return currentTheme.gradient;
  };

  const handleCopyText = () => {
    let postText = "";
    let hashtags = "#astrology #horoscope #zodiac #AstroloG";

    switch (postType) {
      case "general":
        postText = `${horoscopeText}\n\n${hashtags} #spirituality #cosmic`;
        break;
      case "moon":
        postText = `${currentMoonPhase.symbol} ${currentMoonPhase.name.toUpperCase()} ${currentMoonPhase.symbol}\n${currentMoonPhase.meaning}\n\n${horoscopeText}\n\n${hashtags} #moonphase #${moonPhase}moon #lunar`;
        break;
      case "transit":
        postText = `${currentTransitPlanet.symbol} ${currentTransitPlanet.name.toUpperCase()} TRANSIT ${currentTransitPlanet.symbol}\n${currentTransitPlanet.meaning}\n\n${horoscopeText}\n\n${hashtags} #${transitPlanet}transit #planetary #cosmic`;
        break;
      case "compatibility":
        postText = `${currentSign.symbol} ${currentSign.name.toUpperCase()} ♥ ${currentSign2.symbol} ${currentSign2.name.toUpperCase()}\nLove Compatibility\n\n${horoscopeText}\n\n${hashtags} #compatibility #${currentSign.name.toLowerCase()}${currentSign2.name.toLowerCase()} #loveастrology`;
        break;
      case "ascendant":
        postText = `${currentSign.symbol} ${currentSign.name.toUpperCase()} RISING ${currentSign.symbol}\n\n${horoscopeText}\n\n#rising #${currentSign.name.toLowerCase()} ${hashtags} #risingSign #ascendant`;
        break;
      default: // sign
        postText = `${currentSign.symbol} ${currentSign.name.toUpperCase()} ${currentSign.symbol}\n${currentSign.dates}\n\n${horoscopeText}\n\n#${currentSign.name.toLowerCase()} ${hashtags}`;
    }

    navigator.clipboard.writeText(postText);
  };

  const renderPostContent = () => {
    const baseClasses = `relative z-10 h-full flex flex-col justify-between ${currentFont.class}`;

    switch (postType) {
      case "moon":
        return (
          <div className={baseClasses}>
            <div className="text-center">
              <div className="text-6xl mb-2">{currentMoonPhase.symbol}</div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {currentMoonPhase.name.toUpperCase()}
              </h3>
              <p className={`text-lg ${currentTheme.accent} font-medium`}>
                {currentMoonPhase.meaning}
              </p>
              <div
                className={`w-16 h-0.5 bg-current mx-auto mt-3 ${currentTheme.accent}`}
              ></div>
            </div>
            <div className="flex-1 flex items-center justify-center px-6">
              <p className="text-white text-lg leading-relaxed text-center font-medium">
                {horoscopeText || "Enter your moon phase guidance..."}
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-0.5 bg-current mx-auto mb-3 ${currentTheme.accent}`}
              ></div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Stars className="w-5 h-5" />
                <span className="text-xl font-bold tracking-wider">
                  ASTROLO G
                </span>
                <Stars className="w-5 h-5" />
              </div>
              <p className={`text-sm mt-1 ${currentTheme.accent}`}>
                Your Daily Cosmic Guide
              </p>
            </div>
          </div>
        );

      case "transit":
        return (
          <div className={baseClasses}>
            <div className="text-center">
              <div className="text-6xl mb-2">{currentTransitPlanet.symbol}</div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {currentTransitPlanet.name.toUpperCase()} TRANSIT
              </h3>
              <p className={`text-lg ${currentTheme.accent} font-medium`}>
                {currentTransitPlanet.meaning}
              </p>
              <div
                className={`w-16 h-0.5 bg-current mx-auto mt-3 ${currentTheme.accent}`}
              ></div>
            </div>
            <div className="flex-1 flex items-center justify-center px-6">
              <p className="text-white text-lg leading-relaxed text-center font-medium">
                {horoscopeText || "Enter your planetary transit insights..."}
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-0.5 bg-current mx-auto mb-3 ${currentTheme.accent}`}
              ></div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Stars className="w-5 h-5" />
                <span className="text-xl font-bold tracking-wider">
                  ASTROLO G
                </span>
                <Stars className="w-5 h-5" />
              </div>
              <p className={`text-sm mt-1 ${currentTheme.accent}`}>
                Your Daily Cosmic Guide
              </p>
            </div>
          </div>
        );

      case "compatibility":
        return (
          <div className={baseClasses}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-4xl">{currentSign.symbol}</span>
                <Heart className="w-8 h-8 text-pink-300" />
                <span className="text-4xl">{currentSign2.symbol}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {currentSign.name.toUpperCase()} ♥{" "}
                {currentSign2.name.toUpperCase()}
              </h3>
              <p className={`text-lg ${currentTheme.accent} font-medium`}>
                Love Compatibility
              </p>
              <div
                className={`w-16 h-0.5 bg-current mx-auto mt-3 ${currentTheme.accent}`}
              ></div>
            </div>
            <div className="flex-1 flex items-center justify-center px-6">
              <p className="text-white text-lg leading-relaxed text-center font-medium">
                {horoscopeText || "Enter your compatibility reading..."}
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-0.5 bg-current mx-auto mb-3 ${currentTheme.accent}`}
              ></div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Stars className="w-5 h-5" />
                <span className="text-xl font-bold tracking-wider">
                  ASTROLO G
                </span>
                <Stars className="w-5 h-5" />
              </div>
              <p className={`text-sm mt-1 ${currentTheme.accent}`}>
                Your Daily Cosmic Guide
              </p>
            </div>
          </div>
        );

      case "general":
        return (
          <div className={baseClasses}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Stars className="w-8 h-8 text-white" />
                <Sparkles className="w-8 h-8 text-white" />
                <Moon className="w-8 h-8 text-white" />
              </div>
              <div
                className={`w-16 h-0.5 bg-current mx-auto mb-4 ${currentTheme.accent}`}
              ></div>
            </div>
            <div className="flex-1 flex items-center justify-center px-6">
              <p className="text-white text-xl leading-relaxed text-center font-medium">
                {horoscopeText ||
                  "Enter your astrology content to see the preview..."}
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-0.5 bg-current mx-auto mb-3 ${currentTheme.accent}`}
              ></div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Stars className="w-5 h-5" />
                <span className="text-xl font-bold tracking-wider">
                  ASTROLO G
                </span>
                <Stars className="w-5 h-5" />
              </div>
              <p className={`text-sm mt-1 ${currentTheme.accent}`}>
                Your Daily Cosmic Guide
              </p>
            </div>
          </div>
        );

      default: // sign or ascendant
        return (
          <div className={baseClasses}>
            <div className="text-center">
              <div className="text-6xl mb-2">{currentSign.symbol}</div>
              <h3 className="text-3xl font-bold text-white mb-1">
                {postType === "ascendant"
                  ? `${currentSign.name.toUpperCase()} RISING`
                  : currentSign.name.toUpperCase()}
              </h3>
              {postType !== "ascendant" && (
                <p className={`text-lg ${currentTheme.accent} font-medium`}>
                  {currentSign.dates}
                </p>
              )}
              <div
                className={`w-16 h-0.5 bg-current mx-auto ${postType === "ascendant" ? "mt-4" : "mt-3"} ${currentTheme.accent}`}
              ></div>
            </div>
            <div className="flex-1 flex items-center justify-center px-4">
              <p className="text-white text-lg leading-relaxed text-center font-medium">
                {horoscopeText ||
                  "Enter your horoscope text to see the preview..."}
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-0.5 bg-current mx-auto mb-3 ${currentTheme.accent}`}
              ></div>
              <div className="flex items-center justify-center gap-2 text-white">
                <Stars className="w-5 h-5" />
                <span className="text-xl font-bold tracking-wider">
                  ASTROLO G
                </span>
                <Stars className="w-5 h-5" />
              </div>
              <p className={`text-sm mt-1 ${currentTheme.accent}`}>
                Your Daily Cosmic Guide
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Stars className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Astrolo G</h1>
            <Moon className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-slate-300">
            Create stunning astrology posts for social media
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              Create Your Post
            </h2>

            {/* Post Type Selection */}
            <div>
              <label className="block text-white font-medium mb-3">
                Post Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPostType("sign")}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-xs ${postType === "sign" ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                >
                  <div className="text-xl mb-1">☉</div>
                  <span>Sun Sign</span>
                </button>
                <button
                  onClick={() => setPostType("ascendant")}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-xs ${postType === "ascendant" ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                >
                  <div className="text-xl mb-1">↗</div>
                  <span>Rising</span>
                </button>
                <button
                  onClick={() => setPostType("general")}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-xs ${postType === "general" ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                >
                  <div className="text-xl mb-1">✨</div>
                  <span>General</span>
                </button>
                <button
                  onClick={() => setPostType("moon")}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-xs ${postType === "moon" ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                >
                  <div className="text-xl mb-1">🌙</div>
                  <span>Moon</span>
                </button>
                <button
                  onClick={() => setPostType("transit")}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-xs ${postType === "transit" ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                >
                  <div className="text-xl mb-1">☿</div>
                  <span>Transit</span>
                </button>
                <button
                  onClick={() => setPostType("compatibility")}
                  className={`p-3 rounded-lg border-2 transition-all text-center text-xs ${postType === "compatibility" ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                >
                  <div className="text-xl mb-1">♥</div>
                  <span>Love</span>
                </button>
              </div>
            </div>

            {/* Font Selection */}
            <div>
              <label className="block text-white font-medium mb-3">
                Font Style
              </label>
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(fonts).map(([key, font]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedFont(key)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${selectedFont === key ? "border-purple-400 bg-slate-700 text-white" : "border-slate-600 bg-slate-700/50 hover:border-slate-500 text-slate-300"}`}
                  >
                    <span className={`text-sm ${font.class}`}>{font.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selection */}
            <div>
              <label className="block text-white font-medium mb-3">
                Choose Theme
              </label>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTheme(key)}
                    className={`p-3 rounded-lg border-2 transition-all ${selectedTheme === key ? "border-purple-400 bg-slate-700" : "border-slate-600 bg-slate-700/50 hover:border-slate-500"}`}
                  >
                    <div
                      className={`w-full h-6 rounded mb-2 ${key === "custom" ? "bg-gradient-to-r from-gray-700 to-gray-800" : `bg-gradient-to-r ${theme.gradient}`}`}
                    ></div>
                    <span className="text-white text-sm">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Moon Phase Selection - Show only for moon posts */}
            {postType === "moon" && (
              <div>
                <label className="block text-white font-medium mb-3">
                  Moon Phase
                </label>
                <select
                  value={moonPhase}
                  onChange={(e) => setMoonPhase(e.target.value)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                >
                  {Object.entries(moonPhases).map(([key, phase]) => (
                    <option key={key} value={key}>
                      {phase.symbol} {phase.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Transit Planet Selection - Show only for transit posts */}
            {postType === "transit" && (
              <div>
                <label className="block text-white font-medium mb-3">
                  Transit Planet
                </label>
                <select
                  value={transitPlanet}
                  onChange={(e) => setTransitPlanet(e.target.value)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                >
                  {Object.entries(transitPlanets).map(([key, planet]) => (
                    <option key={key} value={key}>
                      {planet.symbol} {planet.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Zodiac Sign Selection - Hide for General and Moon posts */}
            {!["general", "moon", "transit"].includes(postType) && (
              <div>
                <label className="block text-white font-medium mb-3">
                  {postType === "compatibility"
                    ? "First Sign"
                    : "Select Zodiac Sign"}
                </label>
                <select
                  value={selectedSign}
                  onChange={(e) => setSelectedSign(e.target.value)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                >
                  {zodiacSigns.map((sign) => (
                    <option key={sign.key} value={sign.key}>
                      {sign.symbol} {sign.name} ({sign.dates})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Second Sign for Compatibility */}
            {postType === "compatibility" && (
              <div>
                <label className="block text-white font-medium mb-3">
                  Second Sign
                </label>
                <select
                  value={compatibilitySign2}
                  onChange={(e) => setCompatibilitySign2(e.target.value)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                >
                  {zodiacSigns.map((sign) => (
                    <option key={sign.key} value={sign.key}>
                      {sign.symbol} {sign.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Content Input */}
            <div>
              <label className="block text-white font-medium mb-3">
                {postType === "ascendant"
                  ? "Rising Sign Reading"
                  : postType === "general"
                    ? "Astrology Content"
                    : postType === "moon"
                      ? "Moon Phase Guidance"
                      : postType === "transit"
                        ? "Transit Insights"
                        : postType === "compatibility"
                          ? "Compatibility Reading"
                          : "Horoscope Text"}
              </label>
              <textarea
                value={horoscopeText}
                onChange={(e) => setHoroscopeText(e.target.value)}
                placeholder={
                  postType === "ascendant"
                    ? "Enter your rising sign reading here..."
                    : postType === "general"
                      ? "Enter your general astrology content here..."
                      : postType === "moon"
                        ? "Enter your moon phase guidance here..."
                        : postType === "transit"
                          ? "Enter your planetary transit insights here..."
                          : postType === "compatibility"
                            ? "Enter your compatibility reading here..."
                            : "Enter your horoscope reading here..."
                }
                className="w-full p-4 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-400 focus:outline-none resize-none h-32"
              />
            </div>

            {/* Crystal, Oil, and Color Therapy Recommendations - Show for sign posts */}
            {postType === "sign" && currentSign && (
              <div className="bg-slate-700/50 rounded-lg p-4 space-y-3">
                <h4 className="text-white font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Recommendations for {currentSign.name}
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Crystal:</span>
                    <span className="text-purple-300">
                      {crystalRecommendation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Essential Oil:</span>
                    <span className="text-purple-300">{essentialOil}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Color Therapy:</span>
                    <span className="text-purple-300">{colorTherapy}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCopyText}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy Caption
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Save/Print
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sun className="w-6 h-6 text-yellow-400" />
              Preview
            </h2>

            {/* Social Media Post Preview */}
            <div
              id="social-post"
              className={`relative w-full aspect-square bg-gradient-to-br ${getCustomGradient()} rounded-3xl p-6 overflow-hidden shadow-2xl`}
              style={
                selectedTheme === "custom" && currentSign
                  ? {
                      background: `linear-gradient(135deg, ${currentSign.color}20, ${currentSign.color}10, #1e293b)`,
                    }
                  : {}
              }
            >
              {/* Background decorative elements with planets */}
              <div className="absolute inset-0 opacity-15">
                {/* Planets scattered around */}
                <PlanetIcon planet="sun" className="absolute top-6 right-8" />
                <PlanetIcon
                  planet="moon"
                  className="absolute bottom-6 left-6"
                />
                <PlanetIcon
                  planet="mercury"
                  className="absolute top-16 left-12"
                />
                <PlanetIcon
                  planet="venus"
                  className="absolute top-8 left-1/2 transform -translate-x-1/2"
                />
                <PlanetIcon
                  planet="mars"
                  className="absolute bottom-16 right-12"
                />
                <PlanetIcon
                  planet="jupiter"
                  className="absolute top-1/3 right-6"
                />
                <PlanetIcon
                  planet="saturn"
                  className="absolute bottom-1/3 left-8"
                />
                <PlanetIcon
                  planet="uranus"
                  className="absolute top-1/2 left-4"
                />
                <PlanetIcon
                  planet="neptune"
                  className="absolute bottom-8 right-1/2 transform translate-x-1/2"
                />
                <PlanetIcon
                  planet="pluto"
                  className="absolute top-1/4 right-1/4"
                />

                {/* Sacred geometry patterns */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white opacity-5 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-white opacity-5 transform rotate-45"></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-white opacity-5 transform rotate-12"></div>

                {/* Original decorative elements */}
                <div className="absolute top-4 right-4">
                  <Stars className="w-12 h-12 text-white opacity-20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Moon className="w-8 h-8 text-white opacity-20" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="w-20 h-20 text-white opacity-5" />
                </div>
              </div>

              {/* Content */}
              {renderPostContent()}
            </div>

            {/* Enhanced Instructions */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 space-y-4">
              <h4 className="text-white font-medium mb-2">📸 Post Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="text-purple-300 font-medium mb-2">
                    Visual Enhancements
                  </h5>
                  <ul className="text-slate-300 space-y-1">
                    <li>• 5 gradient themes + custom sign colors</li>
                    <li>• 3 font styles (Elegant, Modern, Mystical)</li>
                    <li>• Sacred geometry patterns</li>
                    <li>• Planetary symbol backdrop</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-300 font-medium mb-2">
                    Content Types
                  </h5>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Sun & Rising signs</li>
                    <li>• Moon phases & meanings</li>
                    <li>• Planetary transits</li>
                    <li>• Love compatibility</li>
                    <li>• General astrology wisdom</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-300 font-medium mb-2">
                    Advanced Features
                  </h5>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Crystal recommendations</li>
                    <li>• Essential oil suggestions</li>
                    <li>• Color therapy guidance</li>
                    <li>• Smart hashtag generation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-purple-300 font-medium mb-2">Usage</h5>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Screenshot the preview square</li>
                    <li>• Copy generated captions</li>
                    <li>• Perfect for Instagram posts</li>
                    <li>• Professional Astrolo G branding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyPostGenerator;
