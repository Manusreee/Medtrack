from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="MediTrack API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

medicines = []

@app.get("/")
def home():
    return {"message": "MediTrack API is running"}

@app.get("/medicines")
def get_medicines():
    return medicines

@app.post("/medicines")
def add_medicine(medicine: dict):
    medicines.append(medicine)
    return {"message": "Medicine added", "medicine": medicine}

@app.delete("/medicines/{name}")
def delete_medicine(name: str):
    global medicines
    medicines = [m for m in medicines if m["name"] != name]
    return {"message": "Medicine deleted"}