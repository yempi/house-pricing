# Machine Learning Model
### Data preprocessing
The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.

The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

### Feature engineering and selection
The features selected were the ones that are considered the most valuable to determine the values of a Real Estate property. Like the quality of the kitchen, quality of bathrooms, size of the lot and size of the property, to mention some. 

Other important thing to consider was that the features were of categorical data, because of how the Balanced Random Forest Classifier works, it is better to have that type of feature. If it is not categorical data, and it is continuous data, it can also be used because the get_dummies method changes it, but it makes it heavier to process. If the data is continuous, it better be very important. 

### Training and testing sets
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

### Model choice
We used a Balanced Random Forest Classifier. This model helps us to make a classification of the Real Estate property depending on its value. We made a statistical analysis of the sell prices we have in our database, get the mean of the values, and the properties whose sell price is above the mean are considered “High price” and the values below the mean are classified as “Medium price”.

On the limitations side, we have that it doesn’t give us a specific value, but rather it outputs to which class a property would belong.
Some of the benefits of a Balanced Random Forest Classifier This is a very robust machine learning algorithm, can handle big amounts of data and has a high precision. 

### Changes in Model Choice
From module 2 to module 3 we added another model.  We used the Balanced Random Forest Classifier to determine which categories of features where the most important in that analysis. Then we added those categories to the Multiple Linear Regression analysis, which was the one we added. 

For the Multiple Linear Regression analysis, we used the most relevant features from the machine learning and the house features that are more common when selecting a house. Like size, number of bedrooms number of bathrooms, number of cars that can be in the garage. 


### Model Training

The Machine Learning model was trained with the default parameters of the Balanced Random Forest Classifier from imblearn library, which are 75% of the data for training and 25% of the data for testing. The Multiple Linear Regression Model in R, was also done with the default parameters. And the model  Linear Regression from sklearn library was trained with 80 % of the data and tested with 20%.

### Accuracy Score

The first analysis was the Balanced Random Forest Classifier from imblearn library, gave a balanced accuracy score of 0.836, which is a pretty high score, considering the maximum is 1.

 Multiple Linear Regression Model in R gave an r squared of 0.72, which is interpreted as the model can explain 72% of the price forecast. 

And the model Linear Regression from sklearn library had an r squared of 0.74 which is interpreted as the model can explain 74% of the price forecast. 

### Description of how model was trained (or retrained, if they are using an existing model)

### Description and explanation of model’s confusion matrix, including final accuracy score

