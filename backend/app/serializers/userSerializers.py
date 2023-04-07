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
    }


def userListEntity(users) -> list:
    return [userEntity(user) for user in users]

