from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)

# Let's check color of (50, y) from y=350 to y=650:
for y in range(380, 600, 10):
    pix = img.getpixel((50, y))
    print(f"y={y}: {pix}")
