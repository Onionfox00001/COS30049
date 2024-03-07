import mysql.connector

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
query = "SELECT image, title, price FROM product"

# Execute the query
cursor.execute(query)

# Fetch all the rows
rows = cursor.fetchall()

# Now 'rows' is a list of tuples, where each tuple is a row from the table
# For example, to print all the rows:
for row in rows:
    print(f"Image URL: {row[0]}, Title: {row[1]}, Price: {row[2]}")

# Don't forget to close the connection
db.close()