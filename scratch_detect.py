from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)
w, h = img.size

# Find navy section by scanning pixels:
navy_y = []
for y in range(h):
    # Sample middle-ish x=265
    r, g, b, *rest = img.getpixel((265, y))
    if r < 25 and 15 < g < 45 and 35 < b < 70:
        navy_y.append(y)

if navy_y:
    print(f"Navy Y: {navy_y[0]} to {navy_y[-1]}")
    navy_top = navy_y[0]
    navy_bottom = navy_y[-1] + 1
else:
    navy_top, navy_bottom = 420, 565

# 1. Logo
logo = img.crop((18, 5, 125, 42))
logo.save("public/images/logo-exact.png")

# 2. Hero Student + Monument:
# Let's crop the hero student and background building
# In the original 530x1024 flyer:
# The hero area is between Y: 10 and Y: 270.
# The student sits between X: 210 and X: 390.
hero_student = img.crop((210, 10, 390, 260))
hero_student.save("public/images/hero-student-exact.png")

# 3. Booklets in What You Get:
booklets = img.crop((0, navy_top, 180, navy_bottom))
booklets.save("public/images/booklets-exact.png")

# 4. Handwriting in What You Get:
handwriting = img.crop((390, navy_top, 530, navy_bottom))
handwriting.save("public/images/handwriting-exact.png")

# 5. Avatars:
# Find avatar circles around Y=620..660
avatar1 = img.crop((26, 624, 63, 661))
avatar1.save("public/images/avatar-aman-exact.png")

avatar2 = img.crop((195, 624, 232, 661))
avatar2.save("public/images/avatar-ritika-exact.png")

avatar3 = img.crop((365, 624, 402, 661))
avatar3.save("public/images/avatar-vivek-exact.png")

print("All exact images cropped successfully!")
