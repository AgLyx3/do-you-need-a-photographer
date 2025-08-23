# Portrait Photography Portfolio Website

A beautiful, minimalist portfolio website designed specifically for portrait photographers. Features a clean black and white aesthetic with smooth animations and responsive design.

## Features

- **Single Page Design**: Clean, organized layout with smooth scrolling navigation
- **Profile Section**: Professional introduction with experience highlights and contact information
- **Gallery Section**: Filterable portfolio with studio and stage portrait categories
- **Responsive Design**: Optimized for all device sizes
- **Modern Animations**: Subtle hover effects and smooth transitions
- **Black & White Theme**: Sophisticated, timeless aesthetic

## File Structure

```
photography-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

- **Profile Photo**: Replace the placeholder div with your actual photo
- **Name**: Change "Your Name" to your actual name
- **Description**: Update the bio text to match your experience
- **Experience**: Modify the experience grid items
- **Contact Info**: Update email, phone, and location

### 2. Adding Your Photos
Replace the placeholder divs in the gallery section:

```html
<!-- Replace this placeholder -->
<div class="image-placeholder gallery-img">
    <span>Studio Portrait 1</span>
</div>

<!-- With your actual image -->
<img src="path/to/your/image.jpg" alt="Description" class="gallery-img">
```

### 3. Photo Categories
Each gallery item has a `data-category` attribute:
- `studio` - for studio portraits
- `stage` - for on-stage/performance portraits

Add more categories by:
1. Adding new filter buttons
2. Creating gallery items with corresponding `data-category` values
3. Updating the JavaScript filtering logic

### 4. Styling Customization
Modify `styles.css` to adjust:
- Colors (currently black and white theme)
- Typography (using Playfair Display and Inter fonts)
- Spacing and layout
- Animation timings

## Getting Started

1. **Open the website**: Double-click `index.html` or open it in a web browser
2. **Customize content**: Edit the HTML file with your information
3. **Add your photos**: Replace placeholder divs with actual image tags
4. **Test responsiveness**: Resize your browser to ensure mobile compatibility

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Tips

- Optimize your images before adding them (recommended: 800x600px for gallery)
- Use WebP format for better compression
- Keep image file sizes under 500KB for optimal loading

## Customization Examples

### Adding a New Category
```html
<!-- Add filter button -->
<button class="filter-btn" data-filter="outdoor">Outdoor</button>

<!-- Add gallery items -->
<div class="gallery-item" data-category="outdoor">
    <img src="outdoor-portrait.jpg" alt="Outdoor Portrait" class="gallery-img">
    <div class="gallery-overlay">
        <h3>Outdoor Portrait</h3>
        <p>Natural lighting, outdoor settings</p>
    </div>
</div>
```

### Changing the Color Scheme
```css
/* In styles.css, replace black/white with your colors */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #ecf0f1;
    --accent-color: #e74c3c;
}
```

## Support

This portfolio template is designed to be simple and easy to customize. If you need help with specific customizations or have questions about the code structure, feel free to modify the files as needed.

## License

Feel free to use and modify this template for your personal or commercial photography portfolio. 