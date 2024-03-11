from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

@app.route('/products', methods=['GET'])
def get_products():
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
    query = "SELECT image, title, price, nft_token_id FROM product"

    # Execute the query
    cursor.execute(query)

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


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)