import os
import shutil

src_dir = r"C:\Users\Hp\Desktop\PROJECTS\ADV\LAKSHYA AI\LAKSHYA-AI\scratch\images"
# Wait, I found the images in C:\Users\Hp\.gemini\antigravity\scratch\IMAGES earlier.
# The user said they made a folder in "scratch". 
# Metadata says Conversation ID: f21adcbe-6924-48b2-9bec-3bdd4ca82cd1
# GUIDELINES say scratch is in <appDataDir>\brain\<conversation-id>/scratch/
# BUT I found them in C:\Users\Hp\.gemini\antigravity\scratch\IMAGES.

src_dir = r"C:\Users\Hp\.gemini\antigravity\scratch\IMAGES"
dst_dir = r"c:\Users\Hp\Desktop\PROJECTS\ADV\LAKSHYA AI\LAKSHYA-AI\public\images\motivational"

if not os.path.exists(dst_dir):
    os.makedirs(dst_dir)

files = os.listdir(src_dir)
rename_map = {
    "24 Beautiful Pictures From IMA and OTA Gaya Passing Out Parade Will Make You Proud.jpg": "ima-ota-parade.jpg",
    "ADG PI - INDIAN ARMY on X.jpg": "army-adg-pi.jpg",
    "Aviones Militares_.jpg": "air-force-planes.jpg",
    "Heavy snow and fires_ the weekend's top photos.jpg": "army-snow.jpg",
    "June 4-6, 2011 - The Battle Of Gewi Ridge takes place where a platoon of U_S soldiers air-assaulted the mountain ridge of Gewi (Kunar province) for over-watch of a major re-supply convoy_.jpg": "battle-gewi-ridge.jpg",
    "download (1).jpg": "officer-1.jpg",
    "download (2).jpg": "officer-2.jpg",
    "download (3).jpg": "officer-3.jpg",
    "download.jpg": "officer-4.jpg",
    "en la cumbre, los mejores.jpg": "officer-summit.jpg",
    "𝐁𝐏𝐅𝐑𝐎𝐍 🐍🔪.jpg": "special-forces.jpg"
}

for f in files:
    new_name = rename_map.get(f, f)
    shutil.copy2(os.path.join(src_dir, f), os.path.join(dst_dir, new_name))
    print(f"Copied {f} to {new_name}")
