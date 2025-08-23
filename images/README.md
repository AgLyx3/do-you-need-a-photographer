# Images Folder

This folder contains your portfolio media organized by category.

## Folder Structure

### Photography
- `photography/stage/` - Stage performance photos (800x1000px recommended)
- `photography/event/` - Event photography (800x1000px recommended)
- `photography/portrait/` - Portrait/studio photos (800x1000px recommended)

### Videography
- `videography/` - Video content and thumbnails (16:9 aspect ratio recommended)

## Image Guidelines

- **Photography sizes**: 
  - Portrait orientation: 800x1000 pixels (4:5 aspect ratio)
  - Landscape orientation: 1000x800 pixels (5:4 aspect ratio)
- **Video thumbnail sizes**: 800x450 pixels (16:9 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB for optimal loading
- **Naming**: Use descriptive names like `stage-performance-01.jpg`

## Adding Media to Your Portfolio

1. Place your images in the appropriate folder based on category
2. Optimize images before adding:
   - Resize to recommended dimensions
   - Compress to reduce file size
   - Use descriptive file names
3. Update the HTML file to reference your actual images:

```html
<!-- Example for stage photography -->
<img src="images/photography/stage/stage-performance-01.jpg" alt="Stage Performance at Concert Hall" class="object-cover w-full h-full">
```