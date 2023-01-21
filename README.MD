# Food-Ordering.md

Choose a restaurant by wanted features and order your favorite food!
## Getting Started

### Prerequisites :
- Docker
- Git
- python v3.10

```
git clone https://github.com/EASS-HIT-PART-A-2022-CLASS-II/food-ordering.git
```
### Install requirements
```
pip install -r backend/requirements.txt
```
### Run locally
```
uvicorn backend.main:app --reload
```
### Run tests
```
pip install Pytest
pytest -q backend/test.py
```

## Features

- List all restaurants around by different features: 
	*  type
	* location
	* menu
- Support ordering delivery from restaurant
- Support restaurant rating

