import os
from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
out_dir = "/Users/gauravsingh/Documents/Antigravity/Landing_page_prayagraj/public/images/extracted"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_path)
w, h = img.size
print(f"Source size: {w}x{h}")

# Let's inspect sections and save test crops
# 1. Full Hero graphic (student + monument):
# In 530x1024:
# Hero student with clock tower:
# X spans roughly from 210 to 450, Y spans from 10 to 260
hero_student = img.crop((215, 10, 420, 260))
hero_student.save(os.path.join(out_dir, "test_hero_student.png"))

# 2. Logo:
logo = img.crop((18, 5, 135, 42))
logo.save(os.path.join(out_dir, "test_logo.png"))

# 3. What You Get - Booklets (left of navy section):
booklets = img.crop((0, 420, 185, 565))
booklets.save(os.path.join(out_dir, "test_booklets.png"))

# 4. What You Get - Handwriting (right of navy section):
handwriting = img.crop((380, 420, 530, 565))
handwriting.save(os.path.join(out_dir, "test_handwriting.png"))

# 5. Avatars:
# Aman Singh avatar:
avatar_aman = img.crop((23, 620, 68, 665))
avatar_aman.save(os.path.join(out_dir, "test_avatar_aman.png"))

# Ritika Sharma avatar:
avatar_ritika = img.crop((190, 620, 235, 665))
avatar_ritika.save(os.path.join(out_dir, "test_avatar_ritika.png"))

# Vivek Verma avatar:
avatar_vivek = img.crop((360, 620, 405, 665))
avatar_vivek.save(os.path.join(out_dir, "test_avatar_vivek.png"))

print("Test crops saved.")
