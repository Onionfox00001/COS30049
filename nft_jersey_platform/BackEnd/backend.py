from flask import Flask, jsonify, request, session
from flask_cors import CORS
import mysql.connector
from datetime import timedelta

app = Flask(__name__)
app.secret_key = 'nft_jersey_platform'
CORS(app, supports_credentials=True)

@app.route('/products', methods=['GET'])
def get_products():
    # Get the category from the query parameters
    category = request.args.get('category')
    search_term = request.args.get('search')

    # Establish the connection
    db = mysql.connector.connect(
        host="feenix-mariadb.swin.edu.au",
        user="s104177995",
        password="180804",
        database="s104177995_db"
    )

    # Create a new cursor
    cursor = db.cursor()

    # SQL query to fetch the required data
    if category and search_term:
        # If a category and search term are provided, return only the products that contain the hashtag in their description and match the search term in their title
        query = "SELECT image, title, price, nft_token_id FROM product WHERE description LIKE %s AND title LIKE %s"
        values = ('%' + category + '%', '%' + search_term + '%')
    elif category:
        # If only a category is provided, return only the products that contain the hashtag in their description
        query = "SELECT image, title, price, nft_token_id FROM product WHERE description LIKE %s"
        values = ('%' + category + '%',)
    elif search_term:
        # If only a search term is provided, return only the products that match the search term in their title
        query = "SELECT image, title, price, nft_token_id FROM product WHERE title LIKE %s"
        values = ('%' + search_term + '%',)
    else:
        # If no category or search term is provided, return all products
        query = "SELECT image, title, price, nft_token_id FROM product"
        values = ()

    # Execute the query
    cursor.execute(query, values)

    # Fetch all the rows
    rows = cursor.fetchall()

    # Convert rows into a list of dictionaries
    products = [{"image": row[0], "title": row[1], "price": row[2], "nft_token_id": row[3]} for row in rows]

    # Don't forget to close the connection
    db.close()

    # Return the product data as JSON
    return jsonify(products)

@app.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    # Establish the connection
    db = mysql.connector.connect(
        host="feenix-mariadb.swin.edu.au",
        user="s104177995",
        password="180804",
        database="s104177995_db"
    )

    # Create a new cursor
    cursor = db.cursor()

    # SQL query to fetch the required data
    query = "SELECT image, title, price, description, nft_token_id, owner_blockchain_id FROM product WHERE nft_token_id = %s"

    # Execute the query
    cursor.execute(query, (id,))

    # Fetch the first row
    row = cursor.fetchone()

    # Check if a row was returned
    if row is None:
        return jsonify({"error": "Product not found"}), 404

    # Convert row into a dictionary
    product = {"image": row[0], "title": row[1], "price": row[2], "description": row[3], "nft_token_id": row[4], "owner_blockchain_id": row[5]}

    # Don't forget to close the connection
    db.close()

    # Return the product data as JSON
    return jsonify(product)

@app.route('/users/<username>', methods=['GET'])
def get_user(username):
    # Establish the connection
    db = mysql.connector.connect(
        host="feenix-mariadb.swin.edu.au",
        user="s104177995",
        password="180804",
        database="s104177995_db"
    )

    # Create a new cursor
    cursor = db.cursor()

    # SQL query to fetch the required data
    query = "SELECT username, password, email, balance, user_blockchain_id FROM user_info WHERE username = %s"

    # Execute the query
    cursor.execute(query, (username,))

    # Fetch the row
    row = cursor.fetchone()

    # Convert row into a dictionary
    user = {"username": row[0], "password": row[1], "email": row[2], "balance": row[3], "user_blockchain_id": row[4]} if row else None

    # Don't forget to close the connection
    db.close()

    # Return the user data as JSON
    return jsonify(user)

@app.route('/sign_up', methods=['POST'])
def signup():
    # Get the request data
    data = request.get_json()

    # Establish the connection
    db = mysql.connector.connect(
        host="feenix-mariadb.swin.edu.au",
        user="s104177995",
        password="180804",
        database="s104177995_db"
    )

    # Create a new cursor
    cursor = db.cursor()

    # SQL query to insert the new user
    query = "INSERT INTO user_info (username, password, email, balance, user_blockchain_id) VALUES (%s, %s, %s, %s, %s)"
    values = (data['username'], data['password'], data['email'], "0", "100")

    # Execute the query
    cursor.execute(query, values)

    # Commit the transaction
    db.commit()

    # Close the connection
    db.close()

    # Return the user data as JSON along with the success message
    return jsonify({'message': 'User created!', 'username': data['username'], 'password': data['password'], 'email': data['email']}), 201

@app.route('/log_in', methods=['POST'])
def login():
    # Get the request data
    data = request.get_json()

    # Establish the connection
    db = mysql.connector.connect(
        host="feenix-mariadb.swin.edu.au",
        user="s104177995",
        password="180804",
        database="s104177995_db"
    )

    # Create a new cursor
    cursor = db.cursor()

    # SQL query to fetch the user
    query = "SELECT password FROM user_info WHERE username = %s"
    values = (data['username'],)

    # Execute the query
    cursor.execute(query, values)

    # Fetch the user
    user = cursor.fetchone()

    # Close the connection
    db.close()

    # Check if the user exists and the password is correct
    if user and user[0] == data['password']:
        # Log the user in
        session['username'] = data['username']
        # Check if the session is created
        if 'username' in session:
            return jsonify({'message': 'Logged in and session created!'})
        else:
            return jsonify({'message': 'Logged in but session not created'}), 500

    return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/get_username', methods=['GET'])
def get_username():
    return jsonify({'username': session.get('username')})

@app.route('/log_out', methods=['POST', 'GET'])
def logout():
    # Remove the username from the session
    session.pop('username', None)
    return jsonify({'message': 'Logged out!'})

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
