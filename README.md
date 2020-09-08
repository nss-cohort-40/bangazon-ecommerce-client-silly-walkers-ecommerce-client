# Welcome to the Silly Walkers Bangazon Ecommerce Website!
![alt text](https://www.bestfunnies.com/wp-content/uploads/2012/10/Funny-Shopping-01.jpg)

### Project Capabilities
1. Users of the application will be able to register and login with full authentication.
2. Users authenticated and unauthenticated will be able to view all available products being sold on the marketplace.
3. Users wishing to sell a product will be able to create a product to sell via a simple form.
4. User can see the details for a product that is for sale.
5. A user can view a shopping cart and the items in it specific to them.

### Let's get started and clone down the necessary projects you'll need to get up and running!

### Client Side React Project Setup
1. First create a directory named `Bangazon` that you can download the two required repos into.
2. Inside the root level of the `Bangazon` folder add a folder named `Client`, then download the project repo into `Client` with `clone git@github.com:nss-cohort-40/bangazon-ecommerce-client-silly-walkers-ecommerce-client.git` and `cd` into it after it has downloaded.
3. Once fully installed run `npm install` in your terminal to install all project requirements.
4. Once the download is completed you can use `npm start` to start the application.

### API Side Database Project Setup
1. Inside the root level of the `Bangazon` folder add another folder named `API`. cd into `API`. 
2. Download the project repo into `API` with `clone git@github.com:nss-cohort-40/bangazon-ecommerce-api-silly-walkers-ecommerce-api.git` and `cd` into it after it has downloaded.
3. If you do not have an environment already created we'll need to make one with `python -m venv bangazonEnv`
4. Once the environment is created, you'll need to activate it before any installations. Use `source ./bangazonEnv/bin/activate`
5. use `pip install django autopep8 pylint djangorestframework django-cors-headers pylint-django` to install the requirements for this project.
6. To create the database in the project you'll run `python manage.py makemigrations`.
7. As long as there are no errors you will now run `python manage.py migrate`
8. You should now be able to create a connection to this database using the `sqlite3` installation and connection setup. We suggest following the instruction on this website: `https://github.com/nashville-software-school/bangazon-llc/blob/master/book-2-sql/chapters/SQL_INTRO.md`
9. We have built fixtures with dummy data to get you up and running. To add these to the database, in your terminal and while running your environment and server, use `python managa.py loaddata users` Run this same code for each fixture but changing users out for `cusomters`, `order_procuts`, `payment_types`, `product_types`, `products`, and `orders`.

Let’s be sure we have everything connected and loaded. 
1. In your browser you will see your data available by visiting `http://localhost:8000/`
2. To view the client-side application you will visit `http://localhost:3000/`
3. While on the client side website create a user account using the Register link in the menu bar. 
4. Once logged in you will be able to navigate the site and create a product to sell.

