from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.routers import auth, user

myapp = FastAPI()

origins = ["*"]

myapp.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


myapp.include_router(auth.router, tags=['Auth'], prefix='/api/auth')
myapp.include_router(user.router, tags=['Users'], prefix='/api/users')


@myapp.get("/api/healthchecker")
def root():
    return {"message": "Welcome to FastAPI with MongoDB"}


@myapp.get("/")
def myroot():
    return {"Farmapi" : "This is the Farm API"}