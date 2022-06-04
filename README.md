# house-pricing predictor
## Authors
- Rafael
- Yesenia
- Lydia 

## Selected topic

In this project we are developing a machine learning algorithm. The target variable will be the price of an asset, and the features to train it will be the characteristics of the asset. This algorithm can be used for price prediction of any asset, but for our purpose, will use it for predicting the price of real state based on its characteristics. 

## Reasons for choosing the topic

We selected to apply it to real Estate because of the availability of reliable information, and the importance of the housing market for the economy. When looking for a house, it is not easy to know if the house that you are interested in investing in is worth it. Also, there is a debate about whether or not there are bubbles in these assets, so our algorithm can help us have an informed opinion in the topic. 

## Description of data source

In a search for information that we can use to train our machine learning algorithm we found some government sources as well Kaggle, Web scraping is also being considered, but the data reported is not very consistent and the policy of web scraping friendly or not represent a barrier to get the data. Kaggle lets its datasets being used for educational purpose, so we are covered in that aspect.  

The data set we are considering to use to train the machine learning model has 1460 data points, and is according to the requirement of 1000 data points. It has 81 columns from which 1 would be the target, the sale price, and the remaining 80 are potential features. 
Some of the features are categorical variables and other continuous. From a data set exploration, we can see that there are missing values in some rows as well as NA, this will be handled in the preprocessing stage. 

It is a challenging and sufficient dataset for our purpose. 


## Questions to answer with the data

The target variable of our Machine Learning Algorithm would be the sale price of a Real Estate asset. The features that would be input for the model would be the characteristics of the property, like the living area above ground, the number of rooms, bathrooms, quality of materials, as well as other characteristics of the surroundings. 
Other questions that can be answered from this model is which variables account for a higher prediction weight, and which ones are neglectable for this analysis. 


## Description of the communication protocols
The communication protocols used was SQLAlchemy to prepare the SQLitedatabase file to be connected with the function create_engine() all of this with the purpose of using queries.  
