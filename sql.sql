create table users(
       id INT PRIMARY KEY AUTO_INCREMENT,
       username VARCHAR(15) NOT NULL UNIQUE KEY,
       password VARCHAR(255) NOT NULL
);

create table data(
    id INT PRIMARY KEY AUTO_INCREMENT,
    info TEXT,
    created_at DATE,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

mysql -h sql12.freemysqlhosting.net -u sql12390895 -pnC4hdCs9KE


mysql -h db4free.net -u saichandra -p7bf23080