from celery import Celery

app = Celery('cworker',broker='redis://localhost:6379/', backend='mongodb://newuser:password123@localhost:27017/')

@app.task(name='health_check')
def health_check():
    return "OK, I'm alive!."


@app.task(name='register_stash')
def register_stash(yexpected_price: int,yproduct_name: str, yproduct_image: str, category: str):
    return f"Stash registered successfully"