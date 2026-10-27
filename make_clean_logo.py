from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)

# Let's crop the logo exactly:
# Logo spans from x=20 to x=115, y=7 to y=38
logo = img.crop((20, 7, 115, 38))
logo_upscaled = logo.resize((logo.width * 3, logo.height * 3), Image.Resampling.LANCZOS)

# Ensure white background is clean
logo_rgba = logo_upscaled.convert("RGBA")
pixels = logo_rgba.load()
w, h = logo_rgba.size

for x in range(w):
    for y in range(h):
        r, g, b, a = pixels[x, y]
        # If nearly pure white, make transparent so it blends on any navbar bg
        if r > 240 and g > 240 and b > 240:
            pixels[x, y] = (255, 255, 255, 0)

logo_rgba.save("public/images/logo-exact.png")
print("Logo saved with transparent background!")
