# Property Brochures

This folder contains PDF brochures for each property. The brochures are displayed as previews in the PropertyInfo component and can be downloaded by users.

## File Organization

Each property should have its own PDF brochure file named according to the property slug:

```
brochures/
├── bella-casa-brochure.pdf
├── valentino-brochure.pdf
├── majoris-brochure.pdf
├── massimo-brochure.pdf
└── torrance-brochure.pdf
```

## Adding New Brochures

1. **Add PDF file**: Place the PDF file in this folder with the naming convention: `{property-slug}-brochure.pdf`
2. **Update properties.js**: Make sure the brochure URL in `/src/data/properties.js` matches the file name
3. **File size**: Keep PDF files under 50MB for optimal loading performance

## Features

- **PDF Preview**:
  - **Desktop**: Shows only the first page as a preview using iframe
  - **Mobile**: Shows PDF icon and download interface (iframe not supported on mobile)
- **Download**: Users can download the full PDF by clicking the download button
- **Error Handling**: If a PDF doesn't exist or fails to load, the Brochure tab is hidden
- **Responsive**: Adaptive experience for desktop and mobile devices
- **Read-Only Preview**: Desktop users cannot scroll or interact with the preview

## Current Files

- ✅ `bella-casa-brochure.pdf` - Available
- ❌ `valentino-brochure.pdf` - Missing
- ❌ `majoris-brochure.pdf` - Missing
- ❌ `massimo-brochure.pdf` - Missing
- ❌ `torrance-brochure.pdf` - Missing

## Notes

- Only properties with existing PDF files will show the Brochure tab
- **Desktop**: PDF preview shows only the first page with disabled toolbar, navigation, and scrolling
- **Mobile**: Shows attractive PDF icon interface due to mobile browser limitations with PDF iframes
- Preview is read-only - desktop users cannot interact with it (pointer events disabled)
- Fallback error handling shows download button if preview fails
- Full PDF can be downloaded using the download button on both desktop and mobile
