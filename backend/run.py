import uvicorn
import time



if __name__ == "__main__":
    print("Starting server")
    time.sleep(10)
    uvicorn.run("app.main:myapp", host="0.0.0.0", port=8000, reload=True)
