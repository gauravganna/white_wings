# Property Images Organization Guide

## 📁 Folder Structure

Each property has its own folder with the following naming convention:

```
properties/
├── bella-casa/
│   ├── main.png          (Main featured image)
│   ├── gallery-1.png     (Additional image 1)
│   ├── gallery-2.png     (Additional image 2)
│   ├── gallery-3.png     (Additional image 3)
│   └── gallery-4.png     (Additional image 4)
├── valentino/
│   ├── main.png
│   ├── gallery-1.png
│   └── ...
└── majoris/
    ├── main.png
    ├── gallery-1.png
    └── ...
```

## 🚀 **NEW: Automatic Image Loading**

**Images are now automatically discovered from property folders!**

- **No need to update code** when adding/removing images
- **Just add images to the folder** and they'll appear automatically
- **Supports multiple formats**: .jpg, .jpeg, .png, .webp

## 📝 Instructions for Non-Technical Users

### Adding Images to Existing Property:

1. Navigate to the property folder (e.g., `properties/bella-casa/`)
2. Add images following the naming convention
3. **That's it!** Images will automatically appear on the website

### Adding a New Property:

1. Create a new folder with the property slug name (e.g., `properties/new-property/`)
2. Add images following the naming convention
3. Update `/src/data/properties.js` to include the new property details
4. **Images will be automatically loaded** from the folder

### Supported Image Names:

The system automatically looks for these image names:

- **`main.png/jpg`** - Primary featured image (always shows first)
- **`gallery-1.png/jpg`** to **`gallery-10.png/jpg`** - Gallery images
- **`exterior-1.png/jpg`** to **`exterior-3.png/jpg`** - Exterior views
- **`interior-1.png/jpg`** to **`interior-3.png/jpg`** - Interior views
- **`amenities-1.png/jpg`** to **`amenities-3.png/jpg`** - Amenity images
- **`lobby.png/jpg`**, **`entrance.png/jpg`**, **`facade.png/jpg`** - Specific areas
- **`view-1.png/jpg`**, **`view-2.png/jpg`** - Views from property

### Image Requirements:

- **Format**: JPG, JPEG, PNG, or WebP
- **Size**: Recommended minimum 1200px width for best quality
- **Naming**: Use lowercase with hyphens (e.g., `gallery-1.png`)
- **Main Image**: Always name the primary image as `main.png` or `main.jpg`

### Image Order:

- **`main.png/jpg`** always appears first (featured image)
- **Gallery images** appear in numerical order (gallery-1, gallery-2, etc.)
- **Other images** appear in alphabetical order

## ✅ Benefits of Automatic Loading:

1. **No Code Changes**: Add images without touching any code files
2. **Flexible Naming**: Supports multiple naming conventions
3. **Multiple Formats**: Works with various image formats
4. **Easy Management**: Just organize files in folders
5. **Error Safe**: Missing images are automatically skipped

## 🔧 Technical Notes

- Images are automatically discovered using `/src/utils/imageLoader.js`
- The system tries common naming patterns and file extensions
- Properties use a `getter` function to dynamically load images
- Missing images are gracefully handled (no errors)
