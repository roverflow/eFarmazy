def userEntity(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "role": user["role"],
        "age": user["age"],
        "address": user["address"],
        "phone": user["phone"],
        "city": user["city"],
        "state": user["state"],
        "zip": user["zip"],
        "verified": user["verified"],
        "password": user["password"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"]
    }


def userResponseEntity(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "role": user["role"],
        "age": user["age"],
        "address": user["address"],
        "phone": user["phone"],
        "city": user["city"],
        "state": user["state"],
        "zip": user["zip"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"]
    }


def embeddedUserResponse(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": user["name"],
        "email": user["email"],
        "age": user["age"],
        "address": user["address"],
        "phone": user["phone"],
        "city": user["city"],
        "state": user["state"],
        "zip": user["zip"],
    }

def entityConv(stash) -> dict:
    return {
        "ProductName" : stash["product_name"],
        "Category" : stash["category"],
        "Score": stash["score"]
    }

def fruit(banana) -> dict:
    return {
        "Location" : banana['location'],
        "Price" : banana['price'],
        'User' : banana['user_id']
    }

def CovEntity(sta) -> dict:
    return [entityConv(lis) for lis in sta]

def userListEntity(users) -> list:
    return [userEntity(user) for user in users]

def listFruit(fru) -> dict:
    return [fruit(anx) for anx in fru]