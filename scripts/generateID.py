import random
import json

def idGenerator(size=6, chars= "ABCDFG123456789"):
    return "".join(random.choice(chars) for _ in range(size))

def createNewId(checkList):
    x = idGenerator()
    hasLetters = any(c.isalpha() for c in x)
    hasNumbers = any(c.isdigit() for c in x)
    while x in checkList or not hasLetters or not hasNumbers or not x[0].isalpha():
        x = idGenerator()
        hasLetters = any(c.isalpha() for c in x)
        hasNumbers = any(c.isdigit() for c in x)
    return x

def main():
    numberOfIds = 10000
    idList = []
    checkList = []
    for i in range(numberOfIds):
        ID = createNewId(checkList)
        idList.append(ID)
        checkList.append(ID)
    return idList

if __name__ == "__main__":
    main()

schemeArray = [
    "gefaess", 
    "ackerbau",
    "grobsystematik",
    "moebel",
    "spitzen",
    "technik_spitzen",
]
schemeUUIDDict = {}

for scheme in schemeArray:
    schemeUUIDDict[scheme] = main()
with open("schemeUUIDDict.json", "w") as f:
    json.dump(schemeUUIDDict, f, indent=4)

