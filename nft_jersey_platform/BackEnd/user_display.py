from flask import Flask, jsonify, request, session
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
app.secret_key = 'nft_jersey_platform'
CORS(app)

@app.route('/users', methods=['GET'])
def get_users():
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
    query = "SELECT username, password, email, balance, user_blockchain_id FROM user_info"

    # Execute the query
    cursor.execute(query)

    # Fetch all the rows
    rows = cursor.fetchall()

    # Convert rows into a list of dictionaries
    users = [{"username": row[0], "password": row[1], "email": row[2], "balance": row[3], "user_blockchain_id": row[4]} for row in rows]

    # Don't forget to close the connection
    db.close()

    # Return the user data as JSON
    return jsonify(users)

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
        return jsonify({'message': 'Logged in!'})

    return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/log_out', methods=['POST'])
def logout():
    # Remove the username from the session
    session.pop('username', None)
    return jsonify({'message': 'Logged out!'})

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
