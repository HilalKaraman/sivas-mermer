from PIL import Image
import os

def create_og_image():
    # Settings
    logo_path = "public/icons/android-chrome-512x512.png"
    output_path = "public/og-image.png"
    canvas_size = (1200, 630)
    bg_color = (255, 255, 255)  # White background

    try:
        # Load logo
        if not os.path.exists(logo_path):
            print(f"Error: Logo file not found at {logo_path}")
            return

        logo = Image.open(logo_path).convert("RGBA")
        
        # Create canvas
        canvas = Image.new("RGBA", canvas_size, bg_color)
        
        # Calculate centering position
        # We'll keep the logo at its original size (512x512) or scale it if needed.
        # 512 fits well within 630 height.
        
        # Center coordinates
        x = (canvas_size[0] - logo.width) // 2
        y = (canvas_size[1] - logo.height) // 2
        
        # Paste logo
        canvas.paste(logo, (x, y), logo)
        
        # Save
        canvas.save(output_path, "PNG")
        print(f"Successfully created OG image at {output_path}")
        
    except Exception as e:
        print(f"Error creating image: {e}")

if __name__ == "__main__":
    create_og_image()
