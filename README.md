# Machine Learning Model

## Description of the analysis phase of the project

For the first statistical analysis the sell price of the Real Estate properties needed to be numeric to get the mean. After we have the mean, we label the properties of higher price than the mean as high price and if it is lower than the mean as medium price.

For the first analysis we are applying a Balanced Random Forest Classifier. The accuracy of this model was of 83.6%, in determining to which category the property belongs depending on its characteristics. 

The most relevant feature of the property to determine its category was the Kitchen Quality with 7% of weight and the Full bathrooms above grade with 3.9% of weight.

## Description of preliminary data preprocessing

The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.

The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

## Description of preliminary feature engineering and preliminary feature selection, including the decision-making process

The features selected were the ones that are considered the most valuable to determine the values of a Real Estate property. Like the quality of the kitchen, quality of bathrooms, size of the lot and size of the property, to mention some. 

Other important thing to consider was that the features were of categorical data, because of how the Balanced Random Forest Classifier works, it is better to have that type of feature. If it is not categorical data, and it is continuous data, it can also be used because the get_dummies method changes it, but it makes it heavier to process. If the data is continuous, it better be very important. 

## Description of how data was split into training and testing sets

The split of the data in training and testing sets was done using sklearn library. The code used for this was:

 Import libraries for the analysis
 
from sklearn.model_selection import train_test_split

 Split data in training and testing data
 
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y)

We used the default values, so the splitting was 75% of the data for training the model, and 25% of the data to test the model

## Explanation of model choice, including limitations and benefits

We used a Balanced Random Forest Classifier. This model helps us to make a classification of the Real Estate property depending on its value. We made a statistical analysis of the sell prices we have in our database, get the mean of the values, and the properties whose sell price is above the mean are considered “High price” and the values below the mean are classified as “Medium price”.

On the limitations side, we have that it doesn’t give us a specific value, but rather it outputs to which class a property would belong.
Some of the benefits of a Balanced Random Forest Classifier This is a very robust machine learning algorithm, can handle big amounts of data and has a high precision. 


## Description of the communication protocols

To connect the database to the machine learning model we are going to use the library SQLAlchemy and sqlite3.  The first step is to import the library to the file we are working. For the case of the sqlite3, we start by connecting to the database and saving those instructions in an object. In this example we are using the variable “conn” to connect to the database called 'db2_w2tables.sqlite' using the method connect of the sqlite3 library. Here is the code:

  conn = sqlite3.connect('db2_w2tables.sqlite')
  
Then we use the the cursor method to navigate throw the database we just connected to, and save it to an object, in this case it is called c. Here is the code:

c = conn.cursor()

When we want to make queries or retrieve the data from the database, we use the method .execute on the object we saved the cursor. For example, to get the names of the tables we use the code:

c.execute("SELECT name FROM sqlite_master WHERE type='table';")

print(c.fetchall())
