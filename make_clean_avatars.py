from PIL import Image, ImageDraw

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)

# Let's inspect coordinates of the avatars:
# Aman Singh avatar:
# In the original flyer, the avatar is a circle:
# Center is around (45, 642), radius ~ 19 pixels: (26, 623) to (64, 661)
avatar1 = img.crop((27, 624, 64, 661))
avatar1_up = avatar1.resize((160, 160), Image.Resampling.LANCZOS)
avatar1_up.save("public/images/avatar-aman-exact.png")

# Ritika Sharma avatar:
# Center around (214, 642): (195, 624) to (233, 661)
avatar2 = img.crop((195, 624, 233, 661))
avatar2_up = avatar2.resize((160, 160), Image.Resampling.LANCZOS)
avatar2_up.save("public/images/avatar-ritika-exact.png")

# Vivek Verma avatar:
# Center around (383, 642): (365, 624) to (403, 661)
avatar3 = img.crop((365, 624, 403, 661))
avatar3_up = avatar3.resize((160, 160), Image.Resampling.LANCZOS)
avatar3_up.save("public/images/avatar-vivek-exact.png")

print("All 3 student avatars extracted with exact fidelity!")
