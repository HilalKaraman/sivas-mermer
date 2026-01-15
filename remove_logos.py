#!/usr/bin/env python3
"""
Script to remove Gemini logo from bottom-right corner of PNG images.
Covers the logo area with the average color of the surrounding pixels.
"""

from PIL import Image
import os
import glob

def remove_logo(image_path, logo_width=120, logo_height=40):
    """
    Cover the bottom-right corner of an image with the average color
    of the pixels just above/left of the logo area.
    """
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        # Define the logo area (bottom-right corner)
        logo_x = width - logo_width
        logo_y = height - logo_height
        
        # Sample area just above and to the left of the logo to get average color
        sample_x = max(0, logo_x - 20)
        sample_y = max(0, logo_y - 20)
        sample_region = img.crop((sample_x, sample_y, logo_x, logo_y))
        
        # Calculate average color
        pixels = list(sample_region.getdata())
        if pixels:
            if img.mode == 'RGBA':
                avg_r = sum(p[0] for p in pixels) // len(pixels)
                avg_g = sum(p[1] for p in pixels) // len(pixels)
                avg_b = sum(p[2] for p in pixels) // len(pixels)
                avg_a = sum(p[3] for p in pixels) // len(pixels)
                avg_color = (avg_r, avg_g, avg_b, avg_a)
            else:
                avg_r = sum(p[0] for p in pixels) // len(pixels)
                avg_g = sum(p[1] for p in pixels) // len(pixels)
                avg_b = sum(p[2] for p in pixels) // len(pixels)
                avg_color = (avg_r, avg_g, avg_b)
        else:
            avg_color = (255, 255, 255, 255) if img.mode == 'RGBA' else (255, 255, 255)
        
        # Create a rectangle to cover the logo
        from PIL import ImageDraw
        draw = ImageDraw.Draw(img)
        draw.rectangle([logo_x, logo_y, width, height], fill=avg_color)
        
        # Save the modified image
        img.save(image_path, 'PNG')
        print(f"✓ Processed: {os.path.basename(image_path)}")
        return True
    except Exception as e:
        print(f"✗ Error processing {image_path}: {e}")
        return False

def main():
    # Get all PNG files in the public folder
    public_dir = "public"
    png_files = glob.glob(os.path.join(public_dir, "*.png"))
    
    print(f"Found {len(png_files)} PNG files to process...\n")
    
    success = 0
    failed = 0
    
    for png_file in png_files:
        if remove_logo(png_file):
            success += 1
        else:
            failed += 1
    
    print(f"\nDone! Processed: {success}, Failed: {failed}")

if __name__ == "__main__":
    main()
