import ast
import json
import requests
from geopy.geocoders import Nominatim

apiKey = "30a81a9a-3827-4f06-b102-dbb8631f67b6" #API Key for AirLabs

nearbyUrl = "https://airlabs.co/api/v9/nearby?"
depUrl = "https://airlabs.co/api/v9/flights?dep_iata="
arrUrl = "https://airlabs.co/api/v9/flights?arr_iata="
airportsUrl = "https://airlabs.co/api/v9/airports?iata_code="
airlineUrl = "https://airlabs.co/api/v9/airlines?iata_code="

#Used for finding coordinates
def findAirports(term, distance):
    try:
        #Gets latitude and latitude data
        geolocator = Nominatim(user_agent="http")
        location = geolocator.geocode(x)
        lat = location.latitude
        long = location.longitude
        
        reqLink = nearbyUrl
        reqLink += ("lat=" + str(lat) + "&lng=" + str(long) + "&distance=" 
                    + str(distance) + "&api_key=" + apiKey)
        r = requests.get(reqLink)
        data = r.json()
        
        if len(data['response']['airports']) == 0: #No airports
            raise Exception("No airports")
        #Returning and dumping data into JSON
        aData = {"search-terms": term, "place": data['response']['cities'][0]['name'],
                 "official-name": location.address, "airports": data['response']['airports']}
        with open("airports.json", "w") as aFile:
            json.dump(aData, aFile)
        return 1 #Indicates that there are airports
    except AttributeError: #Invalid reponse
        return 0
    except Exception:#No airports found
        return 0


#Finds departures
def findFlights(index):
    data = None
    with open("airports.json", "r") as aFile:
        data = json.load(aFile)
    aDict = ast.literal_eval(str(data))
    IATA = aDict['airports'][index]['iata_code'] #Gets iata code
    
    dUrl = depUrl + IATA + "&api_key=" + apiKey #Gets departing flights
    aUrl = arrUrl + IATA + "&api_key=" + apiKey #Gets arriving flights
    
    rD = requests.get(dUrl) #Departures
    rA = requests.get(aUrl) #Arrivals
    dData = rD.json()
    aData = rA.json()
    
    flights = {"departures": dData['response'], 'arrivals': aData['response']}
    with open("flights.json", "w") as fFile:
        json.dump(flights, fFile)
    
    if len(dData['response']) == 0 and len(aData['response']) == 0: #No flights going in or out
        return 0
    elif len(dData['response'])== 0: #No departures
        return 1
    elif len(aData['response']) == 0: #No arrivals
        return 2
    else:
        return 3 #Has departures and arrivals


#Testing
x = input("Enter a place: ")  
y = findAirports(x, 50)
print(y)
a = int(input("Enter airport: "))
print(findFlights(a))


