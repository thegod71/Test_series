from PIL import Image

img = Image.open("public/images/hero-student-exact.png")
print("Dimensions:", img.size)

# Let's inspect the boundaries of the student in the original flyer:
# Flyer width: 530, height: 1024
# The student:
# Headline ends around x=215
# Form starts around x=382 (Form is at x=375..510)
# So between x=220 and x=380 is the unobstructed student and monument!
# Let's check if there are any form artifacts or text artifacts on the edges:
print("Left col sample:", [img.getpixel((0, y)) for y in range(0, img.height, 100)])
print("Right col sample:", [img.getpixel((img.width - 1, y)) for y in range(0, img.height, 100)])
