import mysql.connector

# Database connection configuration
config = {
    'user': 's104177995',
    'password': '180804',
    'host': 'feenix-mariadb.swin.edu.au',
    'database': 's104177995_db'
}

# Create a connection to the database
cnx = mysql.connector.connect(**config)

# Create a cursor object
cursor = cnx.cursor()

# SQL queries to create the tables
tables = {}

tables['user_info'] = (
    "CREATE TABLE IF NOT EXISTS user_info ("
    "  username VARCHAR(255) PRIMARY KEY,"
    "  password VARCHAR(255) NOT NULL,"
    "  email VARCHAR(255) UNIQUE NOT NULL,"
    "  balance DECIMAL(10, 2) NOT NULL,"
    "  user_blockchain_id VARCHAR(255) UNIQUE NOT NULL"
    ") ENGINE=InnoDB")

tables['product'] = (
    "CREATE TABLE IF NOT EXISTS product ("
    "  image VARCHAR(255) NOT NULL,"
    "  title VARCHAR(255) NOT NULL,"
    "  price DECIMAL(10, 2) NOT NULL,"
    "  description TEXT,"
    "  nft_token_id VARCHAR(255) PRIMARY KEY,"
    "  owner_blockchain_id VARCHAR(255),"
    "  FOREIGN KEY (owner_blockchain_id) REFERENCES user_info(user_blockchain_id)"
    ") ENGINE=InnoDB")

tables['transaction'] = (
    "CREATE TABLE IF NOT EXISTS transaction ("
    "  contract_address VARCHAR(255) NOT NULL,"
    "  nft_token_id VARCHAR(255),"
    "  user_blockchain_id_buyer VARCHAR(255),"
    "  user_blockchain_id_seller VARCHAR(255),"
    "  FOREIGN KEY (nft_token_id) REFERENCES product(nft_token_id),"
    "  FOREIGN KEY (user_blockchain_id_buyer) REFERENCES user_info(user_blockchain_id),"
    "  FOREIGN KEY (user_blockchain_id_seller) REFERENCES user_info(user_blockchain_id)"
    ") ENGINE=InnoDB")

# Create each table
for table_name in tables:
    table_description = tables[table_name]
    try:
        print("Creating table {}: ".format(table_name), end='')
        cursor.execute(table_description)
    except mysql.connector.Error as err:
        if err.errno == mysql.connector.errorcode.ER_TABLE_EXISTS_ERROR:
            print("already exists.")
        else:
            print(err.msg)
    else:
        print("OK")

# Data to be inserted
data_user = [
    ("abuncombe0", "mL2~}I<z6x6W", "mward0@4shared.com", 100, "08-198-0807"),
    ("fpyne1", "rE0<BuW19cNutQJh", "cbreward1@cafepress.com", 100, "48-728-3727"),
    ("ecoghlan2", "xT4&HS.>uv$kP@", "rcanto2@php.net", 100, "89-467-8114"),
    ("areiglar3", "pU8\"cJUcykDkbUc", "mswanton3@reddit.com", 100, "42-756-0746"),
    ("pslafford4", "bA1!br4ZaA7", "gsaylor4@usgs.gov", 100, "28-930-8623"),
    ("gfleckness5", "gE7{{+drb*CCwb7U", "jtampling5@jiathis.com", 100, "72-783-1511"),
    ("lcoleson6", "eI6+o5UZ", "dtedman6@umn.edu", 100, "41-801-8415"),
    ("lmarl7", "lX2>H>p5L\"eF9", "sflear7@istockphoto.com", 100, "40-393-4278"),
    ("bstarkings8", "wG3!`E.Vp", "htoy8@unicef.org", 100, "20-109-3675"),
    ("erudge9", "dJ4+A4MA'6p", "rtukely9@shop-pro.jp", 100, "49-836-0912")
]

