import sys
sys.path.append(r'C:\Users\nk359\AppData\Roaming\Python\Python314\site-packages')
from rembg import remove
from PIL import Image

input_path = 'public/hero-image.png'
output_path = 'public/hero-image.png'

print(f"Opening {input_path}...")
input_image = Image.open(input_path)

print("Removing background... This will download the model on the first run.")
output_image = remove(input_image)

print(f"Saving to {output_path}...")
output_image.save(output_path)
print("Done!")
