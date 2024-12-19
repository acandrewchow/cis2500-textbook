import json
import sys
import os

def convert_c_to_json(file_path):
    try:
        with open(file_path, 'r') as file:
            c_code = file.read()

        json_payload = {
            "code": c_code
        }
        return json_payload
    except FileNotFoundError:
        print("Error: The specified .c file was not found.")
        sys.exit(1)
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 convert.py <path_to_c_file>")
        sys.exit(1)

    file_path = sys.argv[1]

    file_name = os.path.splitext(os.path.basename(file_path))[0]
    json_file_name = f"{file_name}.json"

    json_output = convert_c_to_json(file_path)
    try:
        with open(json_file_name, 'w') as json_file:
            json.dump(json_output, json_file, indent=4)
        print(f"JSON output successfully written to {json_file_name}")
    except Exception as e:
        print(f"Error writing to JSON file: {str(e)}")