# Food-Ordering.md
![output-onlinepngtools](https://user-images.githubusercontent.com/62691867/218306147-4175618d-2369-4e05-8908-b0031a9b355a.png)


Choose a restaurant by wanted features and order your favorite food!

## Features

- List all restaurants around by different features: 
	*  type
	* location
	* menu
- Support ordering delivery from restaurant
## Demo:
https://user-images.githubusercontent.com/62691867/218305961-b92b26a0-af93-412b-a8ee-80015e4c515e.mp4

## Getting Started
### Prerequisites :
- Docker
- Git
- python v3.10
- node.js v13.12.0
- mongodb

```
git clone https://github.com/EASS-HIT-PART-A-2022-CLASS-II/food-ordering.git
```
### Install requirements
#### Backend only
```
pip install -r backend/requirements.txt
```

##### Run locally
```
uvicorn backend.main:app --reload
```

##### Docker run
```
cd path-to-project/backend
docker build -t backend
docker run -d -p 8000:8000 backend
```

#### Frontend only
##### Run locally
```
npm run start
```
##### Docker run
```
cd path-to-project/frontend
docker build -t frontend
docker run -d -p 3000:3000 frontend
```
#### Full project run
```
cd path-to-project/
docker compose up -d
```


after docker run/ local run open new tab with the URL: http://localhost:3000/

### Run tests
```
pip install Pytest
pytest -q backend/test.py
```




