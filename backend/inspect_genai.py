import importlib
import traceback

modules = ['google.genai', 'google.generativeai']
for m in modules:
    try:
        mod = importlib.import_module(m)
        print(f"Module imported: {m}")
        print('HAS GenerativeModel:', hasattr(mod, 'GenerativeModel'))
        print('HAS generate_text:', hasattr(mod, 'generate_text'))
        print('HAS Client:', hasattr(mod, 'Client'))
        # show a short dir
        print('dir sample:', [n for n in dir(mod) if not n.startswith('_')][:40])
    except Exception as e:
        print(f"Failed to import {m}: {e}")
        traceback.print_exc()
