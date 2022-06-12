# Database
### Description of the data 

The data set we are considering to use to train the machine learning model has 1460 data points, and is according to the requirement of 1000 data points. It has 81 columns from which 1 would be the target, the sale price, and the remaining 80 are potential features. Some of the features are categorical variables and other continuous. From a data set exploration, we can see that there are missing values in some rows as well as NA, this will be handled in the preprocessing stage.

Data Source: 
https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data

### Description of the data exploration phase of the project

The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.
The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

### Database selection 

The amount of data we are using for this project is not very large. That’s why the database we are using for this project is SQLite. This database system covers all our needs and the large number of libraries for Python makes its use very efficient. 


### Database Integration
The Database stores the data after it has been cleaned and transformed. The data is stored in two tables, for convenience in the fusion they were called table_1 and table_2. The database was created using the library SQLite3 and after the data is saved, it is retrieved using SQLAlquemy and the fusion is done with this library.
