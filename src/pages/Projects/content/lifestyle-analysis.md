---
title: Lifestyle & Life Expectancy Analysis
subtitle: Machine Learning Project
desc: Group project using K-Means clustering and Random Forest with SHAP to analyse how lifestyle factors affect life expectancy.
tags:
  - Python
  - ML
  - Teamwork
  - Communication
  - Agile
  - Technical Documentation
  - Matplotlib
  - Pandas
  - NumPy
  - scikit-learn
detail: Lifestyle & Life Expectancy Analysis
type: more
links:
  GitHub Repo: https://github.com/Eoghaning/lifestyle-life-expectancy-analysis
---

Group project for CSC1044 Machine Learning course. Uses K-Means clustering and Random Forest with SHAP analysis to explore how lifestyle factors - occupation, work hours, sleep, exercise, and rest - affect life expectancy across 10,000 individuals.

The model clusters individuals into 6 lifestyle groups based on daily habits, then uses Random Forest regression to predict age at death. SHAP analysis quantifies each feature's impact, showing both the magnitude and direction of effect on life expectancy. Results showed K-Means produces distinct lifestyle patterns, and the Random Forest achieved R-squared of 0.53 with mean absolute error of 6.74 years.

Note: The original Kaggle dataset has since been removed and is no longer available.

Technologies:

- Python with scikit-learn for machine learning
- SHAP for model interpretability ![Shap](Shap.png)
- Pandas for data manipulation ![Pandas](Pandas.png)
- Matplotlib for visualization ![Matplotlib](Matplotlib.png)
- Jupyter Notebook for development ![Jupyter](Jupyter.png)
