from PIL import Image

src_path = "/Users/gauravsingh/.gemini/antigravity-ide/brain/17b7b429-46e9-44e8-8f88-c174de055f17/.user_uploaded/media_1792754684479.png"
img = Image.open(src_path)

# Let's crop booklets with precision:
# In the original flyer:
# Navy section is y=428 to y=575
# Booklets are on the left: x=5 to x=175
booklets = img.crop((0, 428, 175, 575))
booklets_upscaled = booklets.resize((booklets.width * 2, booklets.height * 2), Image.Resampling.LANCZOS)
booklets_upscaled.save("public/images/booklets-exact.png")

# Handwriting on the right:
# In the flyer: x=395 to x=530, y=428 to y=575
handwriting = img.crop((395, 428, 530, 575))
handwriting_upscaled = handwriting.resize((handwriting.width * 2, handwriting.height * 2), Image.Resampling.LANCZOS)
handwriting_upscaled.save("public/images/handwriting-exact.png")

print("Booklets and handwriting cropped with exact precision!")
