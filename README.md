# Machine Learning Model

## Description of the analysis phase of the project

For the first statistical analysis the sell price of the Real Estate properties needed to be numeric to get the mean. After we have the mean, we label the properties of higher price than the mean as high price and if it is lower than the mean as medium price.

For the first analysis we are applying a Balanced Random Forest Classifier. The accuracy of this model was of 83.6%, in determining to which category the property belongs depending on its characteristics. 

The most relevant feature of the property to determine its category was the Kitchen Quality with 7% of weight and the Full bathrooms above grade with 3.9% of weight.

## Description of the communication protocols

To connect the database to the machine learning model we are going to use the library SQLAlchemy and sqlite3.  The first step is to import the library to the file we are working. For the case of the sqlite3, we start by connecting to the database and saving those instructions in an object. In this example we are using the variable “conn” to connect to the database called 'db2_w2tables.sqlite' using the method connect of the sqlite3 library. Here is the code:

  conn = sqlite3.connect('db2_w2tables.sqlite')
  
Then we use the the cursor method to navigate throw the database we just connected to, and save it to an object, in this case it is called c. Here is the code:

c = conn.cursor()

When we want to make queries or retrieve the data from the database, we use the method .execute on the object we saved the cursor. For example, to get the names of the tables we use the code:

c.execute("SELECT name FROM sqlite_master WHERE type='table';")

print(c.fetchall())
