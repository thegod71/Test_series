from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)

# 1. Exact Hero Student with monument:
hero_student = img.crop((215, 12, 385, 262))
# Let's upscale it 2x with Lanczos for sharp crisp rendering on retina displays:
hero_student_2x = hero_student.resize((hero_student.width * 3, hero_student.height * 3), Image.Resampling.LANCZOS)
hero_student_2x.save("public/images/hero-student-exact.png")

# 2. Exact Dhyeya IAS Logo:
# In the original image: top-left (15, 5, 125, 42)
logo = img.crop((18, 5, 122, 42))
logo_2x = logo.resize((logo.width * 3, logo.height * 3), Image.Resampling.LANCZOS)
logo_2x.save("public/images/logo-exact.png")

# 3. Exact Booklets in "What You Get":
# From y=428 to y=580, x=0 to x=185
booklets = img.crop((0, 428, 185, 580))
booklets_2x = booklets.resize((booklets.width * 2, booklets.height * 2), Image.Resampling.LANCZOS)
booklets_2x.save("public/images/booklets-exact.png")

# 4. Exact Handwriting in "What You Get":
# From y=428 to y=580, x=385 to x=530
handwriting = img.crop((385, 428, 530, 580))
handwriting_2x = handwriting.resize((handwriting.width * 2, handwriting.height * 2), Image.Resampling.LANCZOS)
handwriting_2x.save("public/images/handwriting-exact.png")

# 5. Exact Avatars in "Trusted by Aspirants":
# Let's find exact coordinates of the 3 circle avatars:
avatar_aman = img.crop((26, 622, 64, 660))
avatar_aman_2x = avatar_aman.resize((160, 160), Image.Resampling.LANCZOS)
avatar_aman_2x.save("public/images/avatar-aman-exact.png")

avatar_ritika = img.crop((195, 622, 233, 660))
avatar_ritika_2x = avatar_ritika.resize((160, 160), Image.Resampling.LANCZOS)
avatar_ritika_2x.save("public/images/avatar-ritika-exact.png")

avatar_vivek = img.crop((365, 622, 403, 660))
avatar_vivek_2x = avatar_vivek.resize((160, 160), Image.Resampling.LANCZOS)
avatar_vivek_2x.save("public/images/avatar-vivek-exact.png")

print("All exact images cropped and upscaled successfully!")
