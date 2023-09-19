database = [
    ["aakash", "hello@11", 0], 
    ["abhinav", "abhinav@21", 0], 
    ["snehal", "snehal@31", 0],
    ["harshita", "harshita@41", 0] 
]

def login(username, password):
    for user_detail in database:
        if user_detail[0] == username and user_detail[1] == password:
            user_detail[2] = 1
            print("Login Successfull")
            return user_detail
    print("Login Failed")

def logout(username):
    for user_detail in database:
         if user_detail[0] == username:
            user_detail[2] = 0
            return user_detail

# testcase 
user_detail = login("aakash", "hello@11") 
print("Status : ", user_detail[2])
    
user_detail = logout("aakash") 
print("Status : ", user_detail[2])