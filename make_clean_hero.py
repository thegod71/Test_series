from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)

# Let's inspect the exact pixel bounds where the student + monument is:
# Monument top starts at y=15, student desk ends at y=250.
# Left boundary: to avoid headline text "Practice Today", let's start at x=230.
# Right boundary: the form card border starts at x=376. So let's end at x=375!
clean_student = img.crop((230, 15, 375, 255))
w, h = clean_student.size

# Let's upscale with Lanczos 2.5x:
target_w, target_h = int(w * 2.5), int(h * 2.5)
clean_student_upscaled = clean_student.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Create an alpha channel that smoothly fades the left, right, top, and bottom edges into transparency
# so it blends perfectly into the hero background:
clean_rgba = clean_student_upscaled.convert("RGBA")
pixels = clean_rgba.load()

for x in range(target_w):
    for y in range(target_h):
        r, g, b, a = pixels[x, y]
        
        # Calculate fade distance from edges:
        fade_left = min(1.0, x / 40.0)
        fade_right = min(1.0, (target_w - 1 - x) / 30.0)
        fade_top = min(1.0, y / 30.0)
        fade_bottom = min(1.0, (target_h - 1 - y) / 40.0)
        
        alpha_mult = fade_left * fade_right * fade_top * fade_bottom
        new_a = int(a * alpha_mult)
        pixels[x, y] = (r, g, b, new_a)

clean_rgba.save("public/images/hero-student-clean.png")
print("Clean alpha-feathered hero student saved successfully!")
