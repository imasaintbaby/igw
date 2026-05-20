from http.server import BaseHTTPRequestHandler
import json

# IMPORT YOUR SCRIPT HERE
from scripts.my_script import run_script


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # OPTIONAL:
            # Replace this with your own parameters
            result = run_script("Vercel User")

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()

            self.wfile.write(json.dumps(result).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()

            self.wfile.write(json.dumps({
                "error": str(e)
            }).encode())
