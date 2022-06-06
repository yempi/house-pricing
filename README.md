# Machine Learning Model

## Description of preliminary data preprocessing
The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.

The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

## Description of preliminary feature engineering and preliminary feature selection
The features selected were the ones that are considered the most valuable to determine the values of a Real Estate property. Like the quality of the kitchen, quality of bathrooms, size of the lot and size of the property, to mention some. 

Other important thing to consider was that the features were of categorical data, because of how the Balanced Random Forest Classifier works, it is better to have that type of feature. If it is not categorical data, and it is continuous data, it can also be used because the get_dummies method changes it, but it makes it heavier to process. If the data is continuous, it better be very important. 

## Description of how data was split into training and testing sets
The split of the data in training and testing sets was done using sklearn library. The code used for this was:

 Import libraries for the analysis
```
from sklearn.model_selection import train_test_split
```
 Split data in training and testing data
```
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y)
```
We used the default values, so the splitting was 75% of the data for training the model, and 25% of the data to test the model

## Explanation of model choice, including limitations and benefits
We used a Balanced Random Forest Classifier. This model helps us to make a classification of the Real Estate property depending on its value. We made a statistical analysis of the sell prices we have in our database, get the mean of the values, and the properties whose sell price is above the mean are considered “High price” and the values below the mean are classified as “Medium price”.

On the limitations side, we have that it doesn’t give us a specific value, but rather it outputs to which class a property would belong.
Some of the benefits of a Balanced Random Forest Classifier This is a very robust machine learning algorithm, can handle big amounts of data and has a high precision. 
