import sys,os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(sys.path.insert(0, os.path.join(BASE_DIR, 'apps')))