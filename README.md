# House Pricing Predictor
## Authors
- Rafael
- Yesenia
- Lydia 

## Selected topic

In this project we are developing a machine learning algorithm. The target variable will be the price of an asset, and the features to train it will be the characteristics of the asset. This algorithm can be used for price prediction of any asset, but for our purpose, will use it for predicting the price of real state based on its characteristics. 

## Reasons for choosing the topic

We selected to apply it to real Estate because of the availability of reliable information, and the importance of the housing market for the economy. When looking for a house, it is not easy to know if the house that you are interested in investing in is worth it. Also, there is a debate about whether or not there are bubbles in these assets, so our algorithm can help us have an informed opinion in the topic. 


## Outline of the project
The project can be divided in the following stages:
•	Data Preprocessing
•	Data Storage
•	Data Retrieving
•	Machine Learning 
•	Dashboard


![Outline of the project](https://user-images.githubusercontent.com/96758511/172086634-d59b14e3-1128-4275-8fe7-9032493721b1.png)



## Description of data source

In a search for information that we can use to train our machine learning algorithm we found some government sources as well Kaggle, Web scraping is also being considered, but the data reported is not very consistent and the policy of web scraping friendly or not represent a barrier to get the data. Kaggle lets its datasets being used for educational purpose, so we are covered in that aspect.  

The data set we are considering to use to train the machine learning model has 1460 data points, and is according to the requirement of 1000 data points. It has 81 columns from which 1 would be the target, the sale price, and the remaining 80 are potential features. 
Some of the features are categorical variables and other continuous. From a data set exploration, we can see that there are missing values in some rows as well as NA, this will be handled in the preprocessing stage. 

It is a challenging and sufficient dataset for our purpose. 


## Questions to answer with the data

The target variable of our Machine Learning Algorithm would be the sale price of a Real Estate asset. The features that would be input for the model would be the characteristics of the property, like the living area above ground, the number of rooms, bathrooms, quality of materials, as well as other characteristics of the surroundings. 
Other questions that can be answered from this model is which variables account for a higher prediction weight, and which ones are neglectable for this analysis. 



## Description of the communication protocols
To connect the database to the machine learning model we are going to use the library SQLAlchemy and sqlite3.  The first step is to import the library to the file we are working. For the case of the sqlite3, we start by connecting to the database and saving those instructions in an object. In this example we are using the variable “conn” to connect to the database called 'db2_w2tables.sqlite' using the method connect of the sqlite3 library. Here is the code:
```
conn = sqlite3.connect('db2_w2tables.sqlite')
```
Then we use the the cursor method to navigate throw the database we just connected to, and save it to an object, in this case it is called c. Here is the code:
```
c = conn.cursor()
```
When we want to make queries or retrieve the data from the database, we use the method .execute on the object we saved the cursor. For example, to get the names of the tables we use the code:
```
c.execute("SELECT name FROM sqlite_master WHERE type='table';")

print(c.fetchall())
```

After creating the sqlite file, we connect this database in JavaScript to add functionality to the webpage, a style.css to add design to our webpage and an index.html to display the view and add the visual part of the page.  

# Database


## Description of the data 

The data set we are considering to use to train the machine learning model has 1460 data points, and is according to the requirement of 1000 data points. It has 81 columns from which 1 would be the target, the sale price, and the remaining 80 are potential features. Some of the features are categorical variables and other continuous. From a data set exploration, we can see that there are missing values in some rows as well as NA, this will be handled in the preprocessing stage.

## Description of the data exploration phase of the project

The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.
The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

## Database selection 

The amount of data we are using for this project is not very large. That’s why the database we are using for this project is SQLite. This database system covers all our needs and the large number of libraries for Python makes its use very efficient. 


## Database Integration
The Database stores the data after it has been cleaned and transformed. The data is stored in two tables, for convenience in the fusion they were called table_1 and table_2. The database was created using the library SQLite3 and after the data is saved, it is retrieved using SQLAlquemy and the fusion is done with this library.