data_product = [
    ("https://drive.google.com/file/d/12PMJ7xKxWz9oT1rreNFlQDm2MgFI278l/view?usp=sharing", "2006-07 Liverpool Home Shirt Alonso #14", "0.2", "2006-07 Liverpool Home Shirt Alonso #14", "1", "08-198-0807"),
    ("https://drive.google.com/file/d/1kvpV-bq2voNtLF2phPSs7Fixaj7U5qMO/view?usp=sharing", "2004 Italy Home Shirt Baggio #10", "0.18", "2004 Italy Home Shirt Baggio #10", "2", "48-728-3727"),
    ("https://drive.google.com/file/d/1bEvf-pmY7fG93sOAZ9ar3w4JeKMfTX3Z/view?usp=sharing", "1988 Netherlands Home Shirt Van Basten #12", "0.25", "1988 Netherlands Home Shirt Van Basten #12", "3", "89-467-8114"),
    ("https://drive.google.com/file/d/1517x4uq09sPDPXg-MAnY3p8ieACMt5rH/view?usp=sharing", "2002 England Home Shirt Beckham #7", "0.3", "2002 England Home Shirt Beckham #7", "4", "42-756-0746"),
    ("https://drive.google.com/file/d/1qy2eyfYfytmpp7boy42k8HeYcO87qBuq/view?usp=sharing", "2003-04 Arsenal Home Shirt Bergkamp #10", "0.22", "2003-04 Arsenal Home Shirt Bergkamp #10", "5", "28-930-8623"),
    ("https://drive.google.com/file/d/1WVF2cspkBbm_ZWAMNIsqb7QzOIJa3kNu/view?usp=sharing", "1970 Brazil Home Shirt Cafu #2", "0.19", "1970 Brazil Home Shirt Cafu #2", "6", "72-783-1511"),
    ("https://drive.google.com/file/d/1AJESc7TrvoaGmBjneiY3vqEu4wiNWZBg/view?usp=sharing", "2011-12 Chelsea Home Shirt Drogba #11", "0.11", "2011-12 Chelsea Home Shirt Drogba #11", "7", "41-801-8415"),
    ("https://drive.google.com/file/d/1jlMqR4LlUU6FD9FqS_FWdwk4gxDpp6Z_/view?usp=sharing", "2013-14 Barcelona Home Shirt Iniesta #8", "0.15", "2013-14 Barcelona Home Shirt Iniesta #8", "9", "40-393-4278"),
    ("https://drive.google.com/file/d/1NFXhoNXt0wGJjHlVZigu9RNlYIqOeKrO/view?usp=sharing", "1990 Germany Home Shirt Matthaus #10", "0.16", "1990 Germany Home Shirt Matthaus #10", "10", "20-109-3675"),
    ("https://drive.google.com/file/d/1VIuJH7y3q6K5Oue8q257XZq56Lnfdswz/view?usp=sharing", "2022-23 PSG Home Shirt Mbappe #10", "0.27", "2022-23 PSG Home Shirt Mbappe #10", "11", "49-836-0912"),
    ("https://drive.google.com/file/d/1G9OiZSPUQsp-YMVHa2IPIjU9V5LSuBGl/view?usp=sharing", "2022 Argentina Home Shirt Messi #10", "0.32", "2022 Argentina Home Shirt Messi #10", "12", "08-198-0807"),
    ("https://drive.google.com/file/d/1DXRK_QjTZfgi2_Chd3vsWrWVcM5oVbRk/view?usp=sharing", "2012-13 Manchester United Home Shirt Van Persie #20", "0.4", "2012-13 Manchester United Home Shirt Van Persie #20", "13", "48-728-3727"),
    ("https://drive.google.com/file/d/1zuxXP__1b4SGzTQiUasDdbFyssMvHjfv/view?usp=sharing", "1995-96 Juventus Home Shirt Piero #10", "0.19", "1995-96 Juventus Home Shirt Piero #10", "14", "89-467-8114"),
    ("https://drive.google.com/file/d/1c8OA2ycKdGQpDaXN7HiaUttB5ryHbZSN/view?usp=sharing", "2006-07 AC Milan Home Shirt Pirlo #21", "0.31", "2006-07 AC Milan Home Shirt Pirlo #21", "15", "42-756-0746"),
    ("https://drive.google.com/file/d/1Ud1tIr3S_Ga89InrnyHKVr6AqjpOWTWt/view?usp=sharing", "2002 Brazil Home Shirt Ronaldinho #10", "0.33", "2002 Brazil Home Shirt Ronaldinho #10", "16", "28-930-8623"),
    ("https://drive.google.com/file/d/1Gkhg1k9MFoK3gT_Vrve9PRA1dOpb8mof/view?usp=sharing", "2016-17 Real Madrid Home Shirt Cristiano Ronaldo #7", "0.7", "2016-17 Real Madrid Home Shirt Cristiano Ronaldo #7", "17", "72-783-1511"),
    ("https://drive.google.com/file/d/1qUOHWGTRZAtEog_xHKHLntm5-1VXF1Vf/view?usp=sharing", "1998-99 Inter Milan Home Shirt Ronaldo #9", "0.45", "1998-99 Inter Milan Home Shirt Ronaldo #9", "18", "41-801-8415"),
    ("https://drive.google.com/file/d/1E5VJg2Bv2WoHqgpbH3MeIQbYK6ZTThMi/view?usp=sharing", "1999-2000 Manchester United Home Shirt Schmeichel #1", "0.12", "1999-2000 Manchester United Home Shirt Schmeichel #1", "19", "40-393-4278"),
    ("https://drive.google.com/file/d/11TQlTEC7XqPNNzr75v5_gRcsXs6CmBG5/view?usp=sharing", "2000 Netherlands Home Shirt Seedorf #10", "0.41", "2000 Netherlands Home Shirt Seedorf #10", "20", "20-109-3675"),
    ("https://drive.google.com/file/d/1fGcqpzw2nIqYmNhgeWdO7kPboG464K9l/view?usp=sharing", "1998 France Home Shirt Vieira #4", "0.7", "1998 France Home Shirt Vieira #4", "21", "49-836-0912"),
    ("https://drive.google.com/file/d/1S6fL6NV8c965hNSz5SpUSPJ7A-PdG55E/view?usp=sharing", "2008-09 Barcelona Home Shirt Xavi #6", "0.6", "2008-09 Barcelona Home Shirt Xavi #6", "22", "48-728-3727"),
    ("https://drive.google.com/file/d/1E5VJg2Bv2WoHqgpbH3MeIQbYK6ZTThMi/view?usp=sharing", "1998 France Home Shirt Zidane #10", "0.65", "1998 France Home Shirt Zidane #10", "23", "28-930-8623")
]

# SQL query to insert the data
query_user_info = ("INSERT INTO user_info "
         "(username, password, email, balance, user_blockchain_id) "
         "VALUES (%s, %s, %s, %s, %s)")

# SQL query to insert the data
query_product = ("INSERT INTO product "
         "(image, title, price, description, nft_token_id, owner_blockchain_id) "
         "VALUES (%s, %s, %s, %s, %s, %s)")

# Insert each row
for row in data_user:
    cursor.execute(query_user_info, row)

# Insert each row
for row in data_product:
    cursor.execute(query_product, row)

# Commit the changes
cnx.commit()

# Close the cursor and connection
cursor.close()
cnx.close()