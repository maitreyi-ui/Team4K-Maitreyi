import requests
url = 'http://127.0.0.1:8000/upload/'
with open('test_upload.txt','rb') as f:
    files = {'files': ('test_upload.txt', f)}
    r = requests.post(url, files=files)
    print('STATUS', r.status_code)
    try:
        print(r.json())
    except Exception:
        print(r.text)
